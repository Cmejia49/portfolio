import React from 'react'
import avatar from '../assets/avatar.png'
const About = () => {
  return (
    <div className='w-full py-[10rem]  px-4 scale-100 bg-white'>
        <h1 className='font-bold text-center text-5xl'>ABOUT ME</h1>
        <div className='mx-[5rem] md:flex justify-center'>
             <div className="md:flex justify-center md:w-1/2 h-[25rem]">
                <img className="h-full w-full md:w-1/2 md:h-58" src={avatar} alt="/"/>
            </div>
            <div className="px-[5rem] flex justify-center flex-wrap flex-col p-8 md:w-1/2">
            <h3 className='font-bold text-size justify-center text-3xl'>A FULLSTACK DEVELOPER</h3>
                <p className=' text-slate-700 text-2xl font-thin font-sans leading-[38px]'>A problem solver and develop a digital solution. like to develop using .net core framework and c#.<br></br>
                 Intersted to create a microservice arhitecture application and currently enhancing my front-end skill.<br></br>
                 I have a serious passion for coding. </p>
            </div>
        </div>
    </div>
  )
}

export default About