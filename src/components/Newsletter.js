import React from "react";
import bg from "../assets/img/cards/bg.png";
import {MdOutlineEmail} from 'react-icons/md';

const Newsletter = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
      }}
      className="mt-44 py-24"
    >
      <div className="border-2 border-red-500 mx-44 py-24">
        <h1 className="text-center text-2xl text-white font-bold">Subscribe Our Newsletter</h1>
        <p className="text-center text-white font-bold mt-1 mb-6">
          <small>Subscribe our newsletter for further updates about us</small>
        </p>
        <div className="flex justify-center">
        <div className="border-orange-400">
        <MdOutlineEmail className = "text-orange-400 relative top-9 ml-3 text-2xl"></MdOutlineEmail> 
        <input type="text" placeholder=" Enter Your Email Address"   class="text-red-500 outline-none border-solid border-2 border-orange-400 px-14 w-96 mr-8 py-2 bg-transparent"   />  
        </div> 
      
        <div className="">
        <button  className="bg-orange-400 px-8 py-2 hover:bg-amber-400 duration-300 rounded text-white font-bold mr-6 mt-6 ">  Subscribe</button>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Newsletter;
