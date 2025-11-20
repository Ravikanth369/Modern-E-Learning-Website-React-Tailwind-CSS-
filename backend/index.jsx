const express = require('express')
const cors = require('cors')
const path = require('path')
const { Pool } = require('pg')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const stripe = require('stripe')(process.env.STRIPE_SECRET || 'sk_test_replace_me')

require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

// Simple auth helpers
const jwtSecret = process.env.JWT_SECRET || 'secret'
function generateToken(user){ return jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '7d' }) }
function authMiddleware(req,res,next){
  const h = req.headers.authorization
  if(!h) return res.status(401).json({error:'missing auth'})
  const [, token] = h.split(' ')
  try{
    req.user = jwt.verify(token, jwtSecret)
    next()
  }catch(e){ res.status(401).json({error:'invalid token'}) }
}

// DB init (create tables if not exist)
async function initDB(){
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT,
      role TEXT DEFAULT 'student'
    );
    CREATE TABLE IF NOT EXISTS courses (
      id SERIAL PRIMARY KEY,
      title TEXT,
      category TEXT,
      summary TEXT,
      syllabus JSONB,
      schedule TEXT,
      fees INTEGER,
      instructor JSONB,
      created_at TIMESTAMP DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS enrollments (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      course_id INTEGER REFERENCES courses(id),
      paid BOOLEAN DEFAULT false,
      enrolled_at TIMESTAMP DEFAULT now()
    );
  `)
  // seed sample courses if empty
  const { rows } = await pool.query('SELECT count(*) FROM courses')
  if(Number(rows[0].count) === 0){
    await pool.query(`INSERT INTO courses (title, category, summary, syllabus, schedule, fees, instructor) VALUES
      ('Full-Stack Web Development','Web Development','React, Node.js, PostgreSQL', '["HTML/CSS","JavaScript","React","Node.js"]','Mon-Wed-Fri, 6-8pm',35000, '{"name":"Amit Sharma","bio":"Senior Engineer"}'),
      ('Data Science & ML','Data Science','Python, Pandas, scikit-learn', '["Python basics","Data Analysis","ML"]','Tue-Thu, 7-9pm',45000, '{"name":"Dr. Meera","bio":"Data Scientist"}')
    `)
  }
}
initDB().catch(err=> console.error('DB init error', err))

// API Routes
app.post('/api/auth/register', async (req,res)=> {
  const { name, email, password } = req.body
  if(!email || !password) return res.status(400).json({ error: 'missing' })
  const hash = await bcrypt.hash(password, 10)
  try{
    const result = await pool.query('INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING id,name,email,role', [name,email,hash])
    const user = result.rows[0]
    const token = generateToken(user)
    res.json({ user, token })
  }catch(e){
    console.error(e)
    res.status(400).json({ error: 'user exists or db error' })
  }
})

app.post('/api/auth/login', async (req,res)=> {
  const { email, password } = req.body
  const { rows } = await pool.query('SELECT * FROM users WHERE email=$1', [email])
  const user = rows[0]
  if(!user) return res.status(400).json({ error: 'invalid' })
  const ok = await bcrypt.compare(password, user.password)
  if(!ok) return res.status(400).json({ error: 'invalid' })
  const token = generateToken(user)
  res.json({ user: { id: user.id, name: user.name, email: user.email, role: user.role }, token })
})

// list courses
app.get('/api/courses', async (req,res)=> {
  const { rows } = await pool.query('SELECT * FROM courses ORDER BY created_at DESC')
  res.json(rows)
})

// course detail
app.get('/api/courses/:id', async (req,res)=> {
  const { id } = req.params
  const { rows } = await pool.query('SELECT * FROM courses WHERE id=$1', [id])
  res.json(rows[0])
})

// enroll (creates enrollment and returns Stripe checkout session url)
app.post('/api/courses/:id/enroll', authMiddleware, async (req,res)=> {
  const { id } = req.params
  const { rows } = await pool.query('SELECT * FROM courses WHERE id=$1', [id])
  const course = rows[0]
  if(!course) return res.status(404).json({ error: 'course not found' })
  // Create enrollment (paid=false) and then create Stripe checkout session (placeholder)
  const enroll = await pool.query('INSERT INTO enrollments (user_id, course_id, paid) VALUES ($1,$2,$3) RETURNING *', [req.user.id, id, false])
  // Create Stripe checkout session (server-side) - minimal placeholder
  try{
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: 'https://example.com/success',
      cancel_url: 'https://example.com/cancel',
      line_items: [{ price_data: { currency: 'inr', product_data: { name: course.title }, unit_amount: course.fees*100 }, quantity: 1 }]
    })
    res.json({ enrollment: enroll.rows[0], checkoutUrl: session.url })
  }catch(e){
    console.error('stripe error', e.message)
    res.json({ enrollment: enroll.rows[0], checkoutUrl: null })
  }
})

// protected route to list my enrollments
app.get('/api/me/enrollments', authMiddleware, async (req,res)=> {
  const { rows } = await pool.query('SELECT e.*, c.title, c.fees FROM enrollments e JOIN courses c ON c.id = e.course_id WHERE e.user_id = $1', [req.user.id])
  res.json(rows)
})

// Serve frontend for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log('Backend running on', PORT))
