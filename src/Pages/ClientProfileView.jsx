import React, { useEffect, useState } from 'react'
// import "../Styles/client-profile-fv.css"
import "../style.css"
import greaterThan from "../assets/afren-images2/greater-than-symbol.png"
import brianaSquare from "../assets/afren-images2/Briana_Square_Web.jpg.png"
import location from "../assets/afren-images2/location.png"
import verified from "../assets/afren-images2/verified.png"
import dollar from "../assets/afren-images2/dollar.png"
import bluestar from "../assets/afren-images2/blue-star.png"
import twitterLogo from "../assets/afren-images2/twitter-logo.png"
import facebookLogo from "../assets/afren-images2/facebook-logo.png"
import fleg from "../assets/afren-images2/fleg.png"
import johnDoe from "../assets/afren-images2/john-doe.png"
import blueStarHalf from "../assets/afren-images2/blue-star-half.png"
import janedoe from "../assets/afren-images2/jane-doee.png"
import axios from 'axios'


const endpoint = "https://afren-server-kjt8.onrender.com/api/getClient"

export default function ClientProfileView({setVisibleSection}) {
    const [token,setToken] = useState(sessionStorage.getItem("token"))
    const [client,setClient] = useState({})
    
    function goBack() {
        setVisibleSection("dashboard2")
      }

    async function getClient(){
        try{
            const response = await axios.get(endpoint,{
                headers: {
                    Authorization : token
                }
            })
            if(response.status == 200){
                console.log(response.data)
                setClient(response.data)
            }
            else{
                setClient({})
            }   
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getClient()
    },[])
  return (
    <div className="major-container2">
                    <div className="profile-view-section">
                        <figure className="back-button">
                            <img
                                style={{cursor: "pointer"}}
                                onClick={goBack} 
                                src={greaterThan} 
                                alt=""
                            />
                        </figure>
                        <div className="profile-view-space">
                            <div className="presence-indicator">
                                <span className="presence-circle"></span>
                                <p className="presence-text">Online</p>
                            </div>
                            <figure className="display-picture">
                                <img src={brianaSquare} alt=""/>
                            </figure>
                            <h3 className="profile-name">
                                {`${client?.firstName} ${client?.lastName}`}
                            </h3>
                            <p className="profile-job">
                                {client?.occupation}
                            </p>
                            <div className="profile-location">
                                <img src={location} alt=""/>
                                <p className="location-text">
                                    {client?.country}
                                </p>
                            </div>
                            <section className="profile-description2">
                                <div className="verified">
                                    <img src={verified} alt=""/>
                                    <small>payment verified</small>
                                </div>
                                <div className="amount">
                                    <img src={dollar} alt=""/>
                                    <small>1,250 Spent</small>
                                </div>
                                <div className="ratings">
                                    <img src={bluestar} alt=""/>
                                    <img src={bluestar} alt=""/>
                                    <img src={bluestar} alt=""/>
                                    <img src={bluestar} alt=""/>
                                    <img src={bluestar} alt=""/>
                                </div>
                                <p className="no-jobs">
                                    4 jobs posted
                                </p>
                                <p className="hires">
                                    3 hires
                                </p>
                            </section>
                            <p className="join-date">
                                Member since January 4, 2023
                            </p>
                            <p className="socials-subheading">
                                Socials
                            </p>
                            <section className="social-handles">
                                <a href="javascript:void(0)">
                                    <img src={twitterLogo} alt=""/>
                                    <p>LINKEDIN</p>
                                </a>
                                <a href="javascript:void(0)">
                                    <img src={twitterLogo} alt=""/>
                                    <p>TWITTER</p>
                                </a>
                                <a href="javascript:void(0)">
                                    <img src={facebookLogo} alt=""/>
                                    <p>FACEBOOK</p>
                                </a>
                            </section>
                        </div>
                    </div>
                    <div className="container">
                        <section className="basic-info-space">
                            <div className="bis-subheading">
                                <p className="biss-text">
                                    Basic Info
                                </p>
                                <a href="javascript:void(0)" className="bis-link">
                                    <img src={fleg} alt=""/>
                                    <p>Report this account</p>
                                </a>
                            </div>
                            <div className="informations">
                                <span className="info">
                                    <p className="info-subject">Company Name:</p>
                                    <small>{client?.companyName}</small>
                                </span>
                                <span className="info">
                                    <p className="info-subject">Phone:</p>
                                    <small>{client?.phoneNumber}</small>
                                </span>
                                <span className="info">
                                    <p className="info-subject">Email:</p>
                                    <a href="javascript:void(0)">{client.email}</a>
                                </span>
                                <span className="info">
                                    <p className="info-subject">Adress:</p>
                                    <small>{client?.residentialAddress}</small>
                                </span>
                                {/* <span className="info">
                                    <p className="info-subject">Language:</p>
                                    <small>Native/Bilingual</small>
                                </span>
                                <span className="info">
                                    <p className="info-subject">Company Site:</p>
                                    <a href="javascript:void(0)">FounderNg.com</a>
                                </span> */}
                            </div>
                        </section>
                        <section className="client-review-space">
                            <p className="crs-subheading">
                                Client Reviews
                            </p>
                            <div className="client-reviews">
                                <section className="cr-1">
                                    <div className="review-subheading">
                                        <a href="javascript:void(0)" className="cr-subject">
                                            I need an illustrator...
                                        </a>
                                        <div className="rs-description">
                                            <time>
                                                Jan 2023 - Feb 2023
                                            </time>
                                            <small>
                                                Fixed price $200
                                            </small>
                                        </div>
                                    </div>
                                    <div className="review-description">
                                        <img src={johnDoe} alt="" className="reviewer"/>
                                        <div className="rd-flex">
                                            <div className="rd-ratings">
                                                <img src={bluestar} alt=""/>
                                                <img src={bluestar} alt=""/>
                                                <img src={bluestar} alt=""/>
                                                <img src={bluestar} alt=""/>
                                                <img src={blueStarHalf} alt=""/>
                                            </div>
                                            <p className="review-text">
                                                Alex was very kind blah blah blah Alex was very kind blah blah blah. Alex was very kind blah blah blah Alex was very kind blah blah blah
                                            </p>
                                        </div>
                                    </div>
                                </section>
                                <section className="cr-2">
                                    <div className="review-subheading">
                                        <a href="javascript:void(0)" className="cr-subject">
                                            I need an illustrator...
                                        </a>
                                        <div className="rs-description">
                                            <time>
                                                Jan 2023 - Feb 2023
                                            </time>
                                            <small>
                                                Fixed price $200
                                            </small>
                                        </div>
                                    </div>
                                    <div className="review-description">
                                        <img src={janedoe} alt="" className="reviewer"/>
                                        <div className="rd-flex">
                                            <div className="rd-ratings">
                                                <img src={bluestar} alt=""/>
                                                <img src={bluestar} alt=""/>
                                                <img src={bluestar} alt=""/>
                                                <img src={bluestar} alt=""/>
                                                <img src={bluestar} alt=""/>
                                            </div>
                                            <p className="review-text">
                                                Alex was very kind blah blah blah Alex was very kind blah blah blah. Alex was very kind blah blah blah Alex was very kind blah blah blah
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
  )
}
