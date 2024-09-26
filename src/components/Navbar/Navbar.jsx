import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
export default function Navbar() {

  const [counter, setCounter] = useState(0)
  useEffect(() => { }, [])
  return <>
    <nav className="sticky top-0 z-10 bg-transparent bg-opacity-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8 bg-slate-700" alt="Virtualizeer Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-800">Virtual<span className='self-center text-2xl font-semibold whitespace-nowrap text-slate-600'>izeer</span></span>
        </NavLink>
      </div>
    </nav>
  </>
}