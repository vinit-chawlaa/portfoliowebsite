import React, { useState } from 'react'
import logo from "../assets/images/35.jpg";

const Navbar = () => {

    const [isopen,setIsopen] = useState(false)
  return (
    <div>
        <nav className='w-screen bg- h-18 flex items-center fixed top-0 left-0 z-50 bg-white border-b-1 border-gray-500'>
          <div className='left-5 flex items-center'>
            <img src={logo} alt="logo"  className='w-20 h-17'/> 
           <h4>VINIT CHAWLA</h4>
          </div>
          

          <ul className='absolute justify-center w-screen gap-10 hidden md:flex'>
          <li className='hover:text-orange-500'><a href="#services">Services</a></li>
         
            <li>About me</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>

          <div className='justify-end w-screen right-5 absolute hidden md:flex'>
          <button className='bg-violet-800 px-5 py-2 rounded-[5px] text-white cursor-pointer hover:bg-inherit hover:text-black transition-all hover:border-violet-600 hover:border-2'>Contact</button>
          </div>

         
            <button onClick={() => setIsopen(!isopen)} className='md:hidden text-2xl absolute right-10 cursor-pointer'>
             ☰
            </button>

            <div className={`${isopen ? 'block' : 'hidden'} md:hidden flex absolute top-18  w-screen bg-violet-400 justify-center`}>
            <ul className='absolute  gap-10 md:flex h-35'>
            <li className='bg-blue-300  w-screen text-center cursor-pointer py-3'>Services</li>
            <li className='bg-blue-300 w-screen text-center cursor-pointer py-3'>About me</li>
            <li className='bg-blue-300  w-screen text-center cursor-pointer py-3'>Portfolio</li>
            <li className='bg-blue-300  w-screen text-center cursor-pointer py-3'>Testimonials</li>
            <button className='bg-blue-600 w-screen text-center text-white cursor-pointer py-3'>Contact</button>
             </ul> 
            </div>
          
        </nav>
    </div>
  )
}

export default Navbar