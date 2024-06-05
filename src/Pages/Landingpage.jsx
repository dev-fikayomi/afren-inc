import React,{useState, useRef, useEffect} from 'react'
import Navbar from '../Components/Navbar'
// import '../Styles/Landingpage.css'
import "../style.css"
import medal from '../assets/afren-images/medal.png'
import star from '../assets/afren-images/rating-star.png'
import fujitsu_logo from '../assets/afren-images/fujitsu-logo.png'
import Pomeroy_Logo from '../assets/afren-images/Pomeroy-Logo.png'
import Service_Express_Logo from  '../assets/afren-images/Service-Express-Logo.png'
import Modis_Logo from '../assets/afren-images/Modis-Logo.png'
import Worldlink_Logo from'../assets/afren-images/Worldlink-Logo.png'
import search from '../assets/afren-images/search.png'
import box_workforce from '../assets/afren-images/box-workforce.png'
import workforce_badge from'../assets/afren-images/workforce-badge.png'
import Testimonials from '../Components/Testimonials'
import JoinUs from '../Components/JoinUs'
import Footer from '../Components/Footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cookies from 'js-cookie';


export default function Landingpage() {
    const [content, setContent] = useState("An award-winning freelance marketplace in the industry!")
    const contentRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        swipeToSlide: true,
        slidesToScroll: 3,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear"
      };
    const array = content.split("");
    let textInterval
    function frameLooper(){
        if (array.length > 0){
            contentRef.current.innerHTML += array.shift();
        }
        else{
            clearInterval(textInterval)
        }
         textInterval = setTimeout(()=>frameLooper(),70)
    }
    useEffect(()=>{
        frameLooper()
    },[content])

    // const sessionID = Cookies.get("connect.sid")
    // console.log(sessionID)
    // sessionStorage.setItem("sessionId", sessionID)
  return (
    <>
        <Navbar />
        <header className='landingpage'>
        <div className="award-description">
            <img src={medal} alt=""/>
            <p ref={contentRef} className="typr"></p>
        </div>
        <h1 className="header-description-text1">
            Unleash talent. Master any task.
        </h1>
        <h1 className="header-description-text2">
            Hire the <span>best freelancers.</span>
        </h1>
        <p className="header-description-text">
            Work with the best freelance talent from around the world on our secure,
            flexible and cost-effective platform.
        </p>
        <div className="search-space2">
            <div className="search-bar">
                <img src={search} alt=""/>
                <input type="text" placeholder="search" className='landingpg-input'/>
            </div>
            <select name="" id="">
                <option value="">Talent</option>
                <option value="">Talent</option>
                <option value="">Talent</option>
                <option value="">Talent</option>
            </select>
        </div>
        <div className="row">
            <div className="col-md-12">
                 <div className="center-item-slider">
                    {/* <Slider {...settings}>
                   <div className="holder slide1">
                        <div className="slide-content">
                            <h1 className="full-name">
                                Mark Twell
                            </h1>
                            <p className="skill-set">
                                Product Designer
                            </p>
                            <figure>
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                            </figure>
                        </div>
                   </div>
                   <div className="holder slide2">
                        <div className="slide-content">
                            <h1 className="full-name">
                                Nsame Kirk
                            </h1>
                            <p className="skill-set">
                                Visual Artist
                            </p>
                            <figure>
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                            </figure>
                        </div>
                   </div>
                   <div className="holder slide3">
                        <div className="slide-content">
                            <h1 className="full-name">
                                Mesuth Brende
                            </h1>
                            <p className="skill-set">
                                Web Developer
                            </p>
                            <figure>
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                            </figure>
                        </div>
                   </div>
                   <div className="holder slide4">
                        <div className="slide-content">
                            <h1 className="full-name">
                                Marilyn Curt
                            </h1>
                            <p className="skill-set">
                                Product Manager
                            </p>
                            <figure>
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                            </figure>
                        </div>
                   </div>
                   <div className="holder slide5">
                        <div className="slide-content">
                            <h1 className="full-name">
                                Fikayomi Peter
                            </h1>
                            <p className="skill-set">
                                Software Engineer
                            </p>
                            <figure>
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                            </figure>
                        </div>
                   </div>
                   <div className="holder slide6">
                        <div className="slide-content">
                            <h1 className="full-name">
                                Abdul Basit
                            </h1>
                            <p className="skill-set">
                                CEO Afren
                            </p>
                            <figure>
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                            </figure>
                        </div>
                   </div>
                   </Slider> */}
                 </div>
              </div>
            </div>
        <div className="logos">
            <div className="logos-slide">
                <img src={fujitsu_logo} height="100" width="250" alt="" />
                <img src={Pomeroy_Logo} height="100" width="250" alt="" /> 
                <img src={Service_Express_Logo} height="100" width="250" alt=""/>
                <img src={Modis_Logo} height="100" width="250" alt="" /> 
                <img src={Worldlink_Logo} height="100" width="250" alt="" />
            </div>
        </div>
        </header>
        <div className="workforce-section">
        <figure>
            <img src={box_workforce} alt="" />
        </figure>
        <div className="workforce-text">
            <h1 className="workforce-description">
                Access an on-demand workforce that covers the 20+ sought-after skills and specialties.
            </h1>
            <div className="workforce-list">
                <div className="workforce-list-item">
                    <img src={workforce_badge} alt=""/>
                    <p>Zero percent charge rate</p>
                </div>
                <div className="workforce-list-item">
                    <img src={workforce_badge} alt=""/>
                    <p>Blockchain based payment system</p>
                </div>
                <div className="workforce-list-item">
                    <img src={workforce_badge} alt=""/>
                    <p>Built-in project management tools</p>
                </div>
                <div className="workforce-list-item">
                    <img src={workforce_badge} alt=""/>
                    <p>AI-powered matchmaking</p>
                </div>
                <div className="workforce-list-item">
                    <img src={workforce_badge} alt=""/>
                    <p>24/7 support system</p>
                </div>
            </div>
        </div>
        </div>
        <div className="jobs">
        <div className="main-text">
            <h1>
                Popular services for you
            </h1>
            <p>
                Access on-demand workforce that covers a wide range of sought after skills and specialties
            </p>
        </div>
        <main className='landingpage-main'>
            <div className='landingpage-div'>
                <a className="main-links" href="javascript:viod(0)">Software Development</a>
            </div>
            <div>
                <a className="main-links" href="javascript:viod(0)">UI/UX (Product Design)</a>
            </div>
            <div>
                <a className="main-links" href="javascript:viod(0)">Data Analysis</a>
            </div>
            <div>
                <a className="main-links" href="javascript:viod(0)">Music Production</a>
            </div>
            <div>
                <a className="main-links" href="javascript:viod(0)">Animation</a>
            </div>
            <div>
                <a className="main-links" href="javascript:viod(0)">Video Editing</a>
            </div>
        </main>
        <a href="#" className="view-all">
            View all
        </a>
        </div>
        <Testimonials/>
        <JoinUs/>
        <Footer />
    </>
  )
}
