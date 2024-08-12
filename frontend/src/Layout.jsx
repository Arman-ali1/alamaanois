import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
// import Practice1 from './components/Practice/Practice1.jsx'
// import Practice from './components/Practice/Practice.jsx'
import Footer from './components/Footer/Footer.jsx'
import Contact from './components/Contact/Contact.jsx'

// import ClientsSlider from './components/Practice/ClientsSlider.jsx'

function Layout() {
  return (
    <div className='overflow-hidden '>
    <Navbar className="absolute"/>
    <Outlet className="absolute"/>
    <Footer className="absolute"/>
    {/* <Practice1/> */}
    {/* <ClientsSlider></ClientsSlider> */}
    
    </div>
  )
}

export default Layout