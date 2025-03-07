"use client";
import React, { useState } from 'react'
import { navbar } from './data'
import Link from 'next/link'
import { CrossLogo, MainLogo, MenuLogo, } from '../icons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[95%] mt-[30px] relative">
      {/* Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-4 md:px-10 h-[60px]">
        <MainLogo className="h-8 md:h-10" />
        <button
          className="md:hidden text-[#325818] text-2xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CrossLogo className="size-8" /> : <MenuLogo className="size-8"/>}
        </button>
      </div>

      {/* Main Navbar */}
      <div
        className={`fixed md:relative top-0 right-0 h-full w-[85%] md:w-full md:h-[60px] bg-gradient-to-b from-[#325818] to-[#789e1f] text-white flex flex-col md:flex-row justify-start md:justify-center items-center pt-20 md:pt-0 px-6 md:px-0 md:gap-10 rounded-l-xl md:rounded-xl z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}
      >
        {navbar.map((item, index) => (
          <Link href={item.route} key={index}>
            <div className="text-lg md:text-base font-bold md:font-medium hover:font-bold cursor-pointer flex items-center gap-2 px-4 py-3 md:py-0">
              {item.Options}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
