# Training Institute - Production-ready scaffold (frontend + backend + Postgres)

What this scaffold provides:
- Frontend: Vite + React + Tailwind (Dockerfile included)
- Backend: Node.js + Express, JWT auth, PostgreSQL (Dockerized)
- Stripe checkout integration placeholder (requires STRIPE_SECRET)
- Docker Compose to run everything: Postgres, backend, frontend
- Env files and setup to get started quickly

How to run (local dev using Docker Compose)
1. Ensure Docker and Docker Compose are installed.
2. Copy `.env` values in backend/.env and (optionally) frontend/.env (STRIPE_SECRET, JWT_SECRET).
3. From project root run:
   docker compose up --build
4. Frontend will be available at http://localhost:3000 and backend at http://localhost:4000

Notes:
- This is a scaffold with minimal but functional backend. For production hardening:
  - Use HTTPS / TLS, secure secrets with Vault or environment variables in your host.
  - Configure CORS origin restrictions.
  - Use a reverse proxy (NGINX) and set proper caching headers.
  - Set up database migrations (Flyway, Liquibase, Prisma, Knex).
  - Add logging (Winston), monitoring (Prometheus), and CI/CD (GitHub Actions).
  - Use a managed Postgres (RDS / Cloud SQL) in production.
