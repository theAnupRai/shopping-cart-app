import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div className='flex justify-between items-center h-20 max-w-6xl m-auto'>
      <NavLink to='/'>
        <div className='ml-5'>
          <h2 className='text-green-500 text-2xl'>AcadWin Store</h2>
        </div>
      </NavLink>
      <div className='flex items-center justify-center font-medium mr-5 space-x-6'>
        <NavLink to='/'>
          <p className='text-slate-100'>Home</p>
        </NavLink>
        <NavLink to='/cart'>
          <div className='text-slate-100 relative'>
            <FaShoppingCart className='text-2xl'/>
            {
              cart.length > 0 &&
              <span className='text-slate-100 absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full'>{cart.length}</span>
            }
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar