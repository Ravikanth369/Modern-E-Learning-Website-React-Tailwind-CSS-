import React, { createContext, useContext, useState } from 'react'
import API from './api'

const AuthContext = createContext()

export function AuthProvider({ children }){
  const [user, setUser] = useState(()=> {
    const raw = localStorage.getItem('ti_user')
    return raw? JSON.parse(raw): null
  })
  const login = async ({ email, password })=>{
    const res = await API.post('/api/auth/login', { email, password })
    localStorage.setItem('ti_token', res.data.token)
    localStorage.setItem('ti_user', JSON.stringify(res.data.user))
    setUser(res.data.user)
  }
  const register = async (payload)=>{
    const res = await API.post('/api/auth/register', payload)
    localStorage.setItem('ti_token', res.data.token)
    localStorage.setItem('ti_user', JSON.stringify(res.data.user))
    setUser(res.data.user)
  }
  const logout = ()=>{
    localStorage.removeItem('ti_token')
    localStorage.removeItem('ti_user')
    setUser(null)
  }
  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = ()=> useContext(AuthContext)
