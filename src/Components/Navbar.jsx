
import React, { useState } from 'react'
import { ShoppingCart, User, Heart, Search, Sun, Menu, X, VectorSquare } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ setFormOpen }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='sticky top-0 z-50 bg-white/90 backdrop-blur border-b'>

        <div className='flex justify-between items-center px-4 sm:px-6 lg:px-16 py-4'>

          {/* Logo */}
          <div className='text-2xl font-extrabold'>
            <Link className='flex items-center gap-2' to="/"><VectorSquare className='text-green-400' /> SoleStyle</Link>
          </div>

          {/* Desktop Menu */}
          <ul className='hidden lg:flex items-center gap-8 font-bold text-gray-800'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop/men">Men</Link></li>
            <li><Link to="/shop/women">Women</Link></li>
            <li><Link to="/shop/kids">Kids</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          {/* Right Section */}
          <div className='flex items-center gap-4'>

            {/* Search (hide on small screens) */}
            {/* <div className='hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1'> */}
            <div
              className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1 border border-transparent hover:border-green-400 focus-within:border-green-400 transition"
            >
              <Search size={18} className='text-gray-500 mr-2' />
              <input
                type="text"
                placeholder='Search...'
                className='bg-transparent outline-none text-sm w-32 lg:w-48'
              />
            </div>

            <Sun className='cursor-pointer hidden sm:block' />
            <Heart className='cursor-pointer hidden sm:block' />
            <ShoppingCart className='cursor-pointer' onClick={() => navigate('/cart')} />
            <User className='cursor-pointer hidden sm:block' onClick={() => { setFormOpen(true) }} />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className='lg:hidden'
            >
              {open ? <X /> : <Menu />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className='lg:hidden px-6 pb-4'>
            <ul className='flex flex-col gap-4 font-bold text-gray-800'>
              <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
              <li><Link to="/shop/men" onClick={() => setOpen(false)}>Men</Link></li>
              <li><Link to="/shop/women" onClick={() => setOpen(false)}>Women</Link></li>
              <li><Link to="/shop/kids" onClick={() => setOpen(false)}>Kids</Link></li>
              <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
            </ul>
          </div>
        )}

      </div>
    </>
  )
}

export default Navbar