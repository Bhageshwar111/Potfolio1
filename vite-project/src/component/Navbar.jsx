import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link, Element } from 'react-scroll';



export default function Navbar() {

  const [open, close] = useState(false)

  const togglemenu = () => {
    close(!open)
  }


  const navmenu = [
    { href: "Skill", name: "About" },
    { href: "Potfolio", name: "Portfolio" },
    { href: "Aboutme", name: "Contact" },
  ]


  return (
    <nav className='flex items-center justify-between font-semibold text-xl h-20 bg-gradient-to-r from-violet-800 to-cyan-400 px-3 relative '>
      <div className='text-4xl text-white font-semibold'>Bhageshwar Turan</div>

      <ul className='hidden md:flex gap-4'>
        {
          navmenu.map((item, key) => (
            <li key={key}>
              <Link className='text-white hover:cursor-pointer' to={item.href} smooth={true} duration={500}>{item.name}</Link>
            </li>

          ))
        }
      </ul>

      <div className='block hover:cursor-pointer  md:hidden' onClick={togglemenu}>
        {open ? <RxCross2 /> : <FaBarsStaggered />}

      </div>
      {
        open && (

          <ul className=' absolute top-20 left-0 w-full flex flex-col items-center bg-gradient-to-r from-violet-800 to-cyan-400 gap-4 py-4 text-white md:hidden z-10'>
            {
              navmenu.map((item, key) => (
                <li key={key}>
                  <Link className='text-white hover:cursor-pointer' to={item.href} smooth={true} duration={500}>{item.name}</Link>
                </li>
              ))
            }
          </ul>

        )
      }


    </nav>

  )
}
