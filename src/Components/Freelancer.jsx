import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import love from "../assets/afren-images/love.png"
import janeDoe from "../assets/afren-images/jane-doee.png"
import dollar from "../assets/afren-images/dollar.png"
import verified from "../assets/afren-images/verified.png"
import fullBlueStar from "../assets/afren-images/full-blue-star.svg"
import blueStarHalf from "../assets/afren-images/blue-star-half.png"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';


const token = sessionStorage.getItem("token")

const endpoint = "https://afren-server-kjt8.onrender.com/api/saveJob"
const unSaveEndpoint ="https://afren-server-kjt8.onrender.com/api/unSaveJob"


export default function Freelancer({ _id, title, description, price, clientEmail, jobCategory,
    skills, projectLength,experienceLevel, difficulty, freelancerEmail, timeLeft, gigStatus, createdAt,
    updatedAt, id }) {

    const [isJobSaved,setIsJobSaved] = useState(false)

    async function saveJob(){
        const payLoad = {
            jobIdString: _id
        }
        try{
            if(!isJobSaved){
                const response = await axios.post(endpoint,payLoad,{
                    headers : {
                        Authorization : token
                    }
                })
                toast.success(response.data.message);
                setIsJobSaved(true)
            }else{
                try{
                    const response = await axios.post(unSaveEndpoint,payLoad,{
                        headers : {
                            Authorization : token
                        }
                    })
                    if(response.status === 200){
                        setIsJobSaved(false)
                        toast.success("Job unsaved successfully")
                    }
                    else{
                        toast.error("An error occurred")
                    }
                }catch(error){
                    console.log(error)
                }
                 

                // setJob(false)
                // toast.success("Job unsaved successfully")
            }
            
        }catch(error){
            console.log(error)
            setJob(false)
        }
    }
    
  return (
    <section className='freelancer'>
        <Toaster />
        <div class="time">
            <div>Posted <a href="#">1 hr ago<b>· </b>26 Quotes</a> Received</div>
            <p>Send before: Apr 01, 2023</p>
        </div>
        <div class="profession">
                <div class="profession-description">
                    <h2>{title}</h2>
                    <p>Fixed Price | Under ${price}</p>
                </div>
                <div class="p-d2">
                    <div class="love" onClick={saveJob}>
                        <img class="love-img" src={love} alt="love-img" />
                    </div>
                    <NavLink
                        class="quote"
                        to={`/quoteform/${_id}`}>
                        Send a Quote
                    </NavLink>
                </div>
        </div>
        <p class="freelancer-text">
            {description}
        </p>
        <div class="job-types">
            {skills.map((skill,index)=>{
                return <a href="javascript:void(0)" key={index}>{skill}</a> 
            })}
            {/* <a href="javascript:void(0)">UI/UX Prototyping</a>
            <a href="javascript:void(0)">Prototyping</a>
            <a href="javascript:void(0)">Interaction Design</a>
            <a href="javascript:void(0)">UI/UX Wireframing</a>
            <a href="javascript:void(0)">Figma</a>
            <a href="javascript:void(0)">Motion Graphics</a>
            <a href="javascript:void(0)">Motion Graphics</a>
            <a href="javascript:void(0)">Motion Graphics</a>
            <a href="javascript:void(0)">Motion Graphics</a> */}
        </div>
        <div class="freelancer-profile">
            <img src={janeDoe} alt="profile-img" />
            <div class="profile-text">
                <a class="name" href="javascript:void(0)">
                    Jane Doe
                </a>
                <p>United Kingdom</p>
                <div class="profile-info">
                    <p>
                        <img src={verified} alt="" />
                        Payment Verified
                    </p>
                    <p>
                        <img src={dollar} alt="" />
                        1,250 Spent
                    </p>
                    <div class="rating-star">
                        <img src={fullBlueStar} alt="" />
                        <img src={fullBlueStar} alt="" />
                        <img src={fullBlueStar} alt="" />
                        <img src={fullBlueStar} alt="" />
                        <img src={blueStarHalf} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
