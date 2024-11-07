import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Contact.css"

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/api/v1/login", { email, password })
        .then((res) => {
          console.log("data send successfully", res.data);
          const UserStatus = {
            lgn: res.data.message.username
          };
          navigate('/', { state: { UserStatus } });
        });
    } catch (error) {
      console.log("error during calling save api", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 bg-opacity-90 relative">
      <div className="absolute inset-0 contain" />
      
      <div className="relative flex flex-col items-center w-full justify-center min-h-screen p-4">
        <div className="bg-white rounded-lg shadow-xl w-full md:w-[50%] p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 md:mt-0 mt-9 text-center">Contact Us</h2>
          
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="text-sm text-gray-600">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-1 px-4 py-2 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-b-2 focus:border-green-500 transition-all"
                />
              </div>

              <div className="flex-1">
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-4 py-2 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-b-2 focus:border-green-500 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="text-sm text-gray-600">Phone</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full mt-1 px-4 py-2 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-b-2 focus:border-green-500 transition-all"
                />
              </div>

              <div className="flex-1">
                <label className="text-sm text-gray-600">Subject</label>
                <input
                  type="text"
                  placeholder="Message subject"
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full mt-1 px-4 py-2 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-b-2 focus:border-green-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                rows="4"
                placeholder="Your message here..."
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mt-1 px-4 py-2 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-b-2 focus:border-green-500 transition-all"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="shadow-lg shadow-green-400 bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition-colors duration-200"
            >
              Submit →
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            For any question contact us 24/7 call center: <span className="text-green-500">+011 345 6789</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;