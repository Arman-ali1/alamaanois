import React, { useState } from "react";
import "./Home.css";
import TextTransition, { presets } from "react-text-transition";
import { Link } from "react-router-dom";
// import Image from '../../assets/react.svg';
// import Image2 from '../../assets/Image2.png';
// import Image1 from '../../assets/Image1.png';
// import Image3 from '../../assets/Image3.png';
//import Image4 from "../../assets/Image4.png";
import is2 from '../../assets/is1.png'

// import Image6 from '../../assets/Image6.png';

function Home() {
  const [index, setIndex] = React.useState(0);
  const TEXTS = [
    "Accelerator.",
    "Community.",
    "Funding.",
    "Education.",
    "Islamic.",
  ];
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="body122 h-6rem w-4rem bg-cover bg-center bg-no-repeat bg-fixed bg-black text-white   sm:bg-cover sm:bg-center sm:bg-no-repeat sm:bg-fixed sm:h-screen sm:w-screen m-0 sm:flex sm:justify-center sm:items-center ">
    
    
      <div className=" sm:col-span-1 items-center justify-around opacity-100 ">
        <div className="sm:text-9xl sm:pt-6 text-8xl text-center p-2 font-extrabold font-sans animation ">
          <h1>Online</h1>
          <h1>islamic</h1>
          <h1>Studies</h1>
        </div>
        <div className=" sm:col-span-2 text-4xl w-[350px] m-auto  flex">
          <h1 className=" text-green-900  sm:mr-2 sm:ml-4 ml-1">Islamia </h1>
          <h1 className=" text-black">
            <TextTransition springConfig={presets.wobbly}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </h1>
        </div>
      </div>

      {/* <div className="sm:col-span-1 m-auto sm:h-[23rem] sm:w-[23rem] object-cover hidden sm:block">
        <img src={Image6}></img>
      </div> */}

      <div className=" sm:col-span-2 opacity-100 ">
        <div className="sm:w-[370px] m-auto p-2 flex items-center justify-evenly    ">
         
            <Link to='/contact' className=" m-1 p-3 text-center bg-white text-black w-[10rem] rounded-lg font-bold ">
            Apply now
            </Link>
            <button className="m-1 p-3 w-[10rem] font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-pink-800 rounded-lg"
            onClick={() => {
                  // navigate("/");
                  setTimeout(() => {
                    const element = document.getElementById("about");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 500);
                }}
            >
            Learn more
            </button>
          
        </div>
      </div>

      <div className="sm:col-span-2 text-green-900  font-bold  text-lg text-center p-4 opacity-100">
        <p>
          We provide best in class Quick Solutions, Good Reputation, individual
          Expertise of expert into field with overall experience of 5-7 years
        </p>
        <p>
          into diversified Fields, We are dealing with multiple products may it
          be any at the same time which no other company could provide and have
          a potential.
        </p>
      </div>
    </div>
  );
}

export default Home;
