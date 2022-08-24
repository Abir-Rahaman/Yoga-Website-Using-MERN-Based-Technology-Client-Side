import React from "react";
import course1 from '../assets/img/courses/course-1.png'
import course2 from '../assets/img/courses/course-2.png'
import course3 from '../assets/img/courses/course-3.png'
import {AiFillStar} from "react-icons/ai"
import {FaStarHalfAlt} from "react-icons/fa"

const Courses = () => {
  return (
    <div className=" mt-24">
      <div className="text-center ">
        <h1 className="font-bold text-4xl my-4 ">Popular Courses</h1>
        <p className="font-bold text-slate-400">
          Practice Anywhere,Anytime,Explore a new a way to exercise and learn <br /> more about yourself. We are providing the best.
        </p>
      </div>
      <div className="flex justify-center gap-24 mt-14">
        <div className="">
          <img src={course1} alt="" />
          <p className="font-bold text-xl mt-2">  Exclusive Yoga Training & <br /> Immersion  </p>
          <p className="font-bold text-slate-400 my-4 content-justify">
          <small>Practice Anywhere,Anytime,Explore a new a way <br /> to exercise and learn  more about yourself. We are <br /> providing the best.</small>
          </p>
          <div className="flex items-center gap-24">
          <div className="flex text-orange-500">
          <AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><FaStarHalfAlt></FaStarHalfAlt> 
          </div>
          <div className="">
          <small className="inline cursor-pointer hover:text-red-400 font-bold  text-slate-400  bg-zinc-900 px-4 py-1 rounded-full">Get Stared</small>
          </div>
          </div>
        </div>
        <div className="">
          <img src={course2} alt="" />
          <p className="font-bold text-xl mt-2">  Exclusive Yoga Training & <br /> Immersion  </p>
          <p className="font-bold text-slate-400 my-4 content-justify">
          <small>Practice Anywhere,Anytime,Explore a new a way <br /> to exercise and learn  more about yourself. We are <br /> providing the best.</small>
          </p>
          <div className="flex items-center gap-24">
          <div className="flex text-orange-500">
          <AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><FaStarHalfAlt></FaStarHalfAlt> 
          </div>
          <div className="">
          <small className="inline cursor-pointer hover:text-red-400 font-bold  text-slate-400 bg-zinc-900 px-4 py-1 rounded-full">Get Stared</small>
          </div>
          </div>
    
        </div>
        <div className="">
          <img src={course3} alt="" />
          <p className="font-bold text-xl mt-2">  Exclusive Yoga Training & <br /> Immersion  </p>
          <p className="font-bold text-slate-400 my-4 content-justify">
          <small>Practice Anywhere,Anytime,Explore a new a way <br /> to exercise and learn  more about yourself. We are <br /> providing the best.</small>
          </p>
          <div className="flex items-center gap-24">
          <div className="flex text-orange-500">
          <AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><FaStarHalfAlt></FaStarHalfAlt> 
          </div>
          <div className="">
          <small className="inline cursor-pointer hover:text-red-400 font-bold  text-slate-400  bg-zinc-900 px-4 py-1 rounded-full">Get Stared</small>
          </div>
          </div>
    
        </div>
      
      </div>
    </div>
  );
};

export default Courses;
