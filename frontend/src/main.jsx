import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Form, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import App from './App.jsx'
import Contact from './components/Contact/Contact.jsx'
import Quickhelp from './components/QuickMail/Quickhelp.jsx'




// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route   path='/' element={<Layout />}>
      <Route path='' element={<App />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/help' element={<Quickhelp />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
