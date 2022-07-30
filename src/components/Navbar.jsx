import React from 'react'

const Navbar = () => {
  return (
   <div className='sticky top-0 z-50 bg-white shadow-md'>
    <div className='flex justify-between items-center h-19 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold'>CM</h1>
        <ul className='hidden md:flex uppercase'>
            <li className='p-4'>Skill</li>
            <li className='p-4'>Project</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar           