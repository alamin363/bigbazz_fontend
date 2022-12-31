import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../pages/Footer/Footer'
import { Navbar } from '../pages/Navbar/Navbar'
export const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
