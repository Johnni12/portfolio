import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
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

      {/* Hidden on small screens, flex on md+ */}
      <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
        <li>
          <a href='#top'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#work'>My Work</a>
        </li>
        <li>
          <a href='#contact'>Contact me</a>
        </li>
      </ul>

      <div className='flex items-center gap-2'>
        <a href='#contact' className='flex items-center gap-1'>
          Contact
          <Image
            src={assets.arrow_icon}
            width={12}
            height={12}
            alt='arrow icon'
          />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
