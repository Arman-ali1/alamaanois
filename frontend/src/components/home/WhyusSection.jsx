import React from "react";
import { FaPhoneSquare, FaCheckCircle, FaUsers, FaVideo, FaCoins } from "react-icons/fa";
import vid10 from "../../assets/videos/vid10.mp4";

const WhyusSection = () => {
  return (
    <>
      <div className="whyusparentdiv  bg-gray-200 border p-5 my-16">
        <div className="whyustextdiv text-center">
          <p className="text-2xl font-bold">WHY CHOOSE US</p>
          <h1 className="text-5xl h1welcometext text-green-950">
            Increase Your Knowledge and Be a Better Muslim
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.5fr] gap-16  my-16 mx-4 md:mx-8">
          <div>
            <div className="p-0 mb-10">
              <FaUsers size={60} className="fonticontypesec" />
              <h3 className="text-2xl font-medium mb-2">Renowned Scholars</h3>
              <p>We have noble talented and dedicated teachers to help you</p>
            </div>
            <div className="p-0 mb-10">
              <FaVideo size={60} className="fonticontypesec" />
              <h3 className="text-2xl font-medium mb-2">Online Live Classes</h3>
              <p>We provide live interactive classes</p>
            </div>
          </div>
          <div className="border flex items-center justify-center">
            <div className="homevideo">
              <video
                id="vid10"
                src={vid10}
                autoPlay
                muted
                loop
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div>
              <div className="p-0 mb-10">
                <FaVideo size={60} className="fonticontypesec" />
                <h3 className="text-2xl font-medium mb-2">Class Recordings</h3>
                <p>Class recordings are made available to students</p>
              </div>
              <div className="p-0 mb-10">
                <FaCoins size={60} className="fonticontypesec" />
                <h3 className="text-2xl font-medium mb-2">
                  Affordable Fee
                </h3>
                <p>We have affordable fee structure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyusSection;
