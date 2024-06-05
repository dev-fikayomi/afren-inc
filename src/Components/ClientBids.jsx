import React,{useEffect,useState} from 'react'
import rect from "../assets/afren-images2/Rectangle 34624273.png"
import butt0 from "../assets/afren-images/Button no states.png"
import butt1 from "../assets/afren-images/Button no states-1.png"
import butt2 from "../assets/afren-images/Button no states-2.png"
import axios from "axios"
import "../../src/style.css"


const applictionEndPoint = "https://afren-main-server.onrender.com/api/getApplications"
const appGetDetailsEndPoint = "https://afren-main-server.onrender.com/api/getApplication"
const AcceptApplicationEndPoint = "https://afren-main-server.onrender.com/api/acceptApplication"
const RejectApplicationEndpoint = "https://afren-main-server.onrender.com/api/rejectApplication"

const token = sessionStorage.getItem("token")

export default function ClientBids() {
    const [isPopupShowing,setIsPopupShowing] = useState(false)
    const [Applications, setAppliction] = useState([]);
    const [AppDetails,setAppdetails] = useState({});

    async function getApplications(){
        try{
            const response = await axios.get(applictionEndPoint,{
                headers : {
                    Authorization : token
                }
            })
            if(response.status === 200){
                setAppliction(response.data)
            }else{
                setAppliction([])
            }
        }catch(error){
            console.log(error)
        }
    }

    async function acceptApplication(gigId,coverLetter,attachments){
        try{
            const response = await axios.post(AcceptApplicationEndPoint,{
                gigId: gigId,
                coverLetter: coverLetter,
                attachments: attachments
            },{
                headers : {
                    Authorization : token
                }
            })
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }
    
    async function rejectApplication(gigId,coverLetter,attachments){
        try{
            const response = await axios.post(RejectApplicationEndpoint,{
                gigId: gigId,
                coverLetter: coverLetter,
                attachments: attachments
            },{
                headers : {
                    Authorization : token
                }
            })
            console.log(response)
        }catch(error){
            console.log(error)
        }
    } 
    async function getAppDetails(id){
        try{
            const response = await axios.post(
                appGetDetailsEndPoint,
                {
                applicationId : id
            },
            {
                headers : {
                    Authorization : token
                }
            }
            )
            if(response.status === 200){
                setAppdetails(response.data)
                setIsPopupShowing(true)
            }else{
                setAppdetails([])
                setIsPopupShowing(false)
            }
        }catch(error){
            console.log(error)
            setIsPopupShowing(false)
        }
    }
    useEffect(()=>{
        getApplications()
    },[])

    useEffect(()=>{
        window.addEventListener("click",()=>{
            setIsPopupShowing(false)
        })
        return ()=>{
            window.removeEventListener("click",()=>{
                setIsPopupShowing(false)
            })
        }
    },[])
  return (
    <>
        {
            isPopupShowing
        &&
        <div id="popup-form">
            <div id="application-form">
                <div id="appl-head">
                    <h4>View Application</h4>
                    <p onClick={()=> setIsPopupShowing(false)}>x</p>
                </div>
                <p className="appl-quest">Cover</p>
                <div className="appl-answer">{AppDetails.coverLetter}</div>
                <p className="appl-quest">What do you recommend to apply our theme and</p>
                <div className="appl-answer">{AppDetails.attachments}</div>
                {/* <p className="appl-quest">How would make the app follows our brand</p> */}
                {/* <div className="appl-answer">Lorem ipsum dolor sit amet consectetur. Nibh eu quisque turpis gravida. Erat aenean risus maecenas enim imperdiet diam sed habitasse aenean. Mi nulla non pharetra tempor dolor. Urna sit maecenas convallis orci suspendisse mi in dignissim.</div> */}
                <h4 id="p-pref">Payment Preference</h4>
                <div className="preference-opt">
                    <input type="radio" name="pref-opt"/>
                    <div className="opt-desc">
                        <h4>By milestone</h4>
                        <p>Divide the project into smaller segments, called milestones. You'll be paid for milestones as they are completed and approved.</p>
                    </div>
                </div>
                <div className="preference-opt">
                    <input type="radio" name="pref-opt"/>
                    <div className="opt-desc">
                        <h4>By project</h4>
                        <p>Get your entire payment at the end, when all work has been delivered.</p>
                    </div>
                </div>
                <div id="appl-butt">
                    <button id="decline">Decline application</button>
                    <button id="accept">Accept application</button>
                </div>
            </div>
        </div>
        }
        <div id="bids-main">
            <div id="pg-title">
                <h3>My Bids</h3>
            </div>
            <div id="whole-bids-cov">
                <div id="bids-pgs">
                    {/* <a href="javascript:void(0)" className="bid-pg">Active Bids</a>
                    <a href="javascript:void(0)" className="bid-pg">Won Auction</a>
                    <a href="javascript:void(0)" className="bid-pg">Bids History</a> */}
                    <a href="javascript:void(0)" className="bid-pg active">All</a>
                </div>
                <div className="bidstable-body">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="demacation">
                        <div className="dm-line"></div>
                        <p>Today</p>
                    </div>
                    <div id="today-bids">
                        <p>No bids during this time</p>
                        <p className="srch-jbs"><a href="">Search jobs</a> for you and place a bid</p>
                    </div>
                    <div className="demacation">
                        <div className="dm-line"></div>
                        <p style={{whiteSpace: "nowrap"}}>
                            Last Week
                        </p>
                    </div>
                    <div className="tab-bod">
                        <table>
                            <tbody>
                                {
                                    Applications.map((application,index)=>{
                                        const {_id,gigId,coverLetter,attachments} = application
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <div className="client-prf">
                                                        <div className="client-pic">
                                                            <img src={rect} alt=""/></div>
                                                        <div>
                                                            <p>Alexander willians</p>
                                                            <span>Updated 10m ago</span>
                                                        </div>
                                                    </div>
                                                </td>
                                    <td className='v-appl'>
                                        <a 
                                            href="javascript:void(0)"
                                            onClick={()=>{getAppDetails(_id)}}    
                                        >View Application</a>
                                    </td>
                                    <td className="amount">$20</td>
                                    <td className='table-butt'>
                                        <a href="javascript:void(0)"><img src={butt0} alt="" /></a>
                                        <a 
                                            href="javascript:void(0)"
                                            onClick={()=>{acceptApplication(gigId,coverLetter,attachments)}}
                                            >
                                            <img src={butt1} alt="" />
                                        </a>
                                        <a 
                                            href="javascript:void(0)"
                                            onClick={()=>{rejectApplication(gigId,coverLetter,attachments)}}
                                        >
                                            <img src={butt2} alt="" />
                                        </a>
                                    </td>
                                </tr>
                                        )                                        
                                    })
                                }
                                {/* <tr>
                                    <td>
                                        <div className="client-prf">
                                            <div className="client-pic">
                                                <img src={rect} alt=""/></div>
                                            <div>
                                                <p>Alexander willians</p>
                                                <span>Updated 10m ago</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='v-appl'><a href="">View Application</a></td>
                                    <td className="amount">$20</td>
                                    <td className='table-butt'>
                                        <a href=""><img src={butt0} alt="" /></a>
                                        <a href=""><img src={butt1} alt="" /></a>
                                        <a href=""><img src={butt2} alt="" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="client-prf">
                                            <div className="client-pic">
                                                <img src={rect} alt=""/>
                                            </div>
                                            <div>
                                                <p>Alexander willians</p>
                                                <span>Updated 10m ago</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='v-appl'><a href="">View Application</a></td>
                                    <td className="amount">$20</td>
                                    <td className='table-butt'>
                                        <a href=""><img src={butt0} alt="" /></a>
                                        <a href=""><img src={butt1} alt="" /></a>
                                        <a href=""><img src={butt2} alt="" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="client-prf">
                                            <div className="client-pic">
                                                <img src={rect} alt=""/></div>
                                            <div>
                                                <p>Alexander willians</p>
                                                <span>Updated 10m ago</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='v-appl'><a href="">View Application</a></td>
                                    <td className="amount">$20</td>
                                    <td className='table-butt'>
                                        <a href=""><img src={butt0} alt="" /></a>
                                        <a href=""><img src={butt1} alt="" /></a>
                                        <a href=""><img src={butt2} alt="" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="client-prf">
                                            <div className="client-pic">
                                                <img src={rect} alt=""/>
                                            </div>
                                            <div>
                                                <p>Alexander willians</p>
                                                <span>Updated 10m ago</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='v-appl'><a href="">View Application</a></td>
                                    <td className="amount">$20</td>
                                    <td className='table-butt'>
                                        <a href=""><img src={butt0} alt="" /></a>
                                        <a href=""><img src={butt1} alt="" /></a>
                                        <a href=""><img src={butt2} alt="" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="client-prf">
                                            <div className="client-pic">
                                                <img src={rect} alt=""/>
                                            </div>
                                            <div>
                                                <p>Alexander willians</p>
                                                <span>Updated 10m ago</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='v-appl'><a href="">View Application</a></td>
                                    <td className="amount">$20</td>
                                    <td className='table-butt'>
                                        <a href=""><img src={butt0} alt="" /></a>
                                        <a href=""><img src={butt1} alt="" /></a>
                                        <a href=""><img src={butt2} alt="" /></a>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="pgination">
                    <p>Showing 1 - 5 of 24</p>
                    <div id="pg-arrows">
                        <a href="javascript:void(0)">&lt;</a>
                        <a href="javascript:void(0)">&gt;</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
