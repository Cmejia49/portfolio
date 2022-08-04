import React,{useState} from 'react'


const Navbar = ({clickSkill,clickProject,clickAbout,clickContact,clickTop}) => {
  const [nav,setNav] = useState(false);
    
  const handleNav = ()=>{
    setNav(!nav);
  }
  return (
   <div className='sticky top-0 z-50 bg-white shadow-md'>
    <div className='flex justify-between items-center h-19 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold'><button onClick={clickTop}>CM</button></h1>
          <button onClick={()=>{handleNav()}} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className='hidden md:flex uppercase'>
            <li className=''>
              <button onClick={clickSkill} className='p-4 bg-white hover:bg-[#613DF2]'>SKILLS</button>
            </li>
            <li className=''>
              <button onClick={clickProject}  className='p-4 bg-white hover:bg-[#613DF2]'>PROJECTS</button>
            </li>
            <li className=''>
              <button onClick={clickAbout} className='p-4 bg-white hover:bg-[#613DF2]'>ABOUT</button>
            </li>
            <li className=''>
              <button onClick={clickContact}  className='p-4 bg-white hover:bg-[#613DF2]'>CONTACT</button>
            </li>
          </ul>
        </div>
        <div className={!nav ? 'fixed right-0 top-10 bg-white shadow-xl w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 md:hidden':'fixed right-[-100%]'}>
          <h1 className='w-full text-3xl font-bold m-4'><button onClick={clickTop}>CM</button></h1>
          <ul className='uppercase'>
          <li className=''>
              <button onClick={clickSkill} className='p-4 bg-white hover:bg-[#613DF2]'>SKILLS</button>
            </li>
            <li className=''>
              <button onClick={clickProject}  className='p-4 bg-white hover:bg-[#613DF2]'>PROJECTS</button>
            </li>
            <li className=''>
              <button onClick={clickAbout} className='p-4 bg-white hover:bg-[#613DF2]'>ABOUT</button>
            </li>
            <li className=''>
              <button onClick={clickContact}  className='p-4 bg-white hover:bg-[#613DF2]'>CONTACT</button>
            </li>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar           