import React from 'react';
import bg from '../assets/img/hero/bg.png'
import guy from '../assets/img/hero/guy.png'

const Hero = () => {
  return (
    <section style={{
      background:`url(${bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition:'right',
     
      
      
  }}>
    <div className="flex ">
        <div className="flex-auto w-44 pl-44 mt-20">
        <h1 className="text-5xl font-bold text-slate-900 ">Yoga To...</h1>
        <h1 className="text-6xl font-bold mt-4 text-slate-900 ">Release Stress </h1>
        <p className="font-bold mt-4 text-gray-500"><small> Maintaining a regular yoga practice can provide physical and mental health benefits. “The purpose of yoga is to build strength, awareness and harmony in both the mind and body.</small></p>
        <button className="bg-amber-500 px-8 py-2 hover:bg-amber-400 duration-300 rounded text-white font-bold mr-6 mt-6">Get Started</button>
        <button className="bg-slate-900 px-8 py-2 hover:bg-slate-800 duration-300 rounded text-white font-bold">Learn More</button>
        </div>
        <div className="flex-auto w-64">
            <img className="w-72 ml-64" src={guy} alt="" />
        </div>
    </div>
      
    </section>
  );
};

export default Hero;