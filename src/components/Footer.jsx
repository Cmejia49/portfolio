import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
    FaLinkedin,
  } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='max-w-full scale-100 mx-auto bg-[#613DF2] py-16 px-4 grid lg:flex justify-center text-white'>
      <div className=''>
        <div className='md:flex justify-between'>
            <a href='https://react-icons.github.io/react-icons/search?q=link'><FaFacebookSquare size={30} className="mx-4"/></a>
            <FaInstagram size={30} className="mx-4"/>
            <FaTwitterSquare size={30} className="mx-4"/>
            <FaGithubSquare size={30} className="mx-4"/>
            <FaLinkedin size={30} className="mx-4"/>
        </div>
      </div>
    </div>
  )
}

export default Footer