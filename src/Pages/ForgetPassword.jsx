import React from 'react';
import Navbar from "../Components/Navbar";
import eyeOff from '../assets/afren-images/eye-off.png';
import eye from '../assets/afren-images/eye.png';
import { useState } from 'react';
import "../style.css"

export default function ForgotPassword() {

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }

  return (
    <>
        <Navbar/>
        <div className="forgot-password-form-space">
            <form action="">
                <h1 className="fpfs-subheading">
                    Reset Password
                </h1>
                <div className='input-group'>
                    <label htmlFor="">
                        Email
                    </label>
                    <input type="Email" placeholder='Enter your email' />
                </div>
                <div className='input-group'>
                    <label htmlFor="">Password</label>
                    <div className="password-toggle-space">
                        <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} placeholder='xxxxxxx' />
                        <img src={passwordType==="password"?eyeOff:eye} onClick={togglePassword} alt="" className='fgfs-eye-icon' />
                    </div>
                </div>
                <button type="submit" className='fp-btn'>
                    Sign in
                </button>
            </form>
        </div>
    </>
  )
}
