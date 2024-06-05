import React, { useEffect, useState } from 'react'
// import "../Styles/ClentDash.css"
import "../style.css"
import Chart from "chart.js/auto";
import { CategoryScale } from 'chart.js';
import { Data } from '../utils/Data';
import { BarChart } from '../Components/BarChat';
import Navbar2 from '../Components/Navbar2';
import Sidebar from '../Components/Sidebar';
import Leaderboard from './Leaderboard';
import HelpDispute from './HelpDispute';
import Message from './Message';
import Billings from './Billings';
import Feedback from './Feedback';
import icon from "../assets/afren-images2/Icon.png"
import icon1 from "../assets/afren-images2/Icon-1.png"
import dot from "../assets/afren-images2/dot.png"
import dot1 from "../assets/afren-images2/dot-1.png"
import rect from "../assets/afren-images2/Rectangle 34624273.png"
import rect1 from "../assets/afren-images2/Rectangle 34624273-1.png"
import rect2 from "../assets/afren-images2/Rectangle 34624273-2.png"
import ellipse32 from "../assets/afren-images2/Ellipse 32.png"
import ClientProfileView from './ClientProfileView.jsx';
import SettingsAcc from './SettingsAcc';
import SettingsBids from './SettingsBids';
import SettingProfile from './SettingProfile';
import ClientSettingSecurity from './ClientSettingSecurity';
import InCallSystem from './InCallSystem';
import ClientSettingsAcc from  './ClientSettingsAcc';
import Myjobs from './Myjobs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import OngoingGigs from '../Components/OngoingGigs';
import ClientBids from '../Components/ClientBids';
import ClientFeedback from './ClientFeedback.jsx';



Chart.register(CategoryScale);

const token = sessionStorage.getItem("token")

const endpoint = "https://afren-server-kjt8.onrender.com/api/toggleClientAvailability"
const endpoint2 = "https://afren-server-kjt8.onrender.com/api/getOngoingGigs"
const totalProjectEndpoint = "https://afren-server-kjt8.onrender.com/api/getTotalProjects"


