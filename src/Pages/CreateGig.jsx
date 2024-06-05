import React, { useState } from 'react'
import "../style.css"
import Gig1 from '../Components/Gig1'
import Gig2 from '../Components/Gig2'
import Gig3 from '../Components/Gig3'
import Gig4 from '../Components/Gig4'

export default function CreateGig() {
    const [count,setCount] = useState(1)
    const [gigInfo, setGigInfo] = useState({
        title: "",
        description: "",
        budget: "",
        jobCategory: "",
        skills: "",
        projectLength: "",
        experienceLevel: "",
        difficulty: "",
        timeLeft: "5"
    })
  return (
    <main className='step-main'>
        <p className="step-number">
            Step {count} of 4
        </p>
        {
        count === 1
        ? <Gig1  gigInfo={gigInfo} setGigInfo={setGigInfo} setCount={setCount}/>
        : count == 2
        ? <Gig2 gigInfo={gigInfo} setGigInfo={setGigInfo}  setCount={setCount} />
        : count == 3
        ? <Gig3 gigInfo={gigInfo} setGigInfo={setGigInfo} setCount={setCount} />
        : <Gig4 gigInfo={gigInfo} setGigInfo={setGigInfo} setCount={setCount} />
        }
    </main>
  )
}
