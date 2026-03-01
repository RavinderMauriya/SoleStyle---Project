// import React from 'react'
// import { ShoppingCart, User, Heart, Search, Sun } from 'lucide-react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <>
//       <div className='flex justify-between items-center px-20 py-5 sticky top-0 z-50 bg-white/90'>

//         {/* Left */}
//         <ul className='flex items-center gap-7'>
//           <li className='text-2xl font-extrabold mr-5'>SoleStyle</li>
//           <li className='font-bold text-gray-800'><Link to="/">Home</Link></li>
//           <li className='font-bold text-gray-800'><Link to="/shop/men">Men</Link></li>
//           <li className='font-bold text-gray-800'><Link to="/shop/women">Women</Link></li>
//           <li className='font-bold text-gray-800'><Link to="/shop/kids">Kids</Link></li>
//           <li className='font-bold text-gray-800'><Link to="/about">About</Link></li>
//         </ul>

//         {/* Right */}
//         <div className='flex items-center gap-5'>
//           <Sun className='border border-transparent hover:bg-gray-100' />
//           <div className='flex items-center bg-gray-100 rounded-2xl border border-transparent focus-within:border-gray-400 px-3 py-1'>
//             <Search size={18} className='text-gray-500 mr-2' />
//             <input
//               type="text"
//               placeholder='Search...'
//               className='border-none bg-gray-100 outline-none'
//             />
//           </div>
//           <Heart className='cursor-pointer' />
//           <ShoppingCart className='cursor-pointer' />
//           <User className='cursor-pointer' />
//         </div>
//       </div>
//       <hr className="border-t border-gray-200" />
//     </>
//   )
// }

// export default Navbar

import React, { useState } from 'react'
import { ShoppingCart, User, Heart, Search, Sun, Menu, X, Codesandbox } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = ({ setFormOpen }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='sticky top-0 z-50 bg-white/90 backdrop-blur border-b'>

        <div className='flex justify-between items-center px-4 sm:px-6 lg:px-16 py-4'>

          {/* Logo */}
          <div className='text-2xl font-extrabold'>
            <Link className='flex items-center gap-2' to="/"><Codesandbox className='text-green-400' /> SoleStyle</Link>
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
            <div className='hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1'>
              <Search size={18} className='text-gray-500 mr-2' />
              <input
                type="text"
                placeholder='Search...'
                className='bg-transparent outline-none text-sm w-32 lg:w-48'
              />
            </div>

            <Sun className='cursor-pointer hidden sm:block' />
            <Heart className='cursor-pointer hidden sm:block' />
            <ShoppingCart className='cursor-pointer' />
            <User className='cursor-pointer hidden sm:block' onClick={() => { setFormOpen(true)}} />

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