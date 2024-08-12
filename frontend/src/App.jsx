import { useState } from 'react'
import './App.css'
import Home from './components/home/Home.jsx'
import Service from './components/Services/Service.jsx'
// import Blankspace from './components/Blankspace/Blankspace.jsx'
import Clients from './components/Clients/Clients.jsx'
import Join from './components/Joinprocess/Join.jsx'
import Testimonial from './components/Testimonial/Testimonial.jsx'

function App() {

  return (
    <>
      <div className='bg-white text-slate-950  w-screen overflow-x-hidden border-b border-gray-500 '>
      <Home></Home>
      {/* <Blankspace></Blankspace> */}
      <Service></Service>
      <Clients></Clients>
      <Join></Join>
      <Testimonial></Testimonial>
      </div>
    </>
  )
}

export default App
