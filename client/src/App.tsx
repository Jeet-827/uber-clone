import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import Login from './Pages/Login.tsx'
import Register from './Pages/Register.tsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App