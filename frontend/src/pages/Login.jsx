import axios from 'axios';
import React, { useContext, useState } from 'react';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { authDataContext } from '../Context/AuthContext';

function Login () {
  let [show, setShow] = useState(false);
  let navigate=useNavigate()
   let{serverUrl} = useContext(authDataContext)
   
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")


   const handleL0gin = async(e)=>{
      try {
        e.preventDefault()
        let result = await axios.post(serverUrl + "/api/auth/login",{
          
          email,
          password
  
        })
        console.log(result);
        
      } catch (error) {
        console.log(error);
        
      }
    }
  
  
    return (
      <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
        <form className='max-w-[900px] w-[90%] h-[600px] flex items-center justify-center flex-col md:items-start gap-[10px]' onSubmit={handleL0gin}>
          
          <h1 className='text-[30px] text-[black]'>Welcome to zeeVISTA</h1>
  
  
          <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
            <label htmlFor="email" className='text-[20px]'>Email</label>
            <input
              type="text"
              id="email"
              className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required onChange={(e)=>setEmail(e.target.value)} value={email}
            />
          </div>
  
          <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] relative'>
            <label htmlFor="password" className='text-[20px]'>Password</label>
  
            <input
              type={show ? "text" : "password"}
              id="password"
              className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required onChange={(e)=>setPassword(e.target.value)} value={password}
            />
  
            {!show && (
              <IoMdEye
                className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer'
                onClick={() => setShow(prev => !prev)}
              />
            )}
  
            {show && (
              <IoMdEyeOff
                className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer'
                onClick={() => setShow(prev => !prev)}
              />
            )}
          </div>
          <button className="px-[50px] py-[10px] !bg-violet-500 !text-white text-[18px] md:px-[100px] rounded-lg">
    Login
  </button>
  <p>Create new account <span className='text-[violet] cursor-pointer' onClick={()=>navigate("/signup")}>SignUp</span></p>

  
     
  
  
        </form>
      </div>
  )
}

export default Login