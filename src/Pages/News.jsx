import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/News.css'
import Rect1 from '../assets/afren-images/Rectangle 34624264.png'
import Rect2 from '../assets/afren-images/Rectangle 34624265.png'
import Rect3 from '../assets/afren-images/Rectangle 34624270.png'
import Rect4 from '../assets/afren-images/Rectangle 518.png'
import Rect5 from  '../assets/afren-images/Rectangle 519.png'
import Rect6 from '../assets/afren-images/Rectangle 520.png'
import JoinUs from '../Components/JoinUs'
import Footer from '../Components/Footer'
import axios from "axios"


const getNewsEndpoint = "https://afren-main-server.onrender.com//api/getNews"
const postNewsEndpoint = "https://afren-waitlist.onrender.com/api/news"


export default function News() {

    async function getNews(){
        try{
            const response = await axios.get(getNewsEndpoint)
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getNews()
    },[])
  return (
    <>
        <Navbar />
        <div id="first-whole"></div>
        <div id="sec-whole">
        <div id="sec-text-div">
            <h3>WHY CHOOSE US</h3>
            <h1>We Find Your Next Gig With Our Freelance Job Platform</h1>
            <p>We will make sure you never get fooled by client who
                looks for your amazing skill and we ensure you get 
                fully paid after job completion.</p>
        </div>
        <div id="sec-img-div">
            <img src={Rect1} id="sec-img-one" alt=""/>
            <img src={Rect2} id="sec-img-two" alt=""/>
        </div>
        </div>
        <div id="third-whole">
            <div id="third-inner">
                <img src={Rect3} id="third-div-img" alt=""/>
                <div id="third-text-div">
                    <h4>Latest News</h4>
                    <h4><u>Get More Client to Notice You</u></h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Ut risus quis eget ut massa. Semper auctor etiam adipiscing metus tincidunt blandit lectus et venenatis. Lorem ipsum dolor sit amet consectetur. Ut risus quis eget ut massa. Semper auctor etiam adipiscing metus tincidunt blandit lectus et venenatis.</p>
                    <a href="">Read More</a>
                </div>
            </div>
        </div>
        <div id="fourth-whole">
            <div id="cards-wrap">
                <div class="indiv-card">
                    <div class="card-img-cover"><img src={Rect4} class="card-img" alt=""/></div>
                    <div class="card-bottom">
                        <h3>Top 10 Ways to Land Your Dream Client</h3>
                        <div class="hr-line-div"><hr class="hr-line"/></div>
                        <div class="comment-div">
                            <input type="text" class="comment-input" placeholder="Write a comment"/>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="indiv-card">
                    <div class="card-img-cover"><img src={Rect5} class="card-img" alt=""/></div>
                    <div class="card-bottom">
                        <h3>Top 10 Ways to Land Your Dream Client</h3>
                        <div class="hr-line-div"><hr class="hr-line"/></div>
                        <div class="comment-div">
                            <input type="text" class="comment-input" placeholder="Write a comment"/>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="indiv-card">
                    <div class="card-img-cover"><img src={Rect6} class="card-img" alt=""/></div>
                    <div class="card-bottom">
                        <h3>Top 10 Ways to Land Your Dream Client</h3>
                        <div class="hr-line-div"><hr class="hr-line"/></div>
                        <div class="comment-div">
                            <input type="text" class="comment-input" placeholder="Write a comment"/>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="top-items">
            <div class="items">
                <h5>Our Mission</h5>
                <small>Our Goal, Vision & Commitment</small>
            </div>
            <div class="items" id="active-item">
                <h5>Our Events</h5>
                <small>Register and Help Make Change</small>
            </div>
            <div class="items">
                <h5>Get Involved</h5>
                <small>Volunteer, Participate & show skill</small>
            </div>
        </div>        
        <JoinUs/>
        <Footer />
    </>
  )
}
