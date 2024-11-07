import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Contact.css'
import logo from '../assets/images/logo.png'

const Login = () => {



  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  // axios.defaults.withCredentials=true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password)
    try {
      await axios
        .post("http://localhost:8000/api/v1/login", { email, password })
        .then((res) => {
          console.log("data send successfully", res.data);
          // navigate("/contest")
          const UserStatus = {
            lgn: res.data.message.username
          }
          navigate('/', { state: { UserStatus } });
          //   navigate("/getcurrentuser");
        });
    } catch (error) {
      console.log("error during calling save api", error);
    }

  }

  return (
    <div className="flex flex-col md:flex-row fullscreen-container md:space-x-60 space-x-0">
      <div className="logincontain md:w-1/2 w-full h-full"></div>
      <div >
      <div className="flex justify-cemter items-center h-[90%] w-full bg-opacity-70  p-8">
  <div className="flex-col w-full max-w-md">
    <img src={logo} alt="" width={75} className="mb-4 w-80" />
    <h1 className="text-4xl font-bold mb-4 ">Login</h1>
    <p className="text-green-400 mb-8">Welcome back to AL AMAAN OIS</p>
    <div className="flex flex-col">
      <label className="mb-2 ">Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="w-full mt-1 px-4 py-2 bg-transparent mb-8 border-0 border-b border-gray-200 focus:outline-none focus:border-b-2 focus:border-green-500 transition-all"
      />
      <label className="mb-2 ">Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="w-full mt-1 mb-4 px-4 py-2 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-b-2 focus:border-green-500 transition-all"
      />
      <button onClick={handleSubmit} className="shadow-lg shadow-green-400 bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition-colors duration-200">
        Login
      </button>
    </div>
  </div>
</div>

        </div>
      </div>
  )
}

export default Login;