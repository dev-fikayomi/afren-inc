import React, { useState } from 'react'
import axios from "axios"
import Swal from "sweetalert2";
import { Oval } from  'react-loader-spinner'
import { useNavigate } from 'react-router-dom';

const token = sessionStorage.getItem("token")
const endpoint = "https://afren-main-server.onrender.com/api/createGig"

export default function Gig4({setCount,count,gigInfo, setGigInfo}) {
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [lowerBoundary,setLowerBoundary] = useState("")
    const [higherBoundary,setHigherBoundary] = useState("")
    const [fixedPrice, setFixedPrice] = useState("")
    const [projectBudget, setProjectBudjet] = useState("") 
    function handleSubmit(e){
        setLoading(true)
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        setGigInfo(async(prev)=>{

            const payload = {
                ...prev,
                budget : projectBudget === "fixed" ? fixedPrice : `$${lowerBoundary} - $${higherBoundary}`
            }
            try{
                await axios.post(endpoint,payload,{
                    headers :{
                        Authorization : token
                    }
                })
                setLoading(false)
                Swal.fire({
                    icon: 'success',
                    title: 'Gigs Added Successfully',
                    text: 'New Gigs added'
                    // footer: '<a href="">Why do I have this issue?</a>'
                  }).then(()=>{
                    navigate("/clientdash")
                  })
            }catch(error){
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'unable to add gig',
                    text: 'Something went wrong!',
                    // footer: '<a href="">Why do I have this issue?</a>'
                  })
            }
            finally{
                return {
                    ...prev,
                    budget : projectBudget === "fixed" ? fixedPrice : `$${lowerBoundary} - $${higherBoundary}`
                }  
            } 
        })

        
    }
  return (
    <>
       <h1>
            State out the budget
        </h1>
        <p className="step-description">
            This will help match freelancer within your set range
        </p>
        <form action="" onSubmit={handleSubmit} className='gig-form'>
            <div className="step-items">
                <div onClick={()=>{setShow(true);setProjectBudjet("fixed")}} className={projectBudget === "fixed" ? "step-item step-item1" : "step-item"}>
                    <div className="step-tick step-tick1">
                        <p className={projectBudget === "fixed"?"step-tick1-p active" : "step-tick1-p"}></p>
                    </div>
                    <p className="step-item-text">Project budget</p>
                </div>
                <div onClick={()=>{setShow(true);setProjectBudjet("hourly")}}  className={projectBudget === "hourly" ? "step-item step-item2" : "step-item"}>
                    <div className="step-tick step-tick2">
                        <p className={projectBudget === "hourly"?"step-tick1-p active" : "step-tick1-p"}></p>
                    </div>
                    <p className="step-item-text">Hourly rate</p>
                </div>
            </div>
            <div className="step-conversion">
                {
             
                    projectBudget === "hourly" && show
                ?
                <>
                <section>
                    <p>From</p>
                    <div className="step-rate">
                        <div>
                            <p>NGN</p>
                            <input 
                                type="tel" 
                                name='lowerBoundary'
                                value={lowerBoundary}
                                onChange={(e)=>{setLowerBoundary(e.target.value)}}
                                />
                        </div>
                        <p className="step-hour">/ hour</p>
                    </div>
                </section>
                <section>
                    <p>To</p>
                    <div className="step-rate">
                        <div>
                            <p>NGN</p>
                            <input 
                                type="tel" 
                                name='higherBoundary'
                                value={higherBoundary}
                                onChange={(e)=>{setHigherBoundary(e.target.value)}}
                                />
                        </div>
                        <p className="step-hour">/ hour</p>
                    </div>
                </section>
                </>
                :
                projectBudget === "fixed" && show
                ?
                <section>
                {/* <p>From</p> */}
                <div className="step-rate">
                    <div>
                        <p>NGN</p>
                        <input 
                            type="tel"
                            name='fixedPrice'
                            value={fixedPrice}
                            onChange={(e)=>setFixedPrice(e.target.value)}
                        />
                    </div>
                    <p className="step-hour">/ fixed</p>
                </div>
                </section>
                : <></>
                }

            </div>
            { show && <p className="step-conversion-description">
                This is the average rate for similar projects
            </p>}
            <button className="step-btn" >
                {
                    loading
                    ?
                    (
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
                    : "Publish Gig"
                }
            </button>
        </form>
    </>
  )
}
