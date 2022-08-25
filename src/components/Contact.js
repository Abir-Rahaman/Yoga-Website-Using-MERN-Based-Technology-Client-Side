import React from 'react';
import bg from '../assets/img/contact/bg.png'

const Contact = () => {
  return (
    <div  style={{
      background:`url(${bg})`,
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      backgroundPosition: 'center',
      height: '600px',
 
  }} className="  flex  justify-center mt-40">
       <div className=" my-auto mr-14">
        <h1 className="text-3xl font-bold">Get in Touch With Us for <br /> Yoga Course.</h1>
        <p><small>Get in touch for any kind of help. We here to give you the best solution and also here to help </small></p>
       </div>
       <div style={{height: '470px'}} className="p-8  bg-white drop-shadow-2xl mt-20">
      <p> <input type="text" placeholder="First Name"   class="text-red-500 outline-none border-solid border-2 border-slate-400 px-4 w-80  py-2 bg-transparent"   /> </p> 
       <p className="my-4"><input type="text" placeholder="Last Name"   class="text-red-500 outline-none border-solid border-2 border-slate-400 px-4 w-80  py-2 bg-transparent"   /> </p> 
      <p> <input required type="email"  placeholder="Email Address" class="text-red-500 outline-none border-solid border-2 border-slate-400 px-4 w-80  py-2 bg-transparent"   /> </p> 
         <p  className="my-4"><textarea placeholder=" Your Massage" class="text-red-500 outline-none border-solid border-2 border-slate-400 px-4 w-80 py-2 bg-transparent"  name="" id="" cols="40" rows="6"></textarea></p>
         <button type='submit' className="bg-orange-400 px-8 py-2 hover:bg-amber-400 duration-300 rounded text-white font-bold mr-6 ">Send Massage</button>

       </div>

    </div>
  );
};

export default Contact;
