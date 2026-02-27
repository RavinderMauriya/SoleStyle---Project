import React from 'react'
import { ShoppingCart, User, Heart, Search, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between items-center px-20 py-5 sticky top-0 z-50 bg-white/90'>

        {/* Left */}
        <ul className='flex items-center gap-7'>
          <li className='text-2xl font-extrabold mr-5'>SoleStyle</li>
          <li className='font-bold text-gray-800'><Link to="/">Home</Link></li>
          <li className='font-bold text-gray-800'><Link to="/shop/men">Men</Link></li>
          <li className='font-bold text-gray-800'><Link to="/shop/women">Women</Link></li>
          <li className='font-bold text-gray-800'><Link to="/shop/kids">Kids</Link></li>
          <li className='font-bold text-gray-800'><Link to="/about">About</Link></li>
        </ul>

        {/* Right */}
        <div className='flex items-center gap-5'>
          <Sun className='border border-transparent hover:bg-gray-100' />
          <div className='flex items-center bg-gray-100 rounded-2xl border border-transparent focus-within:border-gray-400 px-3 py-1'>
            <Search size={18} className='text-gray-500 mr-2' />
            <input
              type="text"
              placeholder='Search...'
              className='border-none bg-gray-100 outline-none'
            />
          </div>
          <Heart className='cursor-pointer' />
          <ShoppingCart className='cursor-pointer' />
          <User className='cursor-pointer' />
        </div>
      </div>
      <hr className="border-t border-gray-200" />
    </>
  )
}

export default Navbar