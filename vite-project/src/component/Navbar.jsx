import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-around font-semibold text-xl h-20 bg-gradient-to-r from-violet-800 to-cyan-400 '>
        <div>Bhageshwar Turan</div>

        <ul className='flex gap-10'>
            <li><a href="#">About</a></li>
            <li><a href="#">Potfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

  )
}
