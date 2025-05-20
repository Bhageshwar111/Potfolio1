import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import img from '../assets/images/Background.jpg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";




export default function About() {
    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-center gap-10 p-6 min-h-screen'>
                <div className='w-full md:w-1/2 flex flex-col items-start gap-6'>
                    <TypeAnimation className='font-semibold text-'
                        sequence={[
                            // Same substring at the start will only be typed out once, initially

                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Web Developer',
                            1000,
                            'Front-end Developer',
                            1000,

                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <div className='text-5xl text-sky-600 font-semibold'>Hey, I am</div>
                    <div className='text-5xl text-white font-semibold'>Bhageshwar Turan</div>
                    <div className='text-3xl font-semibold text-sky-600'>I am a front-end developer</div>
                    <div className='flex gap-8 items-center'>
                        <button className='border-2 border-sky-600 shadow-sm shadow-white rounded-2xl h-12 p-2 font-semibold hover:scale-105  transition-all duration-300    '>Download now</button>
                        <div className='p-2 bg-sky-500 justify-center items-center rounded-full hover:scale-105 transition-all duration-300'>
                            <a href="https://github.com/Bhageshwar111"><FaGithub className='text-3xl' /></a>
                        </div>
                        <div className='p-2 bg-sky-500 justify-center items-center rounded-full hover:scale-105 transition-all duration-300'>
                            <a href="https://www.linkedin.com/jobs/"><FaLinkedin className='text-3xl' /></a>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <img className='h-100 w-130' src={img} alt="" />

                </div>
            </div>



        </>
    )
}
