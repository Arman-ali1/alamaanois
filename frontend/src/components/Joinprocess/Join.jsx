import React from "react";
import Image1 from "../../assets/wishlist.png";
import Image2 from "../../assets/folder.png";
import Image3 from "../../assets/sales.png";
import Image4 from "../../assets/onboarding.png";

function Join() {
  return (
    <div className="text-black p-10 ">
      <div>
        <div className="text-center flex items-center justify-around flex-col gap-y-3 pb-10">
          <p className="text-4xl font-extrabold font-sans">Resister Your self</p>
          <p>A Four Step Process </p>
        </div>

        <div className=" sm:flex items-center justify-center flex-row">
           <div className=" sm:block hidden">

           <p className="text-[160%] text-green-500 pb-44  ">. . . . .</p>
           </div>
          <div className="flex items-center justify-around flex-col ">
            <div className="flex items-center justify-around bg-black h-[12rem] w-[12rem] border-2   border-green-500 rounded-full hover:scale-150 transition duration-300 ease-linear ">
              <img
                src={Image1}
                className="h-[8rem] w-[8rem] bg-white rounded-full p-6 "
              ></img>
            </div>
            <div className="flex items-center justify-around flex-col pt-10 pb-8">
              <h1 className="text-2xl font-sans font-extrabold">
                Join Wishlist
              </h1>
              <p className="text-gray-500 text-sm  ">
                Click “Apply Now”. Fill the form and
              </p>
              <p className="text-gray-500 text-sm  ">
                submit. We read each application at
              </p>
              <p className="text-gray-500 text-sm  ">
                least twice before coming to a
              </p>
              <p className="text-gray-500 text-sm  ">decision</p>
            </div>
          </div>
          <p className="sm:block hidden text-[160%] text-green-500 pb-44  ">. . . . . . .</p>

          <div className="flex items-center justify-around flex-col">
            <div className="flex items-center justify-around bg-black h-[12rem] w-[12rem] border-2   border-green-500 rounded-full hover:scale-150 transition duration-300 ease-linear ">
              <img
                src={Image2}
                className="h-[8rem] w-[8rem] bg-white rounded-full p-6 "
              ></img>
            </div>
            <div className="flex items-center justify-around flex-col pt-10 pb-8">
              <h1 className="text-2xl font-sans font-extrabold">
                Application Screening
              </h1>
              <p className="text-gray-500 text-sm  ">
                The applications we love will hear
              </p>
              <p className="text-gray-500 text-sm  ">
                sback from us. We send out call invites
              </p>
              <p className="text-gray-500 text-sm  ">within 24 Hours</p>
              {/* <p className='text-gray-500 text-sm  '>decision</p> */}
            </div>
          </div>
          <p className="sm:block hidden text-[160%] text-green-500 pb-44  ">. . . . . .</p>
          <div className="flex items-center justify-around flex-col">
            <div className="flex items-center justify-around bg-black h-[12rem] w-[12rem] border-2   border-green-500 rounded-full hover:scale-150 transition duration-300 ease-linear ">
              <img
                src={Image3}
                className="h-[8rem] w-[8rem] bg-white rounded-full p-6 "
              ></img>
            </div>
            <div className="flex items-center justify-around flex-col pt-10 pb-8">
              <h1 className="text-2xl font-sans font-extrabold">Pitch To Us</h1>
              <p className="text-gray-500 text-sm  ">
                We will connect with you on call [Just
              </p>
              <p className="text-gray-500 text-sm  ">
                to get a better understanding of your
              </p>
              <p className="text-gray-500 text-sm  ">Learning]</p>
              {/* <p className='text-gray-500 text-sm  '>decision</p> */}
            </div>
          </div>
          <p className="sm:block hidden text-[160%] text-green-500 pb-44  ">. . . . . . . .</p>
          <div className="flex items-center justify-around flex-col">
            <div className="flex items-center justify-around bg-black h-[12rem] w-[12rem] border-2   border-green-500 rounded-full hover:scale-150 transition duration-300 ease-linear ">
              <img
                src={Image4}
                className="h-[8rem] w-[8rem] bg-white rounded-full p-6 "
              ></img>
            </div>
            <div className="flex items-center justify-around flex-col pt-10 ">
              <h1 className="text-2xl font-sans font-extrabold">
                Community Onboarding
              </h1>
              <p className="text-gray-500 text-sm  ">
                After acceptance We will onboard you
              </p>
              <p className="text-gray-500 text-sm  ">in our community</p>
              <p className="text-gray-500 text-sm  ">Islamia</p>
            </div>
          </div>
          <p className="sm:block hidden text-[160%] text-green-500 pb-44  ">. . . . . . . .</p>
        </div>

        <div>
          {/* mobile */}

          <div className=" hidden  align-middle  sm:hidden ">
            <div className="">
              <div className=" ">
                <div className=" m-auto col-span-8 flex items-center justify-around bg-black h-[12rem] w-[12rem] border-12    border-green-500 rounded-full hover:scale-150 transition duration-300 ease-linear ">
                  <img
                    src={Image1}
                    className="h-[8rem] w-[8rem] bg-white rounded-full p-6 "
                  ></img>
                </div>
              </div>
              <div className="flex items-center justify-around flex-col pt-10">
                <h1 className="text-2xl font-sans font-extrabold">
                  Join Wishlist
                </h1>
                <p className="text-gray-500 text-sm  text-center ">
                  Click “Apply Now”. Fill the form and submit. We read each
                  application at least twice before coming to a decision
                </p>
              </div>
            </div>
          </div>

          {/* m */}
        </div>
      </div>
    </div>
  );
}

export default Join;
