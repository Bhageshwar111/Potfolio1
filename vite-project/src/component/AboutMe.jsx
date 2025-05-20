import React from 'react'
import { Link, Element } from 'react-scroll';


export default function AboutMe() {
    return (


        <Element name='Aboutme'>

            <div className='flex flex-col md:flex-row md:items-start items-center justify-center py-10 '>

                <div className='flex  flex-col w-[480px] gap-7 '>

                    <h1 className='text-4xl text-white font-semibold'>About <span className='text-sky-950'>Me</span></h1>


                    <p className='text-xl text-blue-200 ml-10'>Aspiring software developer with hands-on experience. Passionate about coding, problem-solving, and building innovative solutions.Continuously learning and exploring new technologies to shape the future of software development.</p>





                </div>

                <div className='flex flex-col gap-5 '>
                    <div className='font-semibold text-xl'>Let's Connect!</div>
                    <input type="text" name="" id="" placeholder='Your Name' className='bg-white rounded-lg h-10 w-80 focus:border-none focus:outline-none px-1' />
                    <input type="email" name="" id="" placeholder='Your Email' className='bg-white rounded-lg h-10 w-80 focus:outline-none focus:border-none px-1' />
                    <input type="text" name="" id="" placeholder='Your Message' className='bg-white rounded-lg h-40 w-80 focus:outline-none focus:border-none px-1 ' />
                    <button className='bg-blue-500 p-4 font-semibold text-white hover:cursor-pointer rounded-lg border-2 border-blue-700 hover:scale-105 transition-all duration-300'>Send Message</button>
                </div>



            </div>
        </Element>

    )
}
