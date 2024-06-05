import React from 'react'
// import "../Styles/incall-system.css"
import "../style.css"
import blueArrowLeft from "../assets/afren-images2/blue-arrow-left.png"
import afrenLogo from "../assets/afren-images2/afren-logo.png"
import link from "../assets/afren-images3/link.png"
import userAdd from "../assets/afren-images3/user-add.png"
import maximize2 from "../assets/afren-images3/maximize-2.png"
import videoIcon from "../assets/afren-images3/video-icon.png"
import microphone2 from "../assets/afren-images3/microphone-2.png"
import brianaSquare from "../assets/afren-images3/Briana_Square_Web.jpg.png"
import sendSquare from "../assets/afren-images3/send-square.png"
import blueEllipsis from "../assets/afren-images3/blue-horizontal-ellipsis.png"
import incomingCall from "../assets/afren-images3/incoming-call.png"
import female2 from "../assets/afren-images3/female-2.png"
import blueSendPlane from "../assets/afren-images3/blue-send-plane.png"


export default function InCallSystem({setInCallSystem}) {
  return (
    <>
        <div class="vr-major-container">
            <div class="virtual-workspace-nav">
                <div class="vwn-images">
                    <figure
                        style={{cursor:"pointer"}} 
                        onClick={()=> setInCallSystem(false)} 
                        class="vwn-back-btn"
                    >
                        <img src={blueArrowLeft} alt=""/>
                    </figure>
                    <img src={afrenLogo} alt=""/>
                </div>
                <div class="vwn-links">
                    <img src={link} class="vwn-dropdown-btn" alt=""/>
                    <div class="vwn-drop-down">
                        <span>
                            <img src={link} alt=""/>
                            <a href="#">cem-jnmt-hsu</a>
                        </span>
                        <span>
                            <a href="#">Add Participant</a>
                            <img src={userAdd} alt=""/>
                        </span>
                    </div>
                </div>
            </div>
            <div class="virtual-workspace">
                <section class="virtual-meeting-area">
                    <div class="main-screen-viewport">
                        <span class="screen-resizer">
                            <img src={maximize2} alt=""/>
                        </span>
                        <div class="virtual-call-info">
                            <span class="screen-name">
                                Jacob Jones
                            </span>
                            <div class="voice-movement">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div class="participants">
                        <section>
                            <figure class="video-toggle-btn">
                                <img src={videoIcon} alt=""/>
                            </figure>
                            <div class="participant-opt">
                                <p class="participant-name">
                                    Jacob Jones
                                </p>
                                <figure class="participant-mic-toggle">
                                    <img src={microphone2} alt=""/>
                                </figure>
                            </div>
                        </section>
                        <section>
                            <figure class="video-toggle-btn">
                                <img src={videoIcon} alt=""/>
                            </figure>
                            <figure class="participant-main-image">
                                <img src={brianaSquare} alt=""/>
                            </figure>
                            <div class="participant-opt">
                                <p class="participant-name">
                                    Jacob Jones
                                </p>
                                <figure class="participant-mic-toggle">
                                    <img src={microphone2} alt=""/>
                                </figure>
                            </div>
                        </section>
                    </div>
                    <div class="call-options">
                        <div class="call-function-btns">
                            <span>
                                <img src={microphone2} alt=""/>
                            </span>
                            <span>
                                <img src={videoIcon} alt=""/>
                            </span>
                            <span>
                                <img src={sendSquare} alt=""/>
                            </span>
                            <span>
                                <img src={blueEllipsis} alt=""/>
                            </span>
                        </div>
                        <div class="incall-end-btn" 
                        style={{cursor:"pointer"}} 
                        onClick={()=> setInCallSystem(false)}>
                            <img src={incomingCall} class="ieb-image" alt=""/>
                            <p>
                                End Call
                            </p>
                        </div>
                    </div>
                </section>
                <section class="virtual-message-area">
                    <h2 class="vma-subheading">
                        Chats
                    </h2>
                    <div class="vma-chat-space">
                        <section class="vcs-recipient">
                            <div class="vcs-recipient-info">
                                <figure>
                                    <img src={female2} alt=""/>
                                </figure>
                                <p class="vcs-recipient-name">
                                    Alexander Williams
                                </p>
                                <time>
                                    9:00pm
                                </time>
                            </div>
                            <p class="vcs-recipient-message">
                                Hi Rosemary,
                            </p>
                        </section>
                        <section class="vcs-recipient">
                            <div class="vcs-recipient-info">
                                <figure>
                                    <img src={female2} alt=""/>
                                </figure>
                                <p class="vcs-recipient-name">
                                    Alexander Williams
                                </p>
                                <time>
                                    9:00pm
                                </time>
                            </div>
                            <p class="vcs-recipient-message">
                                Hi Rosemary,
                            </p>
                        </section>
                        <section class="vcs-replyer">
                            <div class="vcs-replyer-info">
                                <time>
                                    9:00pm
                                </time>
                                <p class="vcs-replyer-name">
                                    Alexander Williams
                                </p>
                                <figure>
                                    <img src={female2} alt=""/>
                                </figure>
                            </div>
                            <p class="vcs-replyer-message">
                                Hi Rosemary,hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                            </p>
                        </section>
                        <section class="vcs-replyer">
                            <div class="vcs-replyer-info">
                                <time>
                                    9:00pm
                                </time>
                                <p class="vcs-replyer-name">
                                    Alexander Williams
                                </p>
                                <figure>
                                    <img src={female2} alt=""/>
                                </figure>
                            </div>
                            <p class="vcs-replyer-message">
                                Hi Rosemary,Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique neque qui nulla consequatur porro iste ipsam nisi rem explicabo tenetur, at ex. Eligendi consectetur, neque cum rerum nisi expedita sit.
                            </p>
                        </section>
                    </div>
                    <div class="vma-send-space">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Enter message.."></textarea>
                        <span class="vma-send-btn">
                            <img src={blueSendPlane} alt=""/>
                        </span>
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}
