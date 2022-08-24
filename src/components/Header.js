import React, { useState } from 'react';
import logo from '../assets/img/logo.png'
import Nav from './Nav';


const Header = () => {
  const [header,setHeader]= useState(false);
  return (
    <header className={`${header ? 'top-0' : 'top-6'} fixed lg:mt-0 mt-[-40px] bg-orange-400 w-full lg:w-[1200px] lg:ml-44 rounded h-[80px] shadow-amber-100 px-4 lg:px-8 z-20  transition-all duration-500` }>
      <div className="flex items-center py-4 gap-12 text-white font-bold">
      <a href="">
          <img className='pl-8'  src={logo} alt="" />
        </a>
        <div className="flex py-2 gap-14 mx-auto">
        
        <a href="">
         <p>Home</p>
        </a>
        <a href="">
          Classes
        </a>
        <a href="">
         Features
        </a>
        <a href="">
         Contact
        </a>
        </div>
        <button className="bg-fill-transparent-900 border-double border-4 border-slate-800  px-8 py-2 hover:bg-slate-800 duration-300 rounded text-white font-bold">Sign Up</button>
        <button className="bg-slate-900 px-8 py-2 border-double border-4 border-slate-800  hover:bg-slate-800 duration-300 rounded text-white font-bold">Log n</button>

       
      </div>
       
    </header>
  )
};

export default Header;
