"use client";
import React, { useState, useEffect } from 'react'
import { navbar } from './data'
import Link from 'next/link'
import { CrossLogo, MainLogo, MenuLogo } from '../icons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-[95%] mt-[10px] relative" role="navigation" aria-label="Main navigation">
      {/* Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-2 h-full md:px-3">
        <MainLogo className="h-[40px] w-[60px] md:h-[80px] md:w-[180px] -rotate-2 md:mb-2" aria-label="Company logo" />
        <button
          className="md:hidden text-[#ff7b7b] text-2xl z-50"
          onClick={handleMenuClick}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <CrossLogo className="size-8" /> : <MenuLogo className="size-8"/>}
        </button>
      </div>

      {/* Main Navbar */}
      <div
        id="mobile-menu"
        className={`fixed md:relative top-0 right-0 h-full w-[85%] md:w-full md:h-[60px] bg-gradient-to-b from-[#ff7b7b] to-[#ffb5b5] text-white flex flex-col md:flex-row justify-start md:justify-center items-center pt-20 md:pt-0 px-6 md:px-0 md:gap-10 rounded-l-xl md:rounded-xl z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}
        role="menu"
        aria-orientation={isOpen ? 'vertical' : 'horizontal'}
      >
        {navbar.map((item, index) => (
          <Link 
            href={item.route} 
            key={index} 
            onClick={handleLinkClick}
            className="w-full md:w-auto"
            role="menuitem"
          >
            <div className="text-lg md:text-base font-bold md:font-medium hover:font-bold cursor-pointer flex items-center gap-2 px-4 py-3 md:py-0 transition-colors duration-200 hover:bg-[white] hover:text-[#ff7b7b] md:hover:bg-transparent md:hover:text-white rounded-lg text-white">
              {item.Options}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
