import React from 'react';
import bg from '../assets/img/hero/bg.png'
import guy from '../assets/img/hero/guy.png'
import Header from './Header';

const Hero = () => {
  return (
    <div  style={{
      background:`url(${bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition:'right',
      position: 'relative',
      bottom: '40px',
  }}>
    <Header></Header>
    <section >
    <div className="lg:flex pt-20">
     
        <div className="flex-auto lg:w-44 lg:pl-44 mt-40 lg:text-left text-center">
        <h1 className="lg:text-5xl  text-3xl font-bold text-slate-900 ">Yoga To...</h1>
        <h1 className="lg:text-5xl text-3xl font-bold mt-4 text-slate-900 ">Release Stress </h1>
        <p className="font-bold lg:mt-0 mt-24 lg:text-base text-2xl	 text-gray-500"><small> Maintaining a regular yoga practice can provide physical and mental health benefits. “The purpose of yoga is to build strength, awareness and harmony in both the mind and body.</small></p>
        <button className="bg-orange-400 px-8 py-2 hover:bg-amber-400 duration-300 rounded text-white font-bold mr-6 mt-6">Get Started</button>
        <button className="bg-slate-900 px-8 py-2 hover:bg-slate-800 duration-300 rounded text-white font-bold">Learn More</button>
        </div>
        <div className="flex-auto  w-64">
            <img className="lg:w-72 lg:ml-64 ml-16 lg:mt-0 pt-20 " src={guy} alt="" />
        </div>
    </div>
      
    </section>
    </div>
  );
};

export default Hero;