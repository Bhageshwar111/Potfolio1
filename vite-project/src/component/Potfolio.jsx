import React from 'react'
import { FaGithub } from "react-icons/fa";
import photo from "../assets/images/Background.jpg"


export default function
    () {
    return (
        <div className=' flex flex-col  items-center md: justify-center text-white mt-40'>
            <div className='justify-items-start w-100 flex flex-col gap-2'>
                <div className='font-semibold text-3xl'>Potfolio</div>
                <div>

                    <img className='h-80 w-100' src={photo} alt="" />
                </div>
            </div>
            <div >

                <div >
                    <div className='font-semibold text-2xl'>Project #1</div>
                    <div>UI for frontend development using React.</div>
                    <div>
                        <button></button>
                        <div className='p-2 text-black  bg-purple-500 justify-center w-12 items-center rounded-full'>
                            <a href="https://github.com/Bhageshwar111"><FaGithub className='text-3xl' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
