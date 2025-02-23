import React from 'react'
import { navbar } from './data'
import Link from 'next/link'
import { MainLogo } from '../icons'

const Navbar = () => {
  return (
    <div className="flex justify-between w-[85%] border border-blue-500 h-[100px] fixed z-40 items-center px-[30px] rounded-full fixed top-4">
        <div><MainLogo className='text-slate-900 h-5'/></div>
        
        <div className="flex gap-10 items-center">
          {navbar.map((item, index)=>(  
            <Link href={item.route} key={index}>
              <div className="text-base hover:text-xl hover:font-bold">{item.Options}</div>
            </Link>
          ))}
          
          </div>
        <div>Button</div>
      </div>
  )
}

export default Navbar