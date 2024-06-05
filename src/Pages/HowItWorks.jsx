import React from 'react'
import Header from '../Components/Navbar'
import JoinUs from '../Components/JoinUs'
import Footer from '../Components/Footer'
import group_1 from '../assets/afren-images/Group 1.png'
import screen from '../assets/afren-images/Screen.png'
import group_2 from "../assets/afren-images/Group 2.png"
import group_3 from "../assets/afren-images/Group 3.png"
import group_4 from "../assets/afren-images/Group 4.png"
import group_5 from "../assets/afren-images/Group 5.png"
import group_6 from "../assets/afren-images/Group 6.png"
import group_7 from "../assets/afren-images/Group 7.png"
import Document from '../assets/afren-images/Documents.png'
import backnote from '../assets/afren-images/Banknotes.png'
import speech_bubbles from '../assets/afren-images/speech-bubble.png'
import plant_2 from "../assets/afren-images/plant-2.png"
import graphics from "../assets/afren-images/Graphics.png"
import Briefcases from "../assets/afren-images/Briefcases.png"
import background_complete from '../assets/afren-images/background-complete.png'
// import '../Styles/howItWorks.css'
import "../style.css"


export default function HowItWorks() {
  return (
    <>
        <Header />
        <div id="top-text">
            <h1>HOW IT WORKS</h1>
            <h3>STEPS</h3>
        </div>
        <div id="whole-steps">
            <div id="centered-line"></div>
            <div class="steps-sect">
                <h2 class="steps-num">01</h2>
                <div class="stp odd">
                    <div class="steps-text-card">
                        <div class="steps-text">
                            <h2>Create Account</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Ut risus quis eget ut massa. Semper auctor etiam adipiscing metus tincidunt blandit lectus et venenatis.</p>
                        </div>
                    </div>
                    <div class="steps-image-card">
                        <img src={group_1} class="first-sect-elm1" alt=""/>
                        <img src={screen} class="first-sect-elm2" alt=""/>
                    </div>
                </div>
            </div>
            <div class="steps-sect">
                <h2 class="steps-num">02</h2>
                <div class="stp">
                    <div class="steps-image-card">
                            <img src={group_2} class="sec-sect-elm1" alt="" />
                            <img src={group_3} class="sec-sect-elm2" alt="" />
                            <img src={graphics} class="sec-sect-elm3" alt="" />
                    </div>
                    <div class="steps-text-card">
                            <div class="steps-text right">
                            <h2>Create Account</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Ut risus quis eget ut massa. Semper auctor etiam adipiscing metus tincidunt blandit lectus et venenatis.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="steps-sect">
                <h2 class="steps-num">03</h2>
                <div class="stp odd">
                    <div class="steps-text-card">
                    <div class="steps-text">
                        <h2>Create Account</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Ut risus quis eget ut massa. Semper auctor etiam adipiscing metus tincidunt blandit lectus et venenatis.</p>
                    </div>
                    </div>
                    <div class="steps-image-card">
                    <img src={Briefcases} class="third-sect-elm1" alt="" />
                    <img src={group_4} class="third-sect-elm2" alt="" />
                    </div>
                </div>
            </div>
            <div class="steps-sect">
                <h2 class="steps-num">04</h2>
                <div class="stp">
                    <div class="steps-image-card">
                        <img src={background_complete} class="fourth-sect-elm1" alt=""/>
                        <img src={group_5} class="fourth-sect-elm2" alt=""/>
                        <img src={plant_2} class="fourth-sect-elm3" alt=""/>
                    </div>
                    <div class="steps-text-card">
                        <div class="steps-text right">
                            <h2>Create Account</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Ut risus quis eget ut massa. Semper auctor etiam adipiscing metus tincidunt blandit lectus et venenatis.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="steps-sect">
                <h2 class="steps-num">05</h2>
                <div class="stp odd">
                    <div class="steps-text-card">
                        <div class="steps-text">
                            <h2>Create Account</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Ut risus quis eget ut massa. Semper auctor etiam adipiscing metus tincidunt blandit lectus et venenatis.</p>
                        </div>
                    </div>
                    <div class="steps-image-card">
                        <img src={backnote} class="fifth-sect-elm1" alt=""/>
                        <img src={group_6} class="fifth-sect-elm2" alt=""/>
                        <img src={speech_bubbles} class="fifth-sect-elm3" alt=""/>
                    </div>
                </div>
            </div>
            <div class="steps-sect">
                <h2 class="steps-num">06</h2>
                <div class="stp">
                <div class="steps-image-card">
                    <img src={group_7} class="sixth-sect-elm1" alt="" />
                    <img src={Document} class="sixth-sect-elm2" alt="" />
                </div>
                <div class="steps-text-card">
                    <div class="steps-text right">
                        <h2>Create Account</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Ut risus quis eget ut massa. Semper auctor etiam adipiscing metus tincidunt blandit lectus et venenatis.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
      <JoinUs/>
      <Footer />
    </>
  )
}
