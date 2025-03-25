'use client'
import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
    document.documentElement.classList.toggle('dark')
  }
const toggleMenu = () => {
  setMenuOpen((prev) => !prev)
}

  return (
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between bg-white shadow-md'>
      <a href='#top'>
        <Image
          src={assets.logo}
          width={112}
          height={40}
          alt='logo'
          className='cursor-pointer mr-14'
        />
      </a>

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm opacity-50'>
        <li>
          <a className='font-Ovo' href='#top'>
            Home
          </a>
        </li>
        <li>
          <a className='font-Ovo' href='#about'>
            About
          </a>
        </li>
        <li>
          <a className='font-Ovo' href='#services'>
            Services
          </a>
        </li>
        <li>
          <a className='font-Ovo' href='#work'>
            My Work
          </a>
        </li>
        <li>
          <a className='font-Ovo' href='#contact'>
            Contact me
          </a>
        </li>
      </ul>

      <div className='flex items-center gap-4'>
        <button onClick={toggleDarkMode}>
          <Image src={assets.moon_icon} className='w-6' alt='moon icon' />
        </button>
        <a
          href='#contact'
          className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'
        >
          Contact
          <Image src={assets.arrow_icon} className='w-3' alt='arrow icon' />
        </a>
        <button className='block md:hidden ml-3' onClick={toggleMenu}>
          <Image src={assets.menu_black} className='w-6' alt='menu black' />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`flex md:hidden flex-col gap-4 py-10 fixed ${
          menuOpen ? 'right-0' : '-right-64'
        } top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500`}
      >
        <div className='absolute right-6 top-6' onClick={toggleMenu}>
          <Image
            src={assets.close_black}
            alt='close'
            className='w-5 cursor-pointer'
          />
        </div>
        <li>
          <a className='font-Ovo' href='#top'>
            Home
          </a>
        </li>
        <li>
          <a className='font-Ovo' href='#about'>
            About
          </a>
        </li>
        <li>
          <a className='font-Ovo' href='#services'>
            Services
          </a>
        </li>
        <li>
          <a className='font-Ovo' href='#work'>
            My Work
          </a>
        </li>
        <li>
          <a className='font-Ovo' href='#contact'>
            Contact me
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
