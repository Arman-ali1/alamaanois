import React from "react";

import { FaPhoneSquare, FaCheckCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const WelcomSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-16  my-16 mx-4 md:mx-16">
        <div className="pl-0 sm:pl-8">
          <div className="divwelcometext my-5 py-2 pb-6">
            <h1 className="text-5xl h1welcometext text-green-950">
              Welcome To Al Amaan Online Islamic Studies
            </h1>
          </div>
          <div className="divalamaanintrotext my-2">
            <p>
              Al Amaan Online Islamic Studies is unique in it's own way. It
              provides a solid platform of sound Islamic education for the
              Islamic studies lover. It conducts it's classes completely online
              and in doing so it provides students the means of learning Islamic
              Education at comfort of their home.
            </p>
          </div>
          <div className="divwelcomepoints my-2 py-2 text-xl font-medium">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
              <div className="p-0 flex items-center">
                <span>
                  <FaCheckCircle size={20} className="fonticons" />
                </span>
                <span className="ml-2">Quraan (Tajweed, Tafseer)</span>
              </div>
              <div className="p-0 flex items-center">
                <span>
                  <FaCheckCircle size={20} className="fonticons" />
                </span>
                <span className="ml-2">Aqaid</span>
              </div>
              <div className="p-0 flex items-center">
                <span>
                  <FaCheckCircle size={20} className="fonticons" />
                </span>
                <span className="ml-2">Fiqah</span>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
              <div className="p-0 flex items-center">
                <span>
                  <FaCheckCircle size={20} className="fonticons" />
                </span>
                <span className="ml-2">Hadith</span>
              </div>
              <div className="p-0 flex items-center">
                <span>
                  <FaCheckCircle size={20} className="fonticons" />
                </span>
                <span className="ml-2">Islamic History</span>
              </div>
              <div className="p-0 flex items-center">
                <span>
                  <FaCheckCircle size={20} className="fonticons" />
                </span>
                <span className="ml-2">Arabic Language</span>
              </div>
            </div>
          </div>
          <div className="divcalltoask my-2">
            <div class="grid grid-cols-1 md:grid-cols-[0.1fr_0.9fr] my-3">
              <div>
                <FaPhoneSquare size={70} className="fonticons" />
              </div>
              <div>
                <h4 className="text-xl font-medium">
                Contact for more information
                </h4>
                <p className="text-2xl font-medium">+91 7903337066</p>
              </div>
            </div>
          </div>
          <div className="divknowmorebutton my-2 mt-8">
            <NavLink
              to="/about"
              className="knowmorebtn block"
            >
              Know More About Us
            </NavLink>
          </div>
        </div>
        <div className="mr-0 sm:mr-8 bgimagefordiv">
            {/* <img src={img1} alt="alamaan.jpg" /> */}
        </div>
      </div>
    </>
  );
};

export default WelcomSection;
