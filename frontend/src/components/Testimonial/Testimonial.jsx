import React from 'react'
import Marquee from "react-fast-marquee";
import Image1 from '../../assets/people.png'
import logo from '../../assets/trinity-logo.png'

function Testimonial() {
  return (
    <div className='pb-2 '>
        <div className=" flex items-center justify-around p-5  bg-black flex-col gap-y-12 text-white ">
            <div>
                <h1 className="text-5xl text-white font-sans font-bold">Gallary.</h1>
            </div>
            <Marquee pauseOnHover={true} speed={150} className='p-10'>
                <div className='w-[30rem]  h-64  mr-5  ml-5  bg-black border border-xl border-white rounded-xl shadow-xl shadow-neutral-700 p-6 hover:scale-125 transition duration-300 ease-linear sm:bg-cover sm:bg-center sm:bg-no-repeat sm:bg-fixed m-0 sm:flex sm:justify-center sm:items-center'>
                    {/* <div className='h-[4rem] w-[4rem] bg-white rounded-full  p-2 hover:scale-150' >
                        <img src={logo} className='h-[3rem] w-[3rem] bg-white rounded-full '></img>
                    </div>
                    <p className='text-2xl pb-2'>Mentorship</p>
                    <p className='p-0.5 '>Mentorship is at the core of</p>
                    <p className='p-0.5 '>Pedalstart and we don't believe in</p>
                    <p className='p-0.5 '>the "one-size-fits-all" advices that</p>
                    <p className='p-0.5 '>founders often get.</p> */}
                    <img src={Image1} className='h-[13rem] w-[18rem] bg-white  '></img>
                </div>
                <div className='w-[30rem]  h-64  mr-5  ml-5  bg-black border border-xl border-white rounded-xl shadow-xl shadow-neutral-700 p-6 hover:scale-125 transition duration-300 ease-linear'>
                    {/* <div className='h-[4rem] w-[4rem] bg-white rounded-full  p-2 hover:scale-150' >
                        <img src={logo} className='h-[3rem] w-[3rem] bg-white rounded-full '></img>
                    </div>
                    <p className='text-2xl pb-2'>Backend Services</p>
                    <p className='p-0.5 '>It's wonderful to hear that Trinity Infotech has</p>
                    <p className='p-0.5 '>provided you with outstanding backend services! </p>
                    <p className='p-0.5 '>And I'm sure Trinity Infotech appreciates your</p>
                    <p className='p-0.5 '>gratitude for their excellent service!.</p> */}
                </div>
                <div className='w-[30rem]  h-64  mr-5  ml-5  bg-black border border-xl border-white rounded-xl shadow-xl shadow-neutral-700 p-6 hover:scale-125 transition duration-300 ease-linear'>
                    {/* <div className='h-[4rem] w-[4rem] bg-white rounded-full  p-2 hover:scale-150' >
                        <img src={logo} className='h-[3rem] w-[3rem] bg-white rounded-full '></img>
                    </div>
                    <p className='text-2xl pb-2'>Cyber Security</p>
                    <p className='p-0.5 '>It's fantastic to hear that Trinity Infotech has provided</p>
                    <p className='p-0.5 '>with exceptional cybersecurity services.</p>
                    <p className='p-0.5 '>Cybersecurity is paramount in today's digital</p>
                    <p className='p-0.5 '>landscape. Thanks to keeping our systems secure!</p> */}
                </div>
                <div className='w-[30rem]  h-64  mr-5  ml-5  bg-black border border-xl border-white rounded-xl shadow-xl shadow-neutral-700 p-6 hover:scale-125 transition duration-300 ease-linear'>
                    {/* <div className='h-[4rem] w-[4rem] bg-white rounded-full  p-2 hover:scale-150' >
                        <img src={logo} className='h-[3rem] w-[3rem] bg-white rounded-full '></img>
                    </div>
                    <p className='text-2xl pb-1'>Software Services</p>
                    <p className='p-0.5 '>I'm glad you found the software service If you have any</p>
                    <p className='p-0.5 '>further assistance, feel free to ask. And although I'm</p>
                    <p className='p-0.5 '>not specifically affiliated with Trinity Infotech, I'm</p>
                    <p className='p-0.5 '>sure they'd appreciate your thanks if they've provided valuable assistance</p> */}
                </div>
                <div className='w-[30rem]  h-64  mr-5  ml-5  bg-black border border-xl border-white rounded-xl shadow-xl shadow-neutral-700 p-6 hover:scale-125 transition duration-300 ease-linear'>
                    {/* <div className='h-[4rem] w-[4rem] bg-white rounded-full  p-2 hover:scale-150' >
                        <img src={logo} className='h-[3rem] w-[3rem] bg-white rounded-full '></img>
                    </div>
                    <p className='text-2xl pb-2'>Network Services</p>
                    <p className='p-0.5 '>It's wonderful to hear that you've found Trinity</p>
                    <p className='p-0.5 '>Infotech's network services to be excellent! They</p>
                    <p className='p-0.5 '>must be providing "one-size-fits-all" advices that</p>
                    <p className='p-0.5 '>for valuable solutions and support.</p> */}
                </div>
                <div className='w-[30rem]  h-64  mr-5  ml-5  bg-black border border-xl border-white rounded-xl shadow-xl shadow-neutral-700 p-6 hover:scale-125 transition duration-300 ease-linear'>
                    {/* <div className='h-[4rem] w-[4rem] bg-white rounded-full  p-2 hover:scale-150' >
                        <img src={logo} className='h-[3rem] w-[3rem] bg-white rounded-full '></img>
                    </div>
                    <p className='text-2xl pb-2'>Cloud Services</p>
                    <p className='p-0.5 '>I'm glad to hear that you've had a positive experience</p>
                    <p className='p-0.5 '>with Trinity Infotech's cloud services! Cloud services</p>
                    <p className='p-0.5 '>are essential for many businesses today, scalability,</p>
                    <p className='p-0.5 '>flexibility, and reliability. Thanks a lot</p> */}
                </div>
  
            </Marquee>
        </div>
    </div>
  )
}

export default Testimonial
