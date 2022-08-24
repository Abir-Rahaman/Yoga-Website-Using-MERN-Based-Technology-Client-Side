import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import {BsPlayCircleFill} from 'react-icons/bs';
import bg from '../assets/img/video/video.png'

const Features = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-20">

    <div className="mb-64" style={{
      background:`url(${bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '400px',
      width: '50%',
      margin: '0 auto',
      marginTop: '60px',

  }}>
    <div onClick={()=> setIsOpen(!isOpen)} className=" text-red-400 text-6xl hover:text-7xl duration-300 flex justify-center ">
         <BsPlayCircleFill className='mt-44 cursor-pointer'></BsPlayCircleFill>
    </div>
    </div>
     <div className="flex mt-14">
     <div className="ml-96 ">
      <p className="bg-red-500 w-20 h-1 my-4"></p>
      <h1 className="text-3xl font-bold">The Better Way to <br /> Start Yoga</h1>
    </div>
    <div className="ml-44 ">
      <p className="font-bold"><small>Practice Anywhere,Anytime,Explore a new a way <br /> to exercise and learn more about yourself. <br /> We are providing the best.</small></p>
      <button className="bg-orange-400 px-8 py-2 hover:bg-amber-400 duration-300 rounded text-white font-bold mr-6 mt-6 ">Get Started</button>
    </div>
     </div>
  <ModalVideo channel='youtube' autoplay isOpen={isOpen} onClose={()=> setIsOpen(false)} videoId='klmBssEYkdu'></ModalVideo>
    </div>
  );
};

export default Features;
