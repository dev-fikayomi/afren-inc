/* eslint-disable no-unused-vars */
import React,{useEffect,useRef, useState} from 'react'
import Navbar from '../Components/Navbar'
// import '../Styles/About.css'
import "../style.css"
import globe from '../assets/afren-images/Globe 1@300x-8 1.png'
import mynul from '../assets/afren-images/Mynul_Square_Web.jpg.png'
import travis from '../assets/afren-images/Travis_Square_Web.jpg.png'
import jason from '../assets/afren-images/JasonW_Square_Web.jpg.png'
import briana from '../assets/afren-images/Briana_Square_Web.jpg.png'
import teri from '../assets/afren-images/Teri_Square_Web.jpg.png'
import wael from '../assets/afren-images/Wael_Square_Web.jpg.png'
import Testimonials from '../Components/Testimonials'
import JoinUs from '../Components/JoinUs'
import Footer from '../Components/Footer'
import axios from "axios"
import { Oval } from  'react-loader-spinner'
import Avenger from "../Components/Avenger"


const ENDPOINT = "https://afren-server-kjt8.onrender.com/api/getAvengers"

export default function About() {
    const [team,setTeam] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const divRef = useRef(null)

    async function getAvengers(){
        setIsLoading(true)
        try{
            const response = await axios.get(ENDPOINT)
            setIsLoading(false)
            if(response.status === 200){
                setTeam(response.data)
            }
        }catch(error){
            setIsLoading(false)
            console.log(error)
        }
    }
    useEffect(()=>{
        getAvengers()
    },[])

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    divRef.current.classList.add("moveRight");
                    observer.disconnect()
                }
            }
        )
        observer.observe(divRef.current)
        return ()=>{
            observer.disconnect();
        }
    },[])
  return (
    <>
        <Navbar />
        <div id="topdiv">
            <div id="top-textdiv">
                <h1>Bridging the gap between Client and Freelancers</h1>
                <p>
                Our Beginning, Removing work Barriers.
                </p>
            </div>
            <div id="globe"><img src={globe} alt=""/></div>
        </div>
        <div  id="second-div">
            <div ref={divRef} id="sec-textdiv"> 
                <h1>Bridging the gap between Client and Freelancers</h1>
                <p>After the U.S. economy took a hit in 2008, the way people work changed. Companies saw the potential that came with integrating contract and on-demand labor solutions into their core business. On the other side of the equation, workers of all stripes began embracing flexible work opportunities that allowed them to make use of their talents while maintaining a balanced life.</p>
                <p>Founder and CEO Mynul Khan witnessed this shift as it manifested in the IT world. He identified a problem: The growing opportunity for skilled IT technicians to work independently with service companies was being obstructed by insufficient means to connect. He saw a barrier to work, in other words––and a way through it.</p>
            </div>
        </div>
        <div id="lead-teamouter">
            <div id="lead-teaminner">
                <h1>Meet the Leadership Team</h1>
                <div id="team-leads">
                    {
                        team.map((member)=>{
                            return (
                                <Avenger {...member}  key={member.id}/>
                            )
                        })
                    }
                    {/* <div className="indi-team">
                        <div className="member-pic"><img src={mynul} alt=""/></div>
                        <p><b>Mynul Khan</b></p>
                        <small>Founder & CEO</small>
                    </div>
                    <div className="indi-team">
                        <div className="member-pic"><img src={travis} alt=""/></div>
                        <p><b>Travis Emslander</b></p>
                        <small>Chief Technical Officer</small>
                    </div>
                    <div className="indi-team">
                        <div className="member-pic"><img src={jason} alt=""/></div>
                        <p><b>Jason Woods</b></p>
                        <small>Chief Financial Officer</small>
                    </div>
                    <div className="indi-team">
                        <div className="member-pic"><img src={briana} alt=""/></div>
                        <p><b>Briana Belisle</b></p>
                        <small>EVP of Marketing</small>
                    </div>
                    <div className="indi-team">
                        <div className="member-pic"><img src={teri} alt=""/></div>
                        <p><b>Teri Calderon</b></p>
                        <small>EVP of People and Marketplace Operations</small>
                    </div>
                    <div className="indi-team">
                        <div className="member-pic"><img src={wael} alt=""/></div>
                        <p><b>Wael Mohammed</b></p>
                        <small>EVP of Strategy</small>
                    </div> */}
                </div>
            </div>
        </div>
        <Testimonials/>
        <JoinUs/>     
        <Footer />
    </>
  )
}
