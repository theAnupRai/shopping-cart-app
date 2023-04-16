import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 max-w-6xl m-auto'>
      <NavLink to='/'>
        <div className='ml-5'>
          <img src="" alt="App Logo" />
        </div>
      </NavLink>
      <div className='flex items-center justify-center font-medium mr-5 space-x-6'>
        <NavLink to='/'>
          <p className='text-slate-100'>Home</p>
        </NavLink>
        <NavLink to='/cart'>
          <div className='text-slate-100'><FaShoppingCart/></div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar