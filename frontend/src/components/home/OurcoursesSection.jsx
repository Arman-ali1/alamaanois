import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaPhoneSquare,
  FaCheckCircle,
  FaBook,
  FaBookOpen,
  FaBookReader,
  FaCaretSquareRight,
  FaArrowCircleRight,
} from "react-icons/fa";

const OurcoursesSection = () => {
  return (
    <>
      <div className="ourcoursesParentdiv">
        <div className="textdiv text-center">
          <p className="text-2xl font-bold">OUR COURSES</p>
          <h1 className="text-5xl h1welcometext text-green-950">
            We Provide Many Courses
          </h1>
        </div>
        <div className="coursesdiv grid grid-cols-1 md:grid-cols-3 gap-16 py-16 pb-8 px-16">
          <div>
            <div className="card bg-gray-50 flex flex-col items-center justify-center gap-4 p-4 shadow-inner mb-5">
              <FaBook size={20} className="fonticons" />
              <h3 className="text-2xl font-medium mb-2">Dars E Nizami</h3>
              <p>Five years Online Alim/Alima course</p>
              <FaArrowCircleRight
                size={50}
                className="fonticons fonticonslink"
              />
            </div>
            <div className="card bg-gray-50 flex flex-col items-center justify-center gap-4 p-4 shadow-inner">
              <FaBook size={20} className="fonticons" />
              <h3 className="text-2xl font-medium mb-2">Quraan Course</h3>
              <p>Learn tajweed and tafseer</p>
              <FaArrowCircleRight
                size={50}
                className="fonticons fonticonslink"
              />
            </div>
          </div>

          <div>
            <div className="card bg-gray-50 flex flex-col items-center justify-center gap-4 p-4 shadow-inner mb-5">
              <FaBook size={20} className="fonticons" />
              <h3 className="text-2xl font-medium mb-2">Hadith Course</h3>
              <p>Learn ahadith e kareema</p>
              <FaArrowCircleRight
                size={50}
                className="fonticons fonticonslink"
              />
            </div>
            <div className="card bg-gray-50 flex flex-col items-center justify-center gap-4 p-4 shadow-inner">
              <FaBook size={20} className="fonticons" />
              <h3 className="text-2xl font-medium mb-2">Fiqah Course</h3>
              <p>Learn fiqahi masail</p>
              <FaArrowCircleRight
                size={50}
                className="fonticons fonticonslink"
              />
            </div>
          </div>

          <div>
            <div className="card bg-gray-50 flex flex-col items-center justify-center gap-4 p-4 shadow-inner mb-5">
              <FaBook size={20} className="fonticons" />
              <h3 className="text-2xl font-medium mb-2">Aqaid Course</h3>
              <p>Learn Islamic Aqaid and strengthen your Eimaan</p>
              <FaArrowCircleRight
                size={50}
                className="fonticons fonticonslink"
              />
            </div>
            <div className="card bg-gray-50 flex flex-col items-center justify-center gap-4 p-4 shadow-inner">
              <FaBook size={20} className="fonticons" />
              <h3 className="text-2xl font-medium mb-2">Arabic Language</h3>
              <p>Learn the language of paradise, language of Quran and Language of your beloved prophet ﷺ</p>
              <FaArrowCircleRight
                size={50}
                className="fonticons fonticonslink"
              />
            </div>
          </div>
        </div>
        <div className="divknowmorebutton flex items-center justify-center">
          <NavLink to="/courses" className="knowmorebtn block" style={{width:'20rem'}}>
            Know More About Courses
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default OurcoursesSection;
