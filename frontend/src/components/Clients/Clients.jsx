import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Image1 from "../../assets/microsoft-logo.png";
import Image2 from "../../assets/aws1.png";
import Image3 from "../../assets/nvidia.png";
import Image4 from "../../assets/Fortinet.png";
import Image5 from "../../assets/sonicwall.png";
import Image6 from "../../assets/sophos.png";
import Image7 from "../../assets/anti.png";
import Image8 from "../../assets/cisco.png";
import Image9 from "../../assets/mentorship.png";
import Image10 from "../../assets/people.png";
import Image11 from "../../assets/investor.png";
import Image12 from "../../assets/funding.png";
import Image13 from "../../assets/people.png";

function Clients() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const[isHovered9, setIsHovered9] = useState(false);

  return (
    <div id="clients">
      <div className="relative flex items-center justify-around flex-col p-10">
        <div className="mb-5  sm:w-[700px] text-center w-[320px] text-black sm:text-5xl text-xl font-bold shadow-bottom-red">
          <h1 className="p-3 shadow-bottom-black  shadow-xl  shadow-gray-900 rounded-md">
            Our honorable Top Performers
          </h1>
        </div>
        {/* <div className='m-10 flex items-center justify-around flex-col p-1 border border-gray-500'>  */}
        <Marquee
          speed={150}
          className="  via-black border-t border-b border-gray-500"
        >
          <div className="flex items-center justify-around overflow-y-hidden">
            <p className="text-9xl text-green-900 text-center pb-20">....</p>
            <img
              className="h-[10rem] w-[10rem]  rounded-full shadow-lg p-10  bg-teal-200 border-green-800 border-[5px]  hover:opacity-100 hover:p-2"
              style={{
                filter: isHovered1 ? "grayscale(0%)" : "grayscale(100%)",
              }}
              onMouseEnter={() => setIsHovered1(!isHovered1)}
              onMouseLeave={() => setIsHovered1(!isHovered1)}
              src={Image13}
            />
            <p className="text-9xl text-green-900 text-center pb-20">....</p>
            <img
              className="h-[10rem] w-[10rem]  rounded-full shadow-lg p-10  bg-teal-200 border-green-900 border-[5px]  hover:opacity-100 hover:p-2"
              style={{
                filter: isHovered2 ? "grayscale(0%)" : "grayscale(100%)",
              }}
              onMouseEnter={() => setIsHovered2(!isHovered2)}
              onMouseLeave={() => setIsHovered2(!isHovered2)}
              src={Image13}
            ></img>
            <p className="text-9xl text-green-900 text-center pb-20">....</p>
            <img
              className="h-[10rem] w-[10rem]  rounded-full shadow-lg p-10  bg-teal-200 border-green-900 border-[5px]  hover:opacity-100 hover:p-2"
              style={{
                filter: isHovered3 ? "grayscale(0%)" : "grayscale(100%)",
              }}
              onMouseEnter={() => setIsHovered3(!isHovered3)}
              onMouseLeave={() => setIsHovered3(!isHovered3)}
              src={Image13}
            ></img>
            <p className="text-9xl text-green-900 text-center pb-20">....</p>
            <img
              className="h-[10rem] w-[10rem]  rounded-full shadow-lg p-10  bg-teal-200 border-green-900 border-[5px]  hover:opacity-100 hover:p-2"
              style={{
                filter: isHovered4 ? "grayscale(0%)" : "grayscale(100%)",
              }}
              onMouseEnter={() => setIsHovered4(!isHovered4)}
              onMouseLeave={() => setIsHovered4(!isHovered4)}
              src={Image13}
            ></img>
            <p className="text-9xl text-green-900 text-center pb-20">....</p>
            <img
              className="h-[10rem] w-[10rem]  rounded-full shadow-lg p-10  bg-teal-200 border-green-900 border-[5px]  hover:opacity-100 hover:p-2"
              style={{
                filter: isHovered5 ? "grayscale(0%)" : "grayscale(100%)",
              }}
              onMouseEnter={() => setIsHovered5(!isHovered5)}
              onMouseLeave={() => setIsHovered5(!isHovered5)}
              src={Image13}
            ></img>
            <p className="text-9xl text-green-900 text-center pb-20">....</p>
            <img
              className="h-[10rem] w-[10rem]  rounded-full shadow-lg p-10  bg-teal-200 border-green-900 border-[5px]  hover:opacity-100 hover:p-2"
              style={{
                filter: isHovered6 ? "grayscale(0%)" : "grayscale(100%)",
              }}
              onMouseEnter={() => setIsHovered6(!isHovered6)}
              onMouseLeave={() => setIsHovered6(!isHovered6)}
              src={Image13}
            ></img>
            <p className="text-9xl text-green-900 text-center pb-20">....</p>
            <img
              className="h-[10rem] w-[10rem]  rounded-full shadow-lg p-10  bg-teal-200 border-green-900 border-[5px]  hover:opacity-100 hover:p-2"
              style={{
                filter: isHovered7 ? "grayscale(0%)" : "grayscale(100%)",
              }}
              onMouseEnter={() => setIsHovered7(!isHovered7)}
              onMouseLeave={() => setIsHovered7(!isHovered7)}
              src={Image13}
            ></img>
            <p className="text-9xl text-green-900 text-center pb-20">....</p>
            <img
              className="h-[10rem] w-[10rem]  rounded-full shadow-lg p-10  bg-teal-200 border-green-900 border-[5px]  hover:opacity-100 hover:p-2"
              style={{
                filter: isHovered8 ? "grayscale(0%)" : "grayscale(100%)",
              }}
              onMouseEnter={() => setIsHovered8(!isHovered8)}
              onMouseLeave={() => setIsHovered8(!isHovered8)}
              src={Image13}
            ></img>
            
          </div>
        </Marquee>
        {/* <Marquee direction='right' loop={0}  className='flex items-center justify-around bg-gradient-to-r from-gray-600 via-black to-gray-600 rounded-lg'>
                <div className='flex items-center justify-around overflow-y-hidden'>
                    <img className='h-[10rem] w-[10rem]  rounded-full shadow-lg p-10 mr-10 bg-teal-200 border-red-800 border-[5px] opacity-40 hover:opacity-100 hover:p-2' src={Image1} />
                    <img className='h-[10rem] w-[10rem]  rounded-full shadow-lg p-10 mr-10 bg-teal-200 border-red-800 border-[5px] opacity-40 hover:opacity-100 hover:p-2' src={Image2}></img>
                    <img className='h-[10rem] w-[10rem]  rounded-full shadow-lg p-10 mr-10 bg-teal-200 border-red-800 border-[5px] opacity-40 hover:opacity-100 hover:p-2' src={Image3}></img>
                    <img className='h-[10rem] w-[10rem]  rounded-full shadow-lg p-10 mr-10 bg-teal-200 border-red-800 border-[5px] opacity-40 hover:opacity-100 hover:p-2' src={Image4}></img>
                    <img className='h-[10rem] w-[10rem]  rounded-full shadow-lg p-10 mr-10 bg-teal-200 border-red-800 border-[5px] opacity-40 hover:opacity-100 hover:p-2' src={Image5}></img>
                    <img className='h-[10rem] w-[10rem]  rounded-full shadow-lg p-10 mr-10 bg-teal-200 border-red-800 border-[5px] opacity-40 hover:opacity-100 hover:p-2' src={Image6}></img>
                    <img className='h-[10rem] w-[10rem]  rounded-full shadow-lg p-10 mr-10 bg-teal-200 border-red-800 border-[5px] opacity-40 hover:opacity-100 hover:p-2' src={Image7}></img>
                    <img className='h-[10rem] w-[10rem]  rounded-full shadow-lg p-10 mr-10 bg-teal-200 border-red-800 border-[5px] opacity-40 hover:opacity-100 hover:p-2' src={Image8}></img>
                </div>
            </Marquee> */}
        {/* </div> */}
        <div className=" m-5 sm:p-2 text-black text-xl sm:text-5xl  shadow-bottom-red">
          <h1 className="">and more...</h1>
        </div>
        <div className="  sm:hidden text-gray-400  block space-y-1   text-lg  text-center w-[350px] ">
          <p className="text-3xl text-white font-extrabold">OUR OFFERING</p>
          <p>Build Entrepreneurs By</p>
          <p>The Guidance Of Some</p>
          <p>Multi-Domain Vertical</p>
          <p>Experts.</p>
          <button className="bg-white text-black p-3 w-[13rem] rounded-md hover:bg-black hover:text-white border border-xl border-white transition duration-200 ease-linear">
            Learn More..
          </button>
        </div>
        1
        <div className=" text-white  bg-red-700 flex items-center justify-around flex-row  rounded-2xl p-5 shadow-xl shadow-red-800 ">
          <div
            className="sm:pr-14  grid sm:grid-cols-2 gap-5"
           
          >
            <div className=" w-[23rem] m-auto  h-[17rem]    sm:pl-10 sm:pr-10 sm:pt-5 block sm:h-[17rem] sm:w-[23rem] rounded-lg  bg-black shadow-xl shadow-neutral-700 border border-gray-400 hover:bg-white hover:text-black">
              <div className="h-[3rem] w-[3rem] bg-white rounded-full m-2 p-2">
                <img
                  src={Image9}
                  className="h-[2rem] w-[2rem] bg-white rounded-full "
                ></img>
              </div>
              <h5 className="text-2xl pl-3 ">Mentorship</h5>
              <p className="text-start p-3">Mentorship is at the core of Prospera and we don't believe in
              the "one-size-fits-all" advices that
             founders often get.</p>
            </div>

            <div className="  pl-10 pr-10 pt-5 sm:block h-[17rem] w-[23rem] rounded-lg  bg-black shadow-xl shadow-neutral-700 border border-gray-400 hover:bg-white hover:text-black">
              <div className="h-[3rem] w-[3rem] bg-white rounded-full mb-5 p-2">
                <img
                  src={Image10}
                  className="h-[2rem] w-[2rem] bg-white rounded-full "
                ></img>
              </div>
              <h5 className="text-2xl pb-2">Community</h5>
              <p>
                {" "}
                Working, not just alongside us, but with the other founders of
                the community will become the foundation of your support system.
              </p>
            </div>
            <div className=" pl-10 pr-10 pt-5 sm:block h-[17rem] w-[23rem] rounded-lg  bg-black shadow-xl shadow-neutral-700 border border-gray-400 hover:bg-white hover:text-black ">
              <div className="h-[3rem] w-[3rem] bg-white rounded-full mb-5 p-2">
                <img
                  src={Image11}
                  className="h-[2rem] w-[2rem] bg-white rounded-full "
                ></img>
              </div>
              <p className="text-2xl pb-2">Investors</p>
              <p className="p-0.5 ">Getting funded is a key component</p>
              <p className="p-0.5 ">of startups' success and a core</p>
              <p className="p-0.5 ">focus at Pedalstart. We know most</p>
              <p className="p-0.5 ">investors, we know what they invest</p>
            </div>
            <div className=" pl-10 pr-10 pt-5 sm:block h-[17rem] w-[23rem] rounded-lg  bg-black shadow-xl shadow-neutral-700 border border-gray-400 hover:bg-white hover:text-black">
              <div className="h-[3rem] w-[3rem] bg-white rounded-full mb-5 p-2">
                <img
                  src={Image12}
                  className="h-[2rem] w-[2rem] bg-white rounded-full "
                ></img>
              </div>
              <p className="text-2xl pb-2">Funding</p>
              <p className="p-0.5 ">The startups get to raise funds by</p>
              <p className="p-0.5 ">pitching their ideas directly to 100+</p>
              <p className="p-0.5 ">angel investors and 20+ micro</p>
              <p className="p-0.5 ">
                of 25 millions to invest in the startups.
              </p>
            </div>
          </div>
          <div className="sm:block hidden space-y-4 mt-[-10rem]">
            <p>OUR OFFERING</p>
            <p className="text-4xl font-bold ">Build Entrepreneurs By</p>
            <p className="text-4xl font-bold ">The Guidance Of Some</p>
            <p className="text-4xl font-bold ">Multi-Domain Vertical</p>
            <p className="text-4xl font-bold  pb-6">Experts.</p>
            <button className="bg-white text-black p-3 w-[13rem] rounded-md hover:bg-black hover:text-white border border-xl border-white transition duration-200 ease-linear">
              Learn More..
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
