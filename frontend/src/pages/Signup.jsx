import React, { useState } from "react";
import axios from "axios";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authDataContext } from "../Context/AuthContext";

function SignUp() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { serverUrl } = useContext(authDataContext);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Submit handler
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      let result = await axios.post(serverUrl + "/api/auth/signup", {
        name,
        email,
        password,
      });

      console.log("Signup Successful:", result.data);

      // After signup → go to login
      navigate("/login");

    } catch (error) {
      console.log("Signup Error:", error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-gray-100">
      <form
        className="max-w-[900px] w-[90%] h-[600px] flex flex-col items-center md:items-start justify-center gap-[20px] p-6 bg-white rounded-xl shadow-lg"
        onSubmit={handleSignup}
      >
        <h1 className="text-[30px] text-black font-semibold">Create Account</h1>

        {/* Username */}
        <div className="w-full flex flex-col gap-[10px] mt-[15px]">
          <label htmlFor="name" className="text-[20px]">UserName</label>
          <input
            type="text"
            id="name"
            className="w-full h-[45px] border-2 border-[#555656] rounded-lg text-[18px] px-[20px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="w-full flex flex-col gap-[10px]">
          <label htmlFor="email" className="text-[20px]">Email</label>
          <input
            type="email"
            id="email"
            className="w-full h-[45px] border-2 border-[#555656] rounded-lg text-[18px] px-[20px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="w-full flex flex-col gap-[10px] relative">
          <label htmlFor="password" className="text-[20px]">Password</label>

          <input
            type={show ? "text" : "password"}
            id="password"
            className="w-full h-[45px] border-2 border-[#555656] rounded-lg text-[18px] px-[20px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {!show ? (
            <IoMdEye
              className="w-[26px] h-[26px] absolute right-[20px] top-[55%] -translate-y-1/2 cursor-pointer"
              onClick={() => setShow(true)}
            />
          ) : (
            <IoMdEyeOff
              className="w-[26px] h-[26px] absolute right-[20px] top-[55%] -translate-y-1/2 cursor-pointer"
              onClick={() => setShow(false)}
            />
          )}
        </div>

        {/* Signup Button */}
         <button className="px-[50px] py-[10px] !bg-violet-500 !text-white text-[18px] md:px-[100px] rounded-lg">
    signup
  </button>

        <p>
          Already have an account?{" "}
          <span
            className="text-[violet] cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
