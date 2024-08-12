import React, { useEffect, useRef } from 'react';
import Marquee from "react-fast-marquee";

import Image from '../../assets/Image5.png'
// import 'swiper/css/swiper.css'; // Import Swiper styles

function ClientsSlider() {


  return (
    <div className=" flex items-center justify-around pt-2 pb-2">
     <Marquee pauseOnHover={true} speed={150} >
      <div className='w-[30rem]  h-64  mr-5  ml-5  bg-gray-500 border border-xl border-black rounded-xl  '></div>
      <div className='w-[30rem]  h-64  mr-5  ml-5  bg-gray-500 border border-xl border-black rounded-xl  '></div>
      <div className='w-[30rem]  h-64  mr-5  ml-5  bg-gray-500 border border-xl border-black rounded-xl  '></div>
      <div className='w-[30rem]  h-64  mr-5  ml-5  bg-gray-500 border border-xl border-black rounded-xl  '></div>
      <div className='w-[30rem]  h-64  mr-5  ml-5  bg-gray-500 border border-xl border-black rounded-xl  '></div>
      <div className='w-[30rem]  h-64  mr-5  ml-5  bg-gray-500 border border-xl border-black rounded-xl  '></div>
        {/* <p>I can be a React component, multiple React components, or just some text.</p>
        <img src={Image} className='h-[10rem] w-[10rem] rounded-full object-cover'></img> */}
      </Marquee>
    </div>
  );
}

export default ClientsSlider;
