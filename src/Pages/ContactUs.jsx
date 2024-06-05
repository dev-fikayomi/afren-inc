import React, { useState } from 'react'
import Navbar from "../Components/Navbar"
import JoinUs from '../Components/JoinUs'
import Footer from '../Components/Footer'
import axios from "axios";
import Swal from "sweetalert2";
import { Oval } from  'react-loader-spinner'
// import "../Styles/contactUs.css"
import '../Styles/About.css'

const endpoint = "https://afren-main-server.onrender.com/api/contactUs"
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const fullNameRegex = /^[a-zA-Z][a-zA-Z]+ [a-zA-Z][a-zA-Z]+$/;
const phoneNumberRegex = /^\d{9,}$/;


// console.log(fullName.test("alao abdulmusawwir"))
export default function ContactUs() {
    const [loading, setLoading] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [formObj, setFormObj] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        inquiry: ""
    })

    const {fullName, email, phoneNumber, inquiry} = formObj
    // console.log(fullName, email, phoneNumber, inquiry)
    function handleChange(e){
        const {name, value} = e.target;

        setFormObj({
            ...formObj,
            [name] : value
        })
        const validEmail = emailRegex.test(email)
        const validPhoneNumber = phoneNumberRegex.test(phoneNumber)
        const validFullName = fullNameRegex.test(fullName)

        if(validEmail && validPhoneNumber && validFullName && inquiry){
            setBtnDisabled(false)
        }
        else{
            setBtnDisabled(true)
        }
    }

    async function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        try{
            const response = await axios.post(endpoint,formObj)
            if(response.status === 201){
                setLoading(false)
                Swal.fire({
                    icon: 'success',
                    title: 'Thank you for reaching out to us',
                    text: 'we will get in touch soon'
                  }).then(()=>{
                    setFormObj({
                        fullName: "",
                        email: "",
                        phoneNumber: "",
                        inquiry: ""
                    })
                  })
            }
            else{
                setLoading(false)
                Swal.fire({
                    icon: 'error',
                    title: 'Try again',
                    text: 'you might lucky this time'
                  })
            }
        }catch(error){
            console.log(error)
            setLoading(false)
            Swal.fire({
                icon: 'error',
                title: 'incorrect information provided',
                text: 'ensure all section are filled'
              })
        }
    }
  return (
    <>
        <Navbar />
        <div id="top-div-contanct">
            <div id="testim-wrap2"><div id="contact-testim-tag">Contact us</div></div>
            <center>
                <div id="centered-text2">
                    <h1>We're <font id="colored-text">really excited</font> to hear from you!</h1>
                    <p>We value your thoughts and opinions, and we're genuinely interested in what you have to say. Your feedback is important to us and helps us improve our services. </p>
                </div>
            </center>
        </div>
        <div id="form-contact">
            <form action="" onSubmit={handleSubmit}>
                <label for="name">Name</label>
                <input 
                    type="text" 
                    name="fullName" 
                    id="name"
                    value={fullName}
                    onChange={handleChange}
                    class="form-inp" 
                    placeholder="John Doe"
                />
    
                <label for="email">Email</label>
                <input 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={handleChange}
                    id="email"
                    class="form-inp" 
                    placeholder="You@email.com"
                />
    
                <label for="phoneNumber">Phone Number</label>
                <input 
                    type="tel" 
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleChange} 
                    id="phoneNumber" 
                    class="form-inp" 
                    placeholder="Enter phone number"
                />
    
                <label for="inquiry">Inquiry</label>
                <textarea 
                    name="inquiry"
                    value={inquiry}
                    onChange={handleChange} 
                    id="inquiry" 
                    cols="30" rows="10" 
                    placeholder="Would like to know your thoughts about Rio">
                </textarea>    
                <button 
                    type="submit" 
                    name="" value="Submit" 
                    id="submit-butt"
                    disabled={btnDisabled}
                >{
                loading
                ?   <Oval
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
                    />
                :"Submit"}
                </button>
            </form>
        </div>
        <div id="middle"></div>
        <JoinUs />
        <Footer />
    </>
  )
}
