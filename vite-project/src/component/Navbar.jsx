import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-around font-semibold text-xl bg-gradient-to-r from-blue-500 to-white '>
        <div>Bhageshwar Turan</div>

        <ul className='flex gap-10'>
            <li><a href="#">About</a></li>
            <li><a href="#">Potfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

  )
}
