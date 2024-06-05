import React from 'react'
import johnDoe from "../assets/afren-images2/john-doe.png"
import greenDot from "../assets/afren-images2/green-dot.png"
import location from "../assets/afren-images2/zondicons_location.png"
import dollar from "../assets/afren-images2/dollar.png"


export default function Talent({firstName, lastName,country,professionalInfo}) {
    // const [profession, skills] = professionalInfo[0]
    console.log(professionalInfo[0]?.profession)
  return (
    <div class="talent-one">
        <div class="talent-header">
            <img src={johnDoe} class="murich" alt="" />
            <img src={greenDot} class="green-dot" alt="" />
            <div class="talent-id">
                <h4>{firstName} {lastName}</h4>
                <p>{professionalInfo[0]?.profession}</p>
                <div class="talent-location">
                    <img src={location} alt="" />
                    <p>{country}</p>
                </div>
                </div>
                    <button>Available</button>
                </div>
                {
                    professionalInfo[0]?.skills.map((skill,index)=>{
                        return <button key={index}>{skill}</button>
                    })
                }
                {/* <button>UI/UX</button>
                <button>User experience</button>
                <button>Information architecture</button>
                <button>Mobile design</button>
                <button>Web design</button> */}
                <div class="divider"></div>
                <div class="talent-qualifications">
                    <div class="quali-one">
                        <img src={dollar} alt="" />
                        <p>$45.00/hr</p>
                    </div>
                    <div class="quali-one">
                        <img src={dollar} alt="" />
                        <p>$20k+ earned</p>
                    </div>
                    <div class="quali-one">
                        <img src={dollar} alt="" />
                        <p>HIGHLY RATED</p>
                    </div>
                </div>
                <section class="talent-last">
                    <div class="talent-squares">
                        <div class="talent-square"></div>
                        <div class="talent-square"></div>
                        <div class="talent-square"></div>
                        <div class="talent-square"></div>
                        <div class="talent-square"></div>
                    </div>
                    <div class="talent-buttons">
                        <button class="btn-one">Get a quote</button>
                        <button class="btn-two">Consult</button>
                    </div>
                </section>
            </div>
  )
}
