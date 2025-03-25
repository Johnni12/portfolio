import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <figure>
        <Image
          src={assets.profile_img}
          alt='Profile'
          width={128}
          height={128}
          className='rounded-full'
        />
      </figure>

      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi there! I'm John,
        <Image src={assets.hand_icon} alt='Wave' width={24} height={24} />
      </h3>

      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Fullstack Web Developer
      </h1>

      <p className='max-w-2xl mx-auto font-Ovo'>I build things for the web</p>

      <div className='flex gap-4 mt-4'>
        <Link
          href='#contact'
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt='Contact Me'
            width={16}
            height={16}
          />
        </Link>
        <Link
          href='/sample-resume.pdf'
          download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt='Download'
            width={16}
            height={16}
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
