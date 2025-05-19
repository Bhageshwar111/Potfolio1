import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";



export default function Navbar() {

  const [open, close] = useState(false)

  const togglemenu = () => {
    close(!open)
  }


  const navmenu = [
    { href: "", name: "home" },
    { href: "", name: "about" },
    { href: "", name: "services" },
  ]


  return (
    <nav className='flex items-center justify-between font-semibold text-xl h-20 bg-gradient-to-r from-violet-800 to-cyan-400 px-3 relative '>
      <div>Bhageshwar Turan</div>

      <ul className='hidden md:flex gap-4'>
        {
          navmenu.map((item, key) => (
            <li key={key}><a href={item.href}>{item.name}</a></li>
          ))
        }
      </ul>

      <div className='block  md:hidden' onClick={togglemenu}>
        {open ? <RxCross2 /> : <FaBarsStaggered />}

      </div>
      {
        open && (
          <ul className=' absolute top-14 flex  flex-col items-center bg-amber-600 w-full left-0 gap-4'>
            {
              navmenu.map((item, key) => (
                <li key={key}><a href={item.href}>{item.name}</a></li>
              ))
            }
          </ul>

        )
      }


    </nav>

  )
}
