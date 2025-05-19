import React from 'react'

export default function AboutMe() {
    return (
        <div className=' flex flex-col md:flex-row justify-around items-center py-10 '>

            <div className='flex  flex-col w-[400px] bg-amber-900'>
                <div>
                    <h1>about <span>me</span></h1>


                    <p>Aspiring software developer with hands-on experience. Passionate about coding, problem-solving, and building innovative solutions.Continuously learning and exploring new technologies to shape the future of software development.</p>


                </div>


            </div>

            <div className='flex flex-col gap-5'>
                <div className='font-semibold text-xl'>Let's Connect!</div>
                <input type="text" name="" id="" placeholder='Your Name' className='bg-white rounded-sm h-10 w-80' />
                <input type="email" name="" id="" placeholder='Your Email' className='bg-white rounded-sm h-10 w-80' />
                <input type="text" name="" id="" placeholder='Your Message' className='bg-white rounded-sm h-40 w-80' />
            </div>



        </div>
    )
}
