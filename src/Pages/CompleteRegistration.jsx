import React from 'react'

import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import "../style.css"
import { useNavigate } from 'react-router-dom'

export default function CompleteRegistration() {

    const navigate = useNavigate()
    function handleNavigate(link){
        navigate(link)
        window.scrollTo({
            top:0,
            left:0,
            behavior: "smooth"
        })
    }

  return (
    <>
      {/* <Navbar /> */}
      <main className='waitlist-page'>
            <p className="text-primary-color">
                Join the Afren waitlist and unlock limitless opportunities
            </p>
            <p>
                Who are you joining as?
            </p>
            <div className="waitlist-contianer">
                <button onClick={()=>handleNavigate('/freelancerreg')}>
                    Freelancer 
                </button>
                <button onClick={()=>handleNavigate('/clientreg')}>
                    Client
                </button>
            </div>
        </main>
      {/* <Footer /> */}
    </>
  )
}
