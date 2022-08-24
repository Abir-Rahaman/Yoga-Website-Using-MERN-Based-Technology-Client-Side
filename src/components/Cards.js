import React from 'react';
import bg from '../assets/img/cards/bg.png'
import img1 from '../assets/img/cards/card-1.png'
import img2 from '../assets/img/cards/card-2.png'
import img3 from '../assets/img/cards/card-3.png'

const Cards = () => {
  return (
    <div className='' style={{
      background:`url(${bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '250px',
  }}>
    <div className="lg:flex lg:gap-12 mt-20 lg:justify-center  ">
       <div  style={{border: '2px solid #308D7C'}}  className="bg-white p-4 rounded-xl mt-[-80px] lg:w-64 ">
          <div className="flex items-center gap-8 ">
          <h1 className="text-xl font-bold text-center">Make Your <br /> Own Plan For <br /> Yoga</h1>
          <h1  className="text-5xl text-gray-500 font-bold ml-8">1</h1>
          </div>
          <img className="pt-4" src={img1} alt="" />
       </div>
       <div  style={{border: '2px solid #308D7C'}}  className="bg-white p-4 rounded-xl mt-[-80px] ">
          <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold">Find a Yoga<br /> Mentor For <br /> You</h1>
          <h1  className="text-5xl text-gray-500 font-bold ml-8">2</h1>
          </div>
          <img className="pt-4" src={img2} alt="" />
       </div>
  
      <div  style={{border: '2px solid #308D7C'}}  className="bg-white  rounded-xl mt-[-80px] flex p-4 ">
       <div className="w-64">
       <div className="flex">
       <h1 className="text-xl font-bold inline">  Every-Day <br /> Open Master <br /> Classes</h1>
        <p className="text-5xl text-gray-500 font-bold inline ml-24 ">3 </p>
       </div>
        <p className="py-2">We're boosting online yoga by enabling anyone in the world to learn from the best.</p> 
        <button className="font-bold hover:text-slate-600  duration-500">Read More</button>
       </div>
       <div className="">
       <img className="ml-8" src={img3} alt="" />
       </div>
       </div>
    </div>
       
    </div>
  )
};

export default Cards;
