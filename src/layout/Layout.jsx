import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  const [sideOpen, setSideOpen] = useState(false)
  return (
    <div className='bg-slate-100 relative'>
        <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen}/>
        <Navbar setSideOpen={setSideOpen}/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout