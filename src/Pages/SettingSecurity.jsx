/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
// import "../Styles/sett-security.css"
import "../style.css"
import { Oval } from  'react-loader-spinner'
import toast, { Toaster } from 'react-hot-toast';
import OtpInput from 'react-otp-input';
import axios from "axios"


const token = sessionStorage.getItem("token")

const ENDPOINT = "https://afren-main-server.onrender.com/api/sendFreelancerOTP"
const ENDPOINT2 = "https://afren-main-server.onrender.com/api/changeFreelancerPassword"

export default function SettingSecurity() {
    const [newPassword, setNewPassword] = useState("")
    const [newPassword2, setNewPassword2] = useState("")
    const [isLoading,setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    const [otp, setOtp] = useState('');
    
    async function handleSubmit(e){
        e.preventDefault()
        const email = localStorage.getItem("email")
        setIsLoading(true)
        if(newPassword !== newPassword2){
            toast.error("Passwords not Equal")
            setIsLoading(false)
            return 
        }
        else{
            console.log({email})
            try{
                const response = await axios.post(ENDPOINT,{email},
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json', // You might need to set the content type based on your API requirements
                      },
                    })
                setIsLoading(false)
                toast.success("OTP sent successfully")
                // if(response.data.message === "OTP sent successfully"){}
            }catch(error){
                console.log(error.response)
                toast.error("An Error Occured")
                setIsLoading(false)
            }
            // finally{
            //     localStorage.clear()
            // }
        }

    }
    async function handleClick(e){
        e.preventDefault()
        setIsLoading2(true)
        const email = localStorage.getItem("email")
        const PayLoad = {
            email: email,
            otp : otp,
            newPassword : newPassword
        }
        console.log(PayLoad)
        try{
            const response = await axios.post(ENDPOINT2,PayLoad)
            console.log(response.response)
            toast.success("Password Changed Successfully")
            // if (response.data.message !== "Invalid OTP"){
            //     toast.success("Password Changed Successfully")
            //     setIsLoading2(false)
            // }
            // else{
            //     toast.error("An Error Occurred")
            //     setIsLoading2(false) 
            // }
        }catch(error){
            toast.error("An Error Occured")
            console.log(error.response)
            setIsLoading2(false)
        }
    }
  return (
    <>
    <div id="main">
        <Toaster />
        <div className="form-label"><h3>Change Password</h3></div>
            <form onSubmit={handleSubmit} action="">
                <label for="">New Password</label>
                <input 
                    type="password" 
                    id="" 
                    name="newPassword1" 
                    placeholder=""
                    value={newPassword}
                    onChange={(e)=>setNewPassword(e.target.value)}
                    />
            
                <label for="">Re-enter Password</label>
                <input 
                    type="password" 
                    id="" 
                    name="newPassword2" 
                    placeholder=""
                    value={newPassword2}
                    onChange={(e)=>setNewPassword2(e.target.value)}
                />
                
                <button 
                    type="submit" 
                    className="send-code"
                    style={{display: "flex", justifyContent: "center", alignItems: "center"}} 
                >
                    {
                        !isLoading
                        ? "send verification code"
                        : (<Oval
                            height={25}
                            width={25}
                            color="#fff"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#015B7E"
                            strokeWidth={2}
                            strokeWidthSecondary={2}
                            />)
                    }
                </button>
            </form>
            <p>Enter the 6-digit OTP code sent to your mail</p>
            {/* <div className="otp">
                <input type="text" maxlength="1" name="" id=""/>
                <input type="text" maxlength="1" name="" id=""/>
                <input type="text" maxlength="1" name="" id=""/>
                <input type="text" maxlength="1" name="" id=""/>
                <input type="text" maxlength="1" name="" id=""/>
                <input type="text" maxlength="1" name="" id=""/>
            </div> */}
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                containerStyle="otp"
                inputStyle={{width: "50px"}}
                renderSeparator={<></>}
                renderInput={(props) => <input {...props} />}
    />
            <button 
                className="pass-change" 
                style={{display: "flex", justifyContent: "center", alignItems:"center"}}
                onClick={handleClick}
            >
                { !isLoading2
                ?
                "Change Password"
                :   (<Oval
                    height={25}
                    width={25}
                    color="#fff"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#015B7E"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                    />) 
                }
                </button>
            <div className="form-label"><h3>Change Password</h3></div>
            <form action="">
                <label for="">Enter New Phone Number</label>
                <input type="tel" id="" name="" placeholder=""/>
                
                <input type="submit" className="send-code" value="Send Verification Code"/>
            </form>
            <p>Enter the 6-digit OTP code sent to your mail</p>
            <div className="otp-outter">
                <div className="otp">
                    <input type="text" maxlength="1" name="" id=""/>
                    <input type="text" maxlength="1" name="" id=""/>
                    <input type="text" maxlength="1" name="" id=""/>
                    <input type="text" maxlength="1" name="" id=""/>
                    <input type="text" maxlength="1" name="" id=""/>
                    <input type="text" maxlength="1" name="" id=""/>
                </div>
            </div>
            <button className="pass-change">Change Number</button>
    </div>
    </>
  )
}
