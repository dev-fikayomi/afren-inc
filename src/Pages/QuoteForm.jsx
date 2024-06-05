import React, { useEffect, useState } from 'react'
import { useParams,NavLink } from 'react-router-dom'
import axios from "axios"
import '../../src/style.css'
import vector2 from "../assets/afren-images/Vector-2.png"
import briefcase from "../assets/afren-images/heroicons_briefcase-solid.png"
import wallet from "../assets/afren-images/mingcute_wallet-fill.png"
import alex from "../assets/afren-images/alexander-williams.png"
import vector from "../assets/afren-images/Vector.png"
import vector1 from "../assets/afren-images/Vector-1.png"
import { Oval } from  'react-loader-spinner'
import toast, { Toaster } from 'react-hot-toast';




// const token = sessionStorage.getItem("token")
const gigEndPoint = "https://afren-main-server.onrender.com/api/getGig"
const ApplicationEndpoint = "https://afren-main-server.onrender.com/api/createApplication"
const gigWithClientDetailsEndpoint = "https://afren-main-server.onrender.com/api/getGigWithClientDetails"


export default function QuoteForm() {
    const [token,setToken] = useState(sessionStorage.getItem("token"))
    const [clientDetails,setClientDetails] = useState({})
    const [gig,setGig] = useState({})
    const [loading,setLoading] = useState(false)
    const params = useParams()
    const [ApplicationObj,setApplicationObj] = useState({
        coverLetter : "",
        attachments : ""
    })

    const {coverLetter,attachments} = ApplicationObj

    function handleChange(e){
        const {name,value} = e.target
        setApplicationObj({
            ...ApplicationObj,
            [name] : value
        })
    }
    function getTimeUpdated(created, updated){
        const timeCreatedInSeconds =  Math.floor(new Date(created).getTime()/1000)
        const timeUpdatedInSeconds = Math.floor(new Date(updated).getTime()/1000)
        const lastUpdated = timeUpdatedInSeconds - timeCreatedInSeconds
        console.log(lastUpdated)
        // if()
    }
    async function postApplication(){
        setLoading(true)
        try{
            const response = await axios.post(ApplicationEndpoint,{
                gigId : params.id,
                ...ApplicationObj
            },
            {
            headers : {
                Authorization : token
            }
            }
            )
            
            if(response.status === 201){
                setLoading(false)
                toast.success("Successfully applied!!")
                setApplicationObj({
                    coverLetter : "",
                    attachments : ""
                })
            }
            else{
                setLoading(false)
                toast.error("An error occurred")
            }
        }catch(error){
            console.log(error)
            setLoading(false)
            toast.error("An error occurred")
        }
    }

    async function getGigs(){
        const response = await axios.post(gigEndPoint,{
            gigId : params.id  
        },{
            headers: {
                Authorization : token
            }
        }
        )
        if(response.status === 200){
            setGig({
                ...response.data
            })
            getTimeUpdated(response.data.createdAt, response.data.updatedAt)
        }
    }

    async function getGigWithClientDetails(){
        try{
            const response =  await axios.post(
                gigWithClientDetailsEndpoint,{
                    gigId : params.id
                },
                {
                    headers : {
                        Authorization : token
                    }
                }
            )
            if(response.status == 200){
                setClientDetails(response.data.clientDetails)
            }
            else{
                setClientDetails({})
            }
            // else{
            //     // console.log(response.data, response.status)
            //     setClientDetails({})
            // }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getGigs()
        getGigWithClientDetails()
    },[])
    // console.log(typeof gig.createdAt)
    // console.log(gig.skills)
  return (
    <div id="quote-body">
     <Toaster />
    <NavLink to="/jobs" id="back-butt">&lt; &nbsp;Back</NavLink>
    <div id="whole-quote">
        <div id="left-quote">
            <div id="about-proj">
                <h3>About the project</h3>
                <h2 id="job">{gig?.jobCategory}</h2>
                <div id="job-info">
                    <div id="info-all">
                        <p>
                            <img src={vector2} alt=""/>
                            Remote
                        </p>
                        <p>
                            <img src={briefcase} alt=""/>
                            Contract
                        </p>
                        <p>
                            <img src={wallet} alt=""/>
                            $250/hour
                        </p>
                    </div>
                    <div id="pay-rate">
                        <p>USD</p>
                        <div id="amount">
                            <h2>250</h2>
                            <p>per hour</p>
                        </div>
                    </div>
                </div>
                <p id="upd-txt">Updated 10 minutes ago</p>
                <hr/>
                <h3>Job Description</h3>
                <p>{gig?.description}</p>
                <h3>Skills</h3>
                <div id="skils">
                    {
                        gig.skills
                        ?
                        gig?.skills.map((skill,index)=>{
                            return (
                                <div key={index} 
                                    className="idvdual-skill">
                                    {skill}
                                </div>
                                )
                            })
                        : null
                    }
                    {/* <div className="idvdual-skill">UI/UX Prototyping</div>
                    <div className="idvdual-skill">Prototyping</div>
                    <div className="idvdual-skill">Interaction design</div>
                    <div className="idvdual-skill">UI/UX Wireframing</div>
                    <div className="idvdual-skill">Figma</div>
                    <div className="idvdual-skill">Motion graphics</div>
                    <div className="idvdual-skill">Figma</div>
                    <div className="idvdual-skill">UI/UX Wireframing</div>
                    <div className="idvdual-skill">UI/UX Wireframing</div> */}
                </div>
                <a href="">see more on the job post</a>
            </div>
            <div id="prj-appli">
                <h3>Application</h3>
                <hr/>
                <label for="">Cover Letter</label>
                <textarea 
                    name="coverLetter" 
                    id="" 
                    cols="30" 
                    rows="10"
                    value={coverLetter}
                    onChange={handleChange}
                >    
                </textarea>

                <label for="">What do you recommevd to apply our theme and identity?</label>
                <textarea 
                    name="attachments"
                    value={attachments}
                    onChange={handleChange} 
                    id="" 
                    cols="30" 
                    rows="10"
                ></textarea>

                <label for="">How would make the app follow our brand and theme?</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
        <div id="right-quote">
            <h3>About the client</h3>
            <div id="client-pers-info">
                <img src={alex} alt=""/>
                <h3>{`${clientDetails.firstName} ${clientDetails.lastName}`}</h3>
                <p id="client-company">{clientDetails.companyName}</p>
                <p id="client-state">{clientDetails.country}</p>
            </div>
            <div id="paymet-rating">
                <p>
                    <img src={vector} alt=""/>
                    Payment Verified
                </p>
                <p id="spent">
                    <img src={vector1} alt=""/>
                    1,250 Spent
                </p>
                <div id="star"><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i></div>
            </div>
            <div id="jobs-info">
                <p>4 jobs posted</p>
                <p id="hires">3 hires</p>
            </div>
            <p id="member">Member since january 4, 2023</p>
            <hr/>
            <h3>Terms</h3>
            <h4 id="pay-pref">Payment Preferense</h4>
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
            <h4 id="inp-mil">Input Milestone</h4>
            <label for="">Description</label>
            <textarea name="" id="description" cols="30" rows="10"></textarea>
            <div id="date-amount">
                <div>
                    <label for="">Due date</label><br/>
                    <input type="date" name="" id=""/>
                </div>                    
                <div>
                    <label for="">Amount</label><br/>
                    <input type="text" name="" id=""/>
                </div>
            </div>
            <a href="" id="new-mils">+ New Milestone</a>
            <label for="">Duration of the Project</label><br/>
            <select name="" id="proj-dure">
                <option value="" disabled selected>Select a duration</option>
                <option value="">1 week</option>
                <option value="">1 month</option>
            </select>

            <p>Attachment</p>
            <label for="" id="file-att">
                Drop or <span>upload</span> project files
                <input type="file" name="" id=""/>
            </label>
            <p>File size under 25 MB each. Include work samples or other documents to support your application. Your Afren profile will be forwarded to the client with your proposal.</p>
        </div>
    </div>
    <div id="quote-butt">
        <button 
            id="apply-butt"
            onClick={postApplication}
            style={{display: "flex", justifyContent: "center", alignItems: "center"}}
        >
            { 
                !loading 
                ? "Apply" 
                :   (
                    <Oval
                        height={25}
                        width={25}
                        color="#fff"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#015B7E"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    /> 
                ) 
                
            }
        </button> 
        <button id="canc-butt">Cancel</button>
    </div>
</div>
  )
}
