import React, { useEffect, useState } from 'react'
import Navbar from "../Components/Navbar"
import searchIcon from "../assets/afren-images/white-search-icon.png"
import findTalent from "../assets/afren-images2/find-talent-mockup.png"
import Talent from '../Components/Talent'
import "../style.css"
import axios from "axios"



const endpoint = "https://afren-server-kjt8.onrender.com/api/getAllFreelancers"

// const token = sessionStorage.getItem("token")


export default function FindTalent() {
    const [token, setToken] = useState(sessionStorage.getItem("token"))
    const [talents, setTalents] = useState([])
    
    async function fetchTalent(){
        try{
            const response = await axios.get(endpoint,{
                headers : {
                    Authorization : token
                }
            })
            setTalents(response.data)
        }catch(error){
            setTalents([])
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchTalent()
    },[])
  return (
    <>
        <Navbar />
        <header className='find-talent-header'>
        <div class="header-text-image">
            <div class="header-text">
                <h1>
                    Find and Hire <br /><span>High value Talents</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. laculis imperdiet vitae massa odio porta nibh volupat fusce.
                </p>
                <div className="inquiry">
                    <div className="search-space-talent">
                        <input type="search" placeholder="Search talent" />
                        <figure>
                            <img src={searchIcon} alt=""/>
                        </figure>
                    </div>
                    <button>Post a job</button>
                </div>
            </div>
            <img src={findTalent} alt="" className="header-mockup" />
        </div>
        </header>
        <div class="page-cont">
            {/* <div class="selections-cont">  */}
            <div class="selections">
                <select name="" id="">
                    <option selected value="">Categories of work</option>
                    <option value="">opt</option>
                    <option value="">opt</option>
                </select>
                <select name="" id="">
                    <option selected value="">Skills</option>
                    <option value="">opt</option>
                    <option value="">opt</option>
                </select>
                <select name="" id="">
                    <option selected value="">Country</option>
                    <option value="">opt</option>
                    <option value="">opt</option>
                </select>
                <select name="" id="">
                    <option selected value="">Location</option>
                    <option value="">opt</option>
                    <option value="">opt</option>
                </select>
                <select name="" id="">
                    <option selected value="">Hourly Rate</option>
                    <option value="">opt</option>
                    <option value=""></option>
                </select>
                <select name="" id="">
                    <option selected value="">Rating</option>
                    <option value="">opt</option>
                    <option value="">opt</option>
                </select>
            </div>
        </div>
        <div className="selections-mobile">
            <select name="" id="">
                <option value=""></option>
                <option value="">opt</option>
                <option value="">opt</option>
                <option value="">opt</option>
            </select>
        </div>
        <div className='talents'>
            {
                talents.map((talent,index)=>{
                    return <Talent {...talent}/>
                })
            }
            {/* <Talent />
            <Talent />
            <Talent />
            <Talent />
            <Talent /> */}
        </div>
    </>
  )
}
