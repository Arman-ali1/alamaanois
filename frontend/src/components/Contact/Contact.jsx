import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import './Form.css';
import Img3 from "../../assets/Image4.png";
import axios from "axios";

function Contact() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState(123456789);
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async () => {
    // alert("Your message has been sent!");
    console.log(username, email, phone, subject, message);
    await axios
      .post("https://trinity-jybz.onrender.com/api/v1/contactus", {
        username,
        email,
        phone,
        subject,
        message,
      })
      .then((res) => {
        console.log(res);
        alert("Your message has been sent!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="grid sm:min-h-[500px] w-[100%] m-auto gap-4 sm:grid-cols-6 containerfooter bg-black text-gray-200 p-5 pb-5 ">
        <div
          className="  sm:col-span-3 sm:text-3xl text-xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-slate-500 to-gray-200 "
          id="left"
        >
          <h1 className="mb-2">
          Take the silk road to
          digitalization your Business Growth
          </h1>
          
          <div className=" m-auto  w-[300px] h-[300px]">
            <img classNameName=" " src={Img3} />
          </div>
        </div>
        <div className=" rounded-xl sm:col-span-3 w-[100%] " id="right">
          <div>
            <div>
              <h1
                className="
                        sm:text-3xl text-xl font-extrabold
                        text-transparent  bg-clip-text bg-gradient-to-r from-slate-500 to-gray-200   "
              >
                Start a conversation with Us
              </h1>
            </div>
          </div>
          <div className="  bg-gradient-to-r from-black to-gray-900  text-white shadow-lg shadow-gray-500/50   p-4">
            <div className=" sm:w-[60%]  mx-auto">
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                className="sm:w-[90%] min-w-[100%] p-2  border-t-0 bg-slate-800"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                name="name"
                placeholder="Enter your name"
              />

              <label className="block mb-1 mt-1" htmlFor="email">
                Email
              </label>
              <input
                className="sm:w-[90%] p-2  min-w-[100%] border-t-0 bg-slate-800"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                name="email"
                placeholder="Email*"
              />

              <label className="block mb-1 mt-1" htmlFor="phone">
                Phone
              </label>
              <input
                className="sm:w-[90%] min-w-[100%] p-2  border-t-0 bg-slate-800"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="text"
                name="phone"
                placeholder="Phone*"
              />

              <label className="block mb-1 mt-1" htmlFor="subject">
                Query
              </label>
              <input
                className="sm:w-[90%] min-w-[100%] p-2  border-t-0 bg-slate-800"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                type="text"
                name="subject"
                placeholder="subject*"
              />

              <lable className="block mb-1 mt-1" htmlFor="message">
                Message
              </lable>
              <textarea
                className="sm:w-[90%] min-h-[150px] min-w-[100%] p-2  border-t-0 bg-slate-800"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                type="text"
                name="message"
                placeholder="Your Message*"
              />

              <button
                className="block bg-gradient-to-r from-blue-500 to-blue-700 border border-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={handlesubmit}
                type="submit"
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
