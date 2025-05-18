import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";





export default function TechStack() {
    return (
        <>
            <div className='flex justify-center gap-10'>
                <div className='text-3xl font-semibold'>My Tech Stack</div>
                <div><FaHtml5 className='text-5xl text-fuchsia-950' /></div>
                <div><FaCss3Alt className='text-5xl text-fuchsia-950' /></div>
                <div><IoLogoJavascript className='text-5xl text-fuchsia-950' /></div>
                <div><FaReact className='text-5xl text-fuchsia-950' /></div>
            </div>


            <div className='flex flex-col justify-center w-full items-center mt-20 gap-8'>
                <div className='text-5xl '>Skills</div>
                <div className='text-xl font-semibold'>I worked on various frontend projects. Check them there.</div>
                <div className='h-60 w-70 border-1 rounded-2xl flex flex-col gap-3 items-center px-4'>
                    <div className='font-semibold text-3xl'>Frontend</div>
                    <div className='flex items-center gap-25'>
                        <div><FaHtml5 className='text-5xl text-fuchsia-950' /></div>
                        <div><FaCss3Alt className='text-5xl text-fuchsia-950' /></div>
                    </div>
                    <div className='flex justify-between w-45'>
                        <div>HTML</div>
                        <div>CSS</div>
                    </div>
                    <div className='flex items-center gap-25'>
                        <div><IoLogoJavascript className='text-5xl text-fuchsia-950' /></div>
                        <div><FaReact className='text-5xl text-fuchsia-950' /></div>
                    </div>
                    <div className='flex justify-between w-45'>
                        <div>JavaScript</div>
                        <div>React</div>
                    </div>
                </div>
            </div>
        </>
    )
}
