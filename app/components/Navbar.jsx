'use client'
import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
      <Link href='#top'>
        <Image
          src={assets.logo}
          width={112}
          height={40}
          alt='Website Logo'
          className='cursor-pointer mr-14'
        />
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm opacity-50'>
        {['Home', 'About', 'Services', 'My Work', 'Contact me'].map(
          (item, index) => (
            <li key={index}>
              <Link
                className='font-Ovo'
                href={`#${item.toLowerCase().replace(' ', '')}`}
              >
                {item}
              </Link>
            </li>
          )
        )}
      </ul>

      <div className='flex items-center gap-4'>
        <button onClick={toggleDarkMode} aria-label='Toggle Dark Mode'>
          <Image
            src={assets.moon_icon}
            width={24}
            height={24}
            alt='Dark Mode Toggle'
          />
        </button>
        <Link
          href='#contact'
          className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'
        >
          Contact
          <Image
            src={assets.arrow_icon}
            width={12}
            height={12}
            alt='Arrow Icon'
          />
        </Link>
        <button
          className='block md:hidden ml-3 cursor-pointer'
          onClick={toggleMenu}
          aria-label='Toggle Mobile Menu'
        >
          <Image
            src={assets.menu_black}
            width={24}
            height={24}
            alt='Menu Icon'
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`flex md:hidden flex-col gap-4 py-10 fixed ${
          menuOpen ? 'right-0' : '-right-64'
        } top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500`}
      >
        <div className='absolute right-6 top-6' onClick={toggleMenu}>
          <Image
            src={assets.close_black}
            width={20}
            height={20}
            alt='Close Menu'
            className='cursor-pointer'
          />
        </div>
        {['Home', 'About', 'Services', 'My Work', 'Contact me'].map(
          (item, index) => (
            <li key={index}>
              <Link
                className='font-Ovo'
                href={`#${item.toLowerCase().replace(' ', '')}`}
                onClick={toggleMenu}
              >
                {item}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  )
}

export default Navbar
