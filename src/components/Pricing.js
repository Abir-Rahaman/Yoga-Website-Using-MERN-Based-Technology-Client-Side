import React from 'react';
import {BsFillArrowRightCircleFill} from "react-icons/bs"

const Pricing = () => {
  return(
    <div className="pt-14 bg-gray-200 mt-20 mx-10 border-4 border-amber-600">
       <div className="text-center ">
        <h1 className="font-bold text-4xl my-4 ">Pick a Pricing Plan</h1>
        <p className="font-bold text-slate-400">
          <small>Pick a pricing plan and get started your journey with us for build your body and mind</small>
        </p>
      </div>
      <div className="flex justify-center gap-24 my-20">
        <div className="px-4 py-20 bg-white">
          <p className='text-center text-xl font-bold'>Single Yoga Class</p>
          <p className='text-center my-6 font-bold'>$15.</p>
          <p className='text-center font-bold mb-6'><small>Discover Your Class!</small></p>
          <p ><small className='flex items-center gap-2 font-bold my-2  ml-8'> <BsFillArrowRightCircleFill className='text-red-500'></BsFillArrowRightCircleFill> <span  >Pay as you go</span></small></p>
          <p ><small className='flex items-center gap-2 font-bold ml-8'> <BsFillArrowRightCircleFill className='text-red-500'></BsFillArrowRightCircleFill> <span>Perfect fot non-residence</span></small></p>
          <p ><small className='flex items-center gap-2 font-bold my-2 ml-8'> <BsFillArrowRightCircleFill className='text-red-500'></BsFillArrowRightCircleFill> <span>Discover Your Class!</span></small></p>
          <p ><small className='flex items-center gap-2 font-bold ml-8'> <BsFillArrowRightCircleFill className='text-red-500'></BsFillArrowRightCircleFill> <span>Access to all classes.</span></small></p>
          <button className="bg-orange-400 px-24 py-2  hover:bg-amber-400 duration-300 rounded text-white font-bold mr-6 mt-12">Get Started</button>
        </div>
        <div className="px-4 py-20 bg-white">
          <p className='text-center text-xl font-bold'>Single Yoga Class</p>
          <p className='text-center my-6 font-bold '>$15.</p>
          <p className='text-center font-bold mb-6'><small>Discover Your Class!</small></p>
          <p ><small className='flex items-center gap-2 font-bold my-2 ml-8' > <BsFillArrowRightCircleFill className='text-red-500'></BsFillArrowRightCircleFill> <span  >Pay as you go</span></small></p>
          <p ><small className='flex items-center gap-2 font-bold ml-8'> <BsFillArrowRightCircleFill className='text-red-500'></BsFillArrowRightCircleFill> <span>Perfect fot non-residence</span></small></p>
          <p ><small className='flex items-center gap-2 font-bold my-2 ml-8'> <BsFillArrowRightCircleFill className='text-red-500'></BsFillArrowRightCircleFill> <span>Discover Your Class!</span></small></p>
          <p ><small className='flex items-center gap-2 font-bold ml-8'> <BsFillArrowRightCircleFill className='text-red-500'></BsFillArrowRightCircleFill> <span>Access to all classes.</span></small></p>
          <button className="bg-orange-400 px-24 py-2  hover:bg-amber-400 duration-300 rounded text-white font-bold mr-6 mt-12">Get Started</button>
        </div>
        <div className="px-4 py-20 bg-white">
          <p className='text-center text-xl font-bold'>Single Yoga Class</p>
          <p className='text-center my-6 font-bold'>$15.</p>
          <p className='text-center font-bold mb-6'><small>Discover Your Class!</small></p>
          <p ><small className='flex items-center gap-2 font-bold my-2 ml-8' > <BsFillArrowRightCircleFill className='text-red-500'></BsFillArrowRightCircleFill> <span  >Pay as you go</span></small></p>
          <p ><small className='flex items-center gap-2 font-bold ml-8'> <BsFillArrowRightCircleFill className='text-red-500'></BsFillArrowRightCircleFill> <span>Perfect fot non-residence</span></small></p>
          <p ><small className='flex items-center gap-2 font-bold my-2 ml-8'> <BsFillArrowRightCircleFill className='text-red-500'></BsFillArrowRightCircleFill> <span>Discover Your Class!</span></small></p>
          <p ><small className='flex items-center gap-2 font-bold ml-8'> <BsFillArrowRightCircleFill className='text-red-500'></BsFillArrowRightCircleFill> <span>Access to all classes.</span></small></p>
          <button className="bg-orange-400 px-24 py-2  hover:bg-amber-400 duration-300 rounded text-white font-bold mr-6 mt-12">Get Started</button>
        </div>
      </div>
    </div> 
  )
};

export default Pricing;
