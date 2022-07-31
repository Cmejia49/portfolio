import React from 'react'


const Navbar = ({clickSkill,clickProject,clickAbout,clickContact}) => {
  return (
   <div className='sticky top-0 z-50 bg-white shadow-md'>
    <div className='flex justify-between items-center h-19 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold'>CM</h1>
        <ul className='hidden md:flex uppercase'>
            <li className=''>
              <button onClick={clickSkill} className='p-4 bg-white hover:bg-[#613DF2]'>SKILLS</button>
            </li>
            <li className=''>
              <button onClick={clickProject}  className='p-4 bg-white hover:bg-[#613DF2]'>PROJECTS</button>
            </li>
            <li className=''>
              <button onClick={clickAbout} About className='p-4 bg-white hover:bg-[#613DF2]'>ABOUT</button>
            </li>
            <li className=''>
              <button onClick={clickContact}  className='p-4 bg-white hover:bg-[#613DF2]'>CONTACT</button>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar           