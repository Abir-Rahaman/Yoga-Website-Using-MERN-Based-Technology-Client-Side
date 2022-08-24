import React from "react";
import { facts } from "../data";
import CountUp from 'react-countup';
import sign from '../assets/img/john-cena.png'

const Facts = () => {
  return (
    <section className="mx-44 mt-20">
      <div className="container mx-auto flex  ">
        <div className="grid grid-cols-2 gap-x-24 gap-y-8">
          {facts.map((item, index) => {
            const {startNumber, endNumber,unit,title,desc} = item;
            return (
              <div key={index}>
                <div className="">
                <h2 className="text-4xl font-bold">
                  <CountUp start={startNumber} end={endNumber} duration={4} enableScrollSpy></CountUp>
                   {unit}+
                </h2>
                
                <div className="text-xl font-bold">
                  {title} 
                </div>
                <p className=" font-bold text-slate-600"> <small >{desc}</small> </p>
               
                </div>
                </div>
            );
          })}
        </div>
        <div className=" items-center ml-44 mt-16">
            <h1 className="text-3xl font-bold">Relax And Enjoy a Personalized  Day  Yoga With Us.</h1>
            <img className="w-28 mt-8" src={sign} alt="" />
            <p className=" font-bold text-black mt-1">John Chena <span className=" font-bold text-slate-600"><small>/Founder</small></span> </p>
        </div>
        
      </div>
    </section>
  );
};

export default Facts;
