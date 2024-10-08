import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import img15 from "../../assets/images/img15.jpeg";
import img17 from "../../assets/images/img17.jpg";
import img18 from "../../assets/images/img18.jpg";
import img19 from "../../assets/images/img19.jpg";
import img20 from "../../assets/images/img20.jpeg";

const OurteachersSection = () => {
  return (
    <>
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: #163809; /* Change to your desired color */
          }
          .swiper-pagination-bullet {
            background-color: #163809; /* Change to your desired color */
          }
          .swiper-pagination-bullet-active {
            background-color: #163809; /* Change to your desired active bullet color */
          }
        `}
      </style>
      <div className="ourteachersparentdiv bg-gray-200 mt-16 p-8">
        <div className="textdiv text-center mb-10">
          <p className="text-2xl font-bold">Our Teachers</p>
          <h1 className="text-5xl h1welcometext text-green-950">
            We Have a Team of Renowned Scholars
          </h1>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              // When the viewport is >= 320px
              slidesPerView: 1, // Show 1 slide on small devices
              spaceBetween: 20, // Adjust space if needed
            },
            640: {
              // When the viewport is >= 640px
              slidesPerView: 2,
              spaceBetween: 30, // You can adjust space between slides here too
            },
            768: {
              // When the viewport is >= 768px
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <div className="card bg-gray-50 flex flex-col items-center justify-center gap-4 p-4 shadow-inner mb-5 h-72">
              <img
                src={img15} // Replace with your image source
                alt="Description"
                className="rounded-full swipersliderimage w-32 h-32 border-double border-4 border-white-900 "
              />

              <h3 className="text-2xl font-medium mb-2">Mufti Irfan Azhari</h3>
              <p>Principal & Co-founder, Al Amaan Ois</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-gray-50 flex flex-col items-center justify-center gap-4 p-4 shadow-inner mb-5 h-72">
              <img
                src={img17}
                alt="Description"
                className="rounded-full swipersliderimage w-32 h-32 border-double border-4 border-white-900"
              />

              <h3 className="text-2xl font-medium mb-2">Molana Sajid Reyazi</h3>
              <p>A renowned scholar</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-gray-50 flex flex-col items-center justify-center gap-4 p-4 shadow-inner mb-5 h-72">
              <img
                src={img18}
                alt="Description"
                className="rounded-full swipersliderimage w-32 h-32 border-double border-4 border-white-900"
              />

              <h3 className="text-2xl font-medium mb-2">Molana Majid Reyazi</h3>
              <p>A renowned scholar</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-gray-50 flex flex-col items-center justify-center gap-4 p-4 shadow-inner mb-5 h-72">
              <img
                src={img19} // Replace with your image source
                alt="Description"
                className="rounded-full swipersliderimage w-32 h-32 border-double border-4 border-white-900" // Make the image cover the container
              />

              <h3 className="text-2xl font-medium mb-2">
                Molana Ashraf Misbahi
              </h3>
              <p>A renowned scholar</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-gray-50 flex flex-col items-center justify-center gap-4 p-4 shadow-inner mb-5 h-72">
              <img
                src={img20} // Replace with your image source
                alt="Description"
                className="rounded-full swipersliderimage w-32 h-32 border-double border-4 border-white-900" // Make the image cover the container
              />

              <h3 className="text-2xl font-medium mb-2">
                Molana Haris Misbahi
              </h3>
              <p>A renowned scholar</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default OurteachersSection;
