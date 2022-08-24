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
    <div className='min-w-full scale-100 mx-auto bg-[#613DF2] py-16 px-4 grid lg:flex flex-row justify-center text-white'>
      <div className='items-center'>
        <div className='flex flex-row justify-between'>
            <a href='https://www.facebook.com/profile.php?id=100084204351788'><FaFacebookSquare size={30} className="mx-4"/> </a>
            <a href='https://www.instagram.com/cmejia49/?hl=en'> <FaInstagram size={30} className="mx-4"/> </a>
            <a href='https://twitter.com/dev_topher'> <FaTwitterSquare size={30} className="mx-4"/> </a>
            <a href='https://github.com/Cmejia49'> <FaGithubSquare size={30} className="mx-4"/> </a>
            <a href='https://www.linkedin.com/in/christopher-m-882393248/'><FaLinkedin size={30} className="mx-4"/></a>
        </div>
        <h1 className='text-center p-3'>Email: cmtope.dev@gmail.com</h1>
      </div>
    </div>
  )
}

export default Footer