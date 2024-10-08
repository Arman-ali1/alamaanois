import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom';


const Contact = () => {

  

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  // axios.defaults.withCredentials=true;
  const handleSubmit = async (e) => {
    e.preventDefault();
  console.log(email,password)
        try {
          await axios
          .post("http://localhost:8000/api/v1/login",{email,password})
          .then((res) => {
            console.log("data send successfully", res.data);
            // navigate("/contest")
            const UserStatus={
              lgn:res.data.message.username
            }
              navigate('/',{ state: { UserStatus } });
            //   navigate("/getcurrentuser");
            });
        } catch (error) {
          console.log("error during calling save api",error);
        }
      
  }

  return (
    <div class="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white p-20 ">
      <h1 class="text-3xl   font-bold  text-center ">Please Send Us your Query..</h1>
       <div className='bg-gray-950  py-8  w-80 rounded-xl shadow-xl shadow-green-300 flex flex-col justify-center items-center   '>
         <div >
            <div className='flex flex-col justify-center items-center'>
              <label className='text-white'>phone</label>
              <input onChange={(e) => setPhone(e.target.value)} type='phone' className='bg-gray-700 p-2 rounded-lg w-60' />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <label className='text-white'>Email</label>
              <input onChange={(e) => setEmail(e.target.value)} type='email' className='bg-gray-700 p-2 rounded-lg w-60' />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <label className='text-white'>Name</label>
              <input onChange={(e) => setName(e.target.value)} type='name' className='bg-gray-700 p-2 rounded-lg w-60' />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <label className='text-white'>Subject</label>
              <input onChange={(e) => setSubject(e.target.value)} type='subject' className='bg-gray-700 p-2 rounded-lg w-60' />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <label className='text-white'>Message</label>
              <input onChange={(e) => setMessage(e.target.value)} type='message' className='bg-gray-700 p-2 rounded-lg w-60' />
            </div>
            
         </div>
         
         <div className='m-10'>
            <button onClick={handleSubmit} className='bg-blue-500 rounded-lg p-2 text-white px-8'>Send</button>
         </div>
       </div>
    </div>
  )
}

export default Contact;