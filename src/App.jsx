import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Notfound from './components/Notfound/Notfound'
import { UserContextProvider } from './Context/UserContext'


let x = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: '*', element: <Notfound /> },
    ]
  },

])

function App() {

  return <UserContextProvider>
  <RouterProvider router={x}></RouterProvider>
</UserContextProvider>

}

export default App