export default function Client() {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [isVisibleSection, setVisibleSection] = useState("dashboard2")
    const [inCallSystem,setInCallSystem] = useState(false)
    const [myJobs, setMyjobs] = useState(false)
    const [defaultSection, setDefaultSection] = useState("dashboard2")
    const [profileView,setPorfileView] = useState("profile2")
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.week), 
        datasets: [
          {
            label: "Paid ",
            data: Data.map((data) => data.paid),
            backgroundColor: [
              "#015B7E"
            ],
            borderRadius: Number.MAX_VALUE,
            // barThickness: 35,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 2,
            categoryPercentage: 0.7
          },
          {
            label: "Pending ",
            data: Data.map((data) => data.pending),
            backgroundColor: [
              "#3AC3D6"
            ],
            borderRadius: Number.MAX_VALUE,
            // barThickness: 35,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 2,
            categoryPercentage: 0.7
          }
        ]
    });
    const [onGoingGigs,setOngoingGigs] = useState([])
    const [projectNumber,setProjectNumber] = useState(0)
    const [isMenuOpen,setIsMenuOpen] = useState(true)
    
    async function toggleClientAvailability(){
        try{
            const response = await axios.get(endpoint,{
                headers : {
                    Authorization : token
                }
            })
            // console.log(response)
        }catch(error){
            console.log(error)
        }
    }

    async function fetchOngoingGigs(){
        try{
            const response = await axios.get(endpoint2,{
                headers : {
                    Authorization : token
                }
            })
            // console.log(response.data)
            setOngoingGigs(response.data)
        }catch(error){
            console.log(error)
        }
    }

    async function getTotalProjects(){
        try{
            const response = await axios.get(totalProjectEndpoint,{
                headers : {
                    Authorization : token
                }
            })

            if(response.status === 200){
                setProjectNumber(response.data)
            }else{
                setProjectNumber(0)
            }
        }catch(error){
            console.log(error)
            setProjectNumber(0)
        }
    }

    useEffect(()=>{
        const userName = sessionStorage.getItem("firstName")
        setUserName(userName)
    },[userName])

    useEffect(()=>{
        fetchOngoingGigs()
        getTotalProjects()
    }, [])
  return (
    <>
        {   !myJobs
        &&
        <>
        { 
        !inCallSystem 
            &&
        <>
        <Navbar2 
            profile={profileView} 
            setVisibleSection={setVisibleSection} 
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}    
        />
        {isVisibleSection === "helpdispute" &&  
        <div id="popup-back">
            <div id="disp-form">
            <div id="disp-ttle">
                <p>New Dispute</p>
                <p id="canc-disp">x</p>
            </div>
            <form action="">
                <div class="flexed-inp-cov">
                    <div class="flexed-inp">
                        <label for="">Contract</label><br />
                        <select name="" id="" class="disp-slct">
                            <option value="" selected>Please select</option>
                        </select>
                    </div>
                    <div class="flexed-inp">
                        <label for="">Freelance</label><br />
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div class="flexed-inp">
                    <label for="">Total hours</label><br />
                    <div class="inp-hrs">
                        <input type="text" name="" id="" />
                        <div>Hrs</div>
                    </div>
                </div>
                <div class="flexed-inp-cov">
                    <div class="flexed-inp">
                        <label for="">Disputed hours</label><br />
                        <div class="inp-hrs">
                            <input type="text" name="" id="" />
                            <div>Hrs</div>
                        </div>
                    </div>
                    <div class="flexed-inp">
                        <label for="">Amount</label><br />
                        <div class="inp-hrs">
                            <input type="text" name="" id="" />
                            <div>$</div>
                        </div>
                    </div>
                </div>
                <div class="full-inp">
                    <label for="">Reason for dispute</label><br /> 
                    <select name="" id="" class="disp-slct">
                        <option value="" selected>Please select</option>
                    </select>
                </div>
                <div class="full-inp">
                    <label for="">Comment</label><br />
                    <textarea name="" id="" cols="30" rows="4" placeholder="Enter message..."></textarea>
                </div>
                <input type="submit" name="" id="form-create" value="Create dispute" />
            </form>
            </div>
        </div>}
        </>
        }
        </>
    }
        { !myJobs
            &&
        <>
        {
        !inCallSystem
        &&
        <div className='menu-cover2'>
            <Sidebar 
                setMyjobs={setMyjobs} 
                profile={profileView} 
                section={defaultSection} 
                setVisibleSection={setVisibleSection} 
                isVisibleSection={isVisibleSection} 
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}    
            />
            { isVisibleSection === "dashboard2"
            ?
                <div id="main">
        <div id="top-div">
            <div id="title">
                <p>Saturday 2nd, June 2023 </p>
                <h3>Welcome Back, {userName}</h3>
            </div>
            <div id="av-switch">
                <h3>Availability</h3>
                <div id="switch">
                    <label className="switch">
                    <input type="checkbox" />
                        <span onClick={toggleClientAvailability} className="slider"></span>
                    </label>
                </div>
            </div>
        </div>
        <div className="info-data">
            <div className="info-data-card">
                <img className='info-data-icon' src={icon} alt="" />
                <p>Total Projects</p>
                <h2>{projectNumber}</h2>
            </div>
            {/* <div className="info-data-card">
                <img className='info-data-icon' src={icon1} alt="" />
                <p>Total Projects</p>
                <h2>135</h2>
            </div>
            <div className="info-data-card">
                <img className='info-data-icon' src={icon1} alt="" />
                <p>Total Projects</p>
                <h2>135k</h2>
            </div> */}
            <div onClick={()=>navigate("/creategig")} className="info-data-card new-gi">
                <a href="javascript:void(0)">+</a>
                <p>Add a new gig</p>
            </div>
        </div>
        <div id="payment">
            <div id="pay-head">
                <h3>Payments</h3>
                <div className="pay-menu">
                    <p className="chart-days">Last 7 days &nbsp;<i className="fas fa-chevron-down"></i></p>
                    <div className="menu-link">
                        <a href="">This month</a>
                        <a href="">This year</a>
                        <a href="">Older</a>
                    </div>
                </div>
            </div>
            <div id='label-head-whole'>
                <div className='ch-total'>
                    <p>TOTAL AMOUNT SPENT</p>
                    <h4>NGN 50,000</h4>
                </div>
                <div className='ch-label-whole'>
                    <div className='ch-label'><img src={dot} alt=""/> <p><span>101</span> Paid</p></div>
                    <div className='ch-label'><img src={dot1} alt=""/> <p><span>50</span> Pending</p></div>
                </div>
            </div>
            <div className="client-chart">
                <BarChart chartData={chartData} />
            </div>
        </div>
        <div id="fourth">
            <h3>Ongoing Gigs</h3>
            <div id="gigs">
                {
                    onGoingGigs.map((gig,index)=>{
                        return (
                            <OngoingGigs key={index} {...gig} />
                        )
                    })
                }
                {/* <div className="gigs-card">
                    <div className="gig-title">
                        <p>Mobile Application Design</p>
                        <i className="fas fa-ellipsis-v"></i>
                    </div>
                    <p className="gig-description">This application is created to make users life easier</p>
                    <div className="gig-prize">
                        <p>Prize</p>
                        <span>$50/hr</span>
                    </div>
                    <div className="gig-dvry-time">
                        <p>Delivery Time</p>
                        <span>4 days late</span>
                    </div>
                    <div className="gig-bttm-div">
                        <div className="gig-progress">in progress</div>
                        <div className="gig-client-prof">
                            <div className="gig-client one"><img src={rect2} alt="" /></div>
                            <div className="gig-client two"><img src={rect} alt="" /></div>
                            <div className="gig-client three"><img src={rect1} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="gigs-card">
                    <div className="gig-title">
                        <p>Mobile Application Design</p>
                        <i className="fas fa-ellipsis-v"></i>
                    </div>
                    <p className="gig-description">This application is created to make users life easier</p>
                    <div className="gig-prize">
                        <p>Prize</p>
                        <span>$50/hr</span>
                    </div>
                    <div className="gig-dvry-time">
                        <p>Delivery Time</p>
                        <span>4 days late</span>
                    </div>
                    <div className="gig-bttm-div">
                        <div className="gig-progress">in progress</div>
                        <div className="gig-client-prof">
                            <div className="gig-client one"><img src={rect2} alt="" /></div>
                            <div className="gig-client two"><img src={rect} alt="" /></div>
                            <div className="gig-client three"><img src={rect1} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="gigs-card">
                    <div className="gig-title">
                        <p>Mobile Application Design</p>
                        <i className="fas fa-ellipsis-v"></i>
                    </div>
                    <p className="gig-description">This application is created to make users life easier</p>
                    <div className="gig-prize">
                        <p>Prize</p>
                        <span>$50/hr</span>
                    </div>
                    <div className="gig-dvry-time">
                        <p>Delivery Time</p>
                        <span>4 days late</span>
                    </div>
                    <div className="gig-bttm-div">
                        <div className="gig-progress">in progress</div>
                        <div className="gig-client-prof">
                            <div className="gig-client one"><img src={rect2} alt="" /></div>
                            <div className="gig-client two"><img src={rect} alt="" /></div>
                            <div className="gig-client three"><img src={rect1} alt="" /></div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        <div id="fifth">
            <div id="rec-act">
                <h3>Recent Activities</h3>
                <div id="actv-container">
                    <div className="indv-actv">
                        <p>You received a new quote</p>
                        <a href="" className="actv-view">view</a>
                    </div>
                    <div className="indv-actv">
                        <p><a href="" className="nme">Anita</a> left a comment on project A</p>
                        <a href="" className="actv-view">view</a>
                    </div>
                    <div className="indv-actv">
                        <p>You received a new quote</p>
                        <a href="" className="actv-view">view</a>
                    </div>
                    <div className="indv-actv">
                        <p><a href="" className="nme">Anita</a> left a comment on project A</p>
                        <a href="" className="actv-view">view</a>
                    </div>
                    <div className="indv-actv">
                        <p>Invoice received from <a href="" className="nme">Jane</a></p>
                        <a href="" className="actv-view">view</a>
                    </div>
                </div>
            </div>
            <div id="cl-messages">
                <div id="msg-top">
                    <h3>Inbox</h3>
                    <a href="">View All</a>
                </div>
                <div id="messages-card">
                    <div className="individual-msg">
                        <div className="flex-lft">
                            <div className="msg-prf-pic">
                                <img src={ellipse32} alt="" />
                                <div className="msg-online-tag"></div>
                            </div>
                            <div>
                                <p>Alexander willians</p>
                                <span>Review the design on page...</span>
                            </div>
                        </div>
                        <div className="flex-rgt">
                            <span>Today</span>
                            <i className="fas fa-star checked"></i>
                        </div>
                    </div>
                    <div className="individual-msg">
                        <div className="flex-lft">
                            <div className="msg-prf-pic">
                                <img src={ellipse32} alt="" />
                                <div className="msg-online-tag"></div>
                            </div>
                            <div>
                                <p>Alexander willians</p>
                                <span>Review the design on page...</span>
                            </div>
                        </div>
                        <div className="flex-rgt">
                            <span>Today</span>
                            <i className="fas fa-star checked"></i>
                        </div>
                    </div>
                    <div className="individual-msg">
                        <div className="flex-lft">
                            <div className="msg-prf-pic">
                                <img src={ellipse32} alt="" />
                                <div className="msg-online-tag"></div>
                            </div>
                            <div>
                                <p>Alexander willians</p>
                                <span>Review the design on page...</span>
                            </div>
                        </div>
                        <div className="flex-rgt">
                            <span>Today</span>
                            <i className="fas fa-star checked"></i>
                        </div>
                    </div>
                    <div className="individual-msg">
                        <div className="flex-lft">
                            <div className="msg-prf-pic">
                                <img src={ellipse32} alt="" />
                                <div className="msg-online-tag"></div>
                            </div>
                            <div>
                                <p>Alexander willians</p>
                                <span>Review the design on page...</span>
                            </div>
                        </div>
                        <div className="flex-rgt">
                            <span>Today</span>
                            <i className="fas fa-star checked"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                </div>
            : isVisibleSection === "leaderboard"
            ? <Leaderboard />
            : isVisibleSection === "helpdispute"
            ? <HelpDispute />
            : isVisibleSection === "message"
            ? <Message setInCallSystem={setInCallSystem} />
            : isVisibleSection === "billings" 
            ? <Billings />
            : isVisibleSection === "feedback"
            ?<ClientFeedback />
            : isVisibleSection === "profile2" 
            ?<ClientProfileView />
            : isVisibleSection === "account"
            ? <ClientSettingsAcc />
            : isVisibleSection === "bids"
            ? <ClientBids />
            : isVisibleSection === "prof"
            ? <ClientProfileView setVisibleSection={setVisibleSection} />
            : isVisibleSection === "security"
            ? <ClientSettingSecurity />
            :null 
        }
        </div>
        }
        </>
        }
        {
            inCallSystem
            &&
            <InCallSystem  setInCallSystem={setInCallSystem} />
        }
        {
            myJobs
            &&
            <Myjobs  setMyjobs={setMyjobs} isVisibleSection={isVisibleSection} setVisibleSection={setVisibleSection} />
        }
    </>
  )
}
