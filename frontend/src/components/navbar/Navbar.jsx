import React, { useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./nav.css";
import Image from "../../assets/menu.png";
import Image1 from "../../assets/remove.png";
import logois from "../../assets/logois.png";

function Navbar() {
  const about = useRef(null);
  const navigate = useNavigate();
  const[mobMenu,setMobMenu]=React.useState(false)
  const[image,setImage]=React.useState(true)
  const navItem = {
    introduction: {
      text: "introduction",
      url: "/",
      active: "handleintroduction",
      style: "font-family: cursive;",
    },
    home: {
      text: "Home",
      url: "/",
      active: "handleHome",
      style: "font-family: cursive;",
    },
    StudentsCorner: {
      text: "Students corner",
      url: "/",
      active: "handleStudentCorner",
    },
    ExaminationCorner: {
      text: "Examination corner",
      url: "/",
      active: "handleExaminationCorner",
    },
    library: {
      text: "library",
      url: "/",
      active: "handleInvester",
    },
    contact: {
      text: "Guest corner",
      url: "/",
      active: "handleContact",
    },
  };

  return (
    <header className="bg-black z-50  border-b-2 shadow-xl w-[100%] m-auto shadow-slate-200">
      <div className="bg-slate-800 p-1">
        <h2 className="text-white sm:text-base text-xs sm:font-bold  text-center font-serif">
          Get real-time assistance with your queries. Try{" "}
          <span className="text-blue-600 ">
            <a className="cursor-pointer sm:hover:border-b-yellow-500 sm:hover:bg-green-400  ">
              AI Help{" "}
            </a>
          </span>
          now!
        </h2>
      </div>

      <div className="sm:text-2xl  xl:text-3xl min-h-[50px]    grid w-[100%] sm:grid-cols-12 grid-cols-2 gap-2 text-black  ">
        <div className=" sm:col-span-3 col-span-1 sm:pt-[25px] sm:pl-16 sm:pb-2 text-center pt-2 pl-3">
          <Link to="/">
            {/* <h2 className=" text-white   sm:font-bold font-semibold">
              Trinity{" "}
              <span className="text-black rounded-sm pl-1 pr-1  bg-white">
                InfoTech
              </span>
            </h2> */}
            <img src={logois} alt="logo" className="sm:w-[100px] sm:h-[50px] rounded-2xl w-[60px] h-[35px]  "/>
          </Link>
        </div>

        {/* nav menu hamburger */}
        <div className=" pt-[2px] sm:hidden font-extrabold text-lg   sm:pt-[30px]  flex items-end  flex-col ">
        <div className=" absolute ">
        <div className="  col-span-1 sm:pt-[30px] w-[45px] ">
          {
          image?<img className="" onClick={()=>{setMobMenu(!mobMenu)
          setImage(!image)
          }} src={Image}></img>:<img src={Image1} onClick={()=>{setMobMenu(!mobMenu)
          setImage(!image)
          }} ></img>
          }
        </div>
        {
          mobMenu?<div className="text-slate-100 grid grid-rows-5 bg-transparent border border-slate-700 backdrop-blur-md   p-10 rounded-md mt-2 gap-y-10 transition duration-1000  ease-linear" onClick={()=>{setMobMenu(!mobMenu)
          setImage(!image)
          }}>
            <div className=" hover:text-blue-500 cursor-pointer ">
              <Link to="/">
                <h2>{navItem.home.text}</h2>
              </Link>
            </div>
            <div className=" hover:text-blue-500 cursor-pointer">
              <button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    const element = document.getElementById("about");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 1000);
                }}
              >
                {navItem.introduction.text}
              </button>
            </div>
            <div className=" hover:text-blue-500 cursor-pointer">
              <button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    const element = document.getElementById("services");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 1000);
                }}
              >
                {navItem.StudentsCorner.text}
              </button>
            </div>
            <div className=" hover:text-blue-500 cursor-pointer">
              <button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    const element = document.getElementById("clients");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 1000);
                }}
              >
                {navItem.ExaminationCorner.text}
              </button>
            </div>
            <div className=" hover:text-blue-500 cursor-pointer">
              <Link to="/contact">
                <h2>{navItem.contact.text}</h2>
              </Link>
            </div>
          </div>:""
        }
        </div>          
        </div>

        {/* nav menu hamburger end*/}
        <div className="sm:text-xl  sm:col-span-6  text-center rounded-md hidden sm:block sm:pt-[30px] ">
        
          <div className="grid sm:gap-x-[90px] xl:gap-x-4 sm:grid-cols-5">
          
            <div className="text-white hover:text-blue-500 cursor-pointer ">
              <Link to="/">
                <h2>{navItem.home.text}</h2>
              </Link>
            </div>
            <div className="text-white hover:text-blue-500 cursor-pointer hover:border-b-4 hover:border-blue-500">
              <Link to="/">
                <h2>{navItem.introduction.text}</h2>
              </Link>
            </div>
            <div className="text-white hover:text-blue-500 cursor-pointer hover:border-b-4 hover:border-blue-500">
              <button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    const element = document.getElementById("about");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 1000);
                }}
              >
                {navItem.StudentsCorner.text}
              </button>
            </div>
            <div className="text-white hover:text-blue-500 cursor-pointer hover:border-b-4 hover:border-blue-500">
              <button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    const element = document.getElementById("services");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 1000);
                }}
              >
                {navItem.ExaminationCorner.text}
              </button>
            </div>
            <div className="text-white hover:text-blue-500 cursor-pointer hover:border-b-4 hover:border-blue-500">
              <Link to="/contact">
                <h2>{navItem.contact.text}</h2>
              </Link>
            </div>
          </div>
        </div>

        <div className=" xl:block  sm:col-span-3 md:sm:text-xl sm:text-xs sm:min-w-[200px] sm:max-w-[300px] hidden sm:hidden sm:m-[10px] border bg-white sm:h-[70px] p-1 ml-1 mr-1  text-center rounded-full ">
          <div className="text-black  font-bold   flex items-center justify-around sm:pt-6 md:pt-4 ">
            <Link to="/help">
              <h2>
                +91-XXXX{" "}
                <span className=" bg-black  p-[18px]  text-white rounded-full hover:text-black hover:bg-white transition delay-100 ease-in-out">
                  {" "}
                  GetIn Touch
                </span>
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
