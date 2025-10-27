import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer' 
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
   <div className="flex flex-col min-h-screen">
  
  {/* Fixed Navbar */}
    <Navbar />

    {/* Page Content */}
    <div className="flex-grow pt-40 md:pt-24">
      <Outlet />
    </div>

    {/* Footer (sticks to bottom) */}
    <Footer />
    
  </div>

  )
}

export default AppLayout
