import React from 'react'
// import "../Styles/Message.css"
import "../style.css"
import searchBlue from "../assets/afren-images2/search-blue.png"
import dropdown from "../assets/afren-images2/dropdown-icon-black.png"
import female1 from "../assets/afren-images2/female1.png"
import female2 from "../assets/afren-images2/female-2.png"
import female3 from "../assets/afren-images2/female-3.png"
import greaterThan from "../assets/afren-images2/greater-than-symbol.png"
import starIcon from "../assets/afren-images2/star-icon.png"
import videoCamera from "../assets/afren-images2/video-camera.png"
import attachmentLogo from "../assets/afren-images2/attachment-logo.png"
import incomingCalls from "../assets/afren-images2/incoming-call.png"
import fleg from "../assets/afren-images2/fleg.png"
import boldLogo from "../assets/afren-images2/bold-logo.png"
import italicsIcon from "../assets/afren-images2/italics-icon.png"
import sLogo from "../assets/afren-images2/slogo.png"
import art from "../assets/afren-images2/art-symbol.png"
import happy from "../assets/afren-images2/happy.png"
import sendPlane from  "../assets/afren-images2/send-plane.png"




export default function Message({setInCallSystem}) {
  return (
    <>
            <div className="chat-space">
            <p className="chat-space-description">
                Messages
            </p>
            <div className="cs-section">
                <img src={searchBlue} alt="" />
                <input type="search" placeholder="Search" />
            </div>
            <div className="fs-subheading">
                <p>Favourites</p>
                <img src={dropdown} className="drp-1" alt="" />
            </div>
            <section className="chat-people cp1">
                <div className="cp-person-space" id="chat-indicator">
                    <div className="chat-description">
                        <figure>
                            <img src={female1} alt="" className="cd-image"/>
                        </figure>
                        <span>
                            <p className="chat-name">Alexander Williams</p>
                            <p className="chat-text">Looking forward to..</p>
                        </span>
                    </div>
                    <div className="chat-time">
                        <p className="chat-period">
                            Now
                        </p>
                        <p className="chat-number">2</p>
                    </div>
                </div>
                <div className="cp-person-space">
                    <div className="chat-description">
                        <figure>
                            <img src={female2} alt="" className="cd-image"/>
                        </figure>
                        <span>
                            <p className="chat-name">Alexander Williams</p>
                            <p className="chat-text">Looking forward to..</p>
                        </span>
                    </div>
                    <div className="chat-time">
                        <p className="chat-period">
                            Now
                        </p>
                        <p className="chat-number">2</p>
                    </div>
                </div>
                <div className="cp-person-space">
                    <div className="chat-description">
                        <figure>
                            <img src={female3} alt="" className="cd-image"/>
                        </figure>
                        <span>
                            <p className="chat-name">Alexander Williams</p>
                            <p className="chat-text">Looking forward to..</p>
                        </span>
                    </div>
                    <div className="chat-time">
                        <p className="chat-period">
                            Now
                        </p>
                        <p className="chat-number">2</p>
                    </div>
                </div>
            </section>
            <div className="cs-subheading">
                <p>Chats</p>
                <img src={dropdown} className="drp-2" alt=""/>
            </div>
            <section className="cp2">
                <div className="cp-person-space">
                    <div className="chat-description">
                        <figure>
                            <img src={female1} alt="" className="cd-image"/>

                        </figure>                        <span>
                            <p className="chat-name">Alexander Williams</p>
                            <p className="chat-text">Looking forward to..</p>
                        </span>
                    </div>
                    <div className="chat-time">
                        <p className="chat-period">
                            Now
                        </p>
                        <p className="chat-number">4</p>
                    </div>
                </div>
                <div className="cp-person-space">
                    <div className="chat-description">
                        <figure>
                            <img src={female2} alt="" className="cd-image" />
                        </figure>
                        <span>
                            <p className="chat-name">Alexander Williams</p>
                            <p className="chat-text">Looking forward to..</p>
                        </span>
                    </div>
                    <div className="chat-time">
                        <p className="chat-period">
                            33m
                        </p>
                    </div>
                </div>
                <div className="cp-person-space">
                    <div className="chat-description">
                        <figure>
                            <img src={female3} alt="" className="cd-image" />
                        </figure>
                        <span>
                            <p className="chat-name">Alexander Williams</p>
                            <p className="chat-text">Looking forward to..</p>
                        </span>
                    </div>
                    <div className="chat-time">
                        <p className="chat-period">
                            33m
                        </p>
                        <p className="chat-number">1</p>
                    </div>
                </div>
                <div className="cp-person-space">
                    <div className="chat-description">
                        <figure>
                            <img src={female2} alt="" className="cd-image"/>
                        </figure>
                        <span>
                            <p className="chat-name">Alexander Williams</p>
                            <p className="chat-text">Looking forward to..</p>
                        </span>
                    </div>
                    <div className="chat-time">
                        <p className="chat-period">
                            33m
                        </p>
                    </div>
                </div>
            </section>
            </div>
            <div className="message-space">
            <div className="message-nav">
                <div className="profile-description">
                    <img src={greaterThan} alt="" id="back-btn" />
                    <figure>
                        <img src={female1} alt="" className="cd-image" />
                    </figure>
                    <span>
                        <p className="profile-name">Alexander Williams</p>
                        <p className="profile-lastseen">Last 10m ago</p>
                    </span>
                </div>
                <header className="nav-btns">
                    <a href="javascript:void(0)" className="nav-btn-link" title="rate">
                        <img src={starIcon} className="icon-1" alt="" />
                    </a>
                    <a onClick={()=>setInCallSystem(true)} href="javascript:void(0)" className="nav-btn-link" title="video call">
                        <img src={videoCamera} className="icon-2" alt="" />
                    </a>
                    <a href="javascript:void(0)" className="nav-btn-link" title="attachment">
                        <img src={attachmentLogo} className="icon-3" alt="" />
                    </a>
                    <span className="message-profile-span3 nav-btn-link" title="more..">
                        <img src="horizontal-ellipsis.png" className="icon-4" alt=""/>
                        <div className="mps3-dropdown">
                            <a href="javascript:void(0)" className="mps3-dropdown-1">
                                <img src={incomingCalls} alt=""/>
                                <p>Audio call</p>
                            </a>
                            <a href="javascript:void(0)" className="mps3-dropdown-2" id="mps-hide">
                                <img src={videoCamera} alt=""/>
                                <p>Video call</p>
                            </a>
                            <a href="javascript:void(0)" className="mps3-dropdown-3" id="mps-hide">
                                <img src={attachmentLogo} id="mps3-attachment-logo" alt=""/>
                                <p>Attachments</p>
                            </a>
                            <a href="javascript:void(0)" className="mps3-dropdown-4">
                                <img src={incomingCalls} alt=""/>
                                <p>Rate Freelancer</p>
                            </a>
                            <a href="javascript:void(0)" className="mps3-dropdown-5">
                                <img src={fleg} alt=""/>
                                <p>Report this account</p>
                            </a>
                        </div>
                    </span>
                </header>
            </div>
            <div className="message-chat-space">
                <div className="message-chat-date">
                    Today
                </div>
                <div className="sender-message-space">
                    <div className="sender">
                        <div className="sender-indication">
                            <img src={female1} alt=""/>
                            <p className="sender-name">
                                Alexander Williams
                            </p>
                        </div>
                        <time>
                            9:07 PM
                        </time>
                    </div>
                    <div className="sender-message">
                        <p>
                            Hi Rosemary,<br/><br/>
                            I came across your impressive portfolio and wanted to reach out about a potential freelance opportunity. We're looking for someone with your skills and experience to help us with [specific project or task]. If you're interested, please let me know and we can discuss further.
                            Looking forward to hearing from you! <br/><br/>
                            Best regards, John Doe
                        </p>
                        <p>
                            Looking forward to hearing from you!
                        </p>
                    </div>
               </div>
               <div className="receiver-message-space">
                    <div className="receiver">
                        <time>
                            9:07 PM
                        </time>
                        <div className="receiver-indication">
                            <p className="receiver-name">
                                Me
                            </p>
                            <img src={female3} alt=""/>
                        </div>
                    </div>
                    <div className="receiver-message">
                        <p>
                            Looking forward to hearing from you!
                        </p>
                        <p id="typing">
                            <span className="typing-span1"></span>
                            <span className="typing-span2"></span>
                            <span className="typing-span3"></span>
                        </p>
                    </div>
               </div>
            </div>
            <div className="send-text">
                <textarea onfocus="keyDown()" onblur="keyUp()" name="" id="" cols="30" rows="10" placeholder="Enter message"></textarea>
                <div className="chat-settings">
                    <div className="cs-option1">
                        <figure>
                            <img src={boldLogo} alt="" />
                        </figure>
                        <figure>
                            <img style={{ width: "12px" }} src={italicsIcon} alt="" />
                        </figure>
                        <figure>
                            <img style={{ width: "15px" }} src={sLogo} alt="" />
                        </figure>
                        <figure>
                            <img style={{ width: "10px" }} src={attachmentLogo} alt="" />
                        </figure>
                    </div>
                    <div className="cs-option2">
                        <figure>
                            <img src={art} alt="" />
                        </figure>
                        <figure>
                            <img src={happy} alt="" />
                        </figure>
                        <figure>
                            <img src={sendPlane} alt="" />
                        </figure>
                    </div>
                </div>
            </div>
            </div>
    </>
  )
}
