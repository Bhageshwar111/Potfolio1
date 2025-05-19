import React from 'react'
import Navbar from './component/Navbar'
import About from './component/About'
import TechStack from './component/TechStack'
import Potfolio from './component/Potfolio'
import Experience from './component/Experience'

export default function App() {
  return (
    <div class="bg-gradient-to-r from-violet-800 to-cyan-400  ">
      <Navbar/>
       <About/>
       <TechStack/>
       <Potfolio/>
      {/* <Experience/>    */}
      
      
    </div>

    

  )
}
