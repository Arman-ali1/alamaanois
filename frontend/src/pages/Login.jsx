import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom';


const Login = () => {

  

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
    <div class="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <h1 class="text-4xl font-bold mb-8 text-center">Please Login Login to Continue..</h1>
       <div className='bg-gray-950  h-96 w-80 rounded-xl shadow-xl shadow-green-300 flex flex-col justify-center items-center   '>
         <div >
            <div className='flex flex-col justify-center items-center'>
              <label className='text-white'>Email</label>
              <input onChange={(e) => setEmail(e.target.value)} type='email' className='bg-gray-700 p-2 rounded-lg w-60' />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <label className='text-white'>Password</label>
              <input onChange={(e) => setPassword(e.target.value)} type='password' className='bg-gray-700 p-2 rounded-lg w-60' />
            </div>
            
         </div>
         
         <div className='m-10'>
            <button onClick={handleSubmit} className='bg-blue-500 rounded-lg p-2 text-white px-8'>Login</button>
         </div>
       </div>
    </div>
  )
}

export default Login;