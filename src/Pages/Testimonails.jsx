import React from 'react';
import JoinUs from '../Components/JoinUs';
import Footer from '../Components/Footer';
import Navbar from "../Components/Navbar";
import pink_roung_img from '../assets/afren-images/pink-roung-img.png';
import verified from '../assets/afren-images/verified.png';
import star4 from '../assets/afren-images/Star4.png'
// ... other imports
import "../style.css";
import Slider from "react-slick";

export default class Testimonials extends React.Component {


  render() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerMode: true,
        centerPadding: '25%',
      responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '25%',
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '10%',
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '0%',
            }
        }
      ]
    };

    return (
      <>
        <Navbar />
        <div id="top-div2">
          <div id="testim-wrap">
            <div id="testim-tag">Testimonials</div>
          </div>
          <center>
            <div id="centered-text">
              <h1>See what <font id="colored-text">our clients</font> are saying</h1>
              <p>Find out why our customers love us! Read their inspiring testimonials and see the impact our services have had on their lives. Join our satisfied community and experience the difference firsthand.</p>
            </div>
          </center>
          <div className='testimonial-slider-space'>
            <Slider  {...settings}>
                <div className='testimonial-slide'>
                    <section>
                        <p className="testimonial-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure deleniti ut iste architecto repudiandae magni dolores provident esse delectus expedita soluta modi, exercitationem, aspernatur cumque? Dolor illo laborum officia aut accusantium esse cumque libero nesciunt cupiditate voluptatem harum aspernatur deleniti, beatae, doloribus odit ipsa delectus similique sequi earum voluptatum?
                        </p>
                        <div className="inner-bottom">
                            <div className="user-prof">
                                <div className="prof-pic1">
                                <img src={pink_roung_img} alt=""/>
                                </div>
                                <div className="details">
                                    <p>Mitchell Bronne1</p>
                                    <p><b>CEO Malistack</b></p>
                                    <div className="tstml-stars">
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="tstml-verify">
                                <img src={verified} alt=""/> <small>verified client</small>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='testimonial-slide'>
                    <section>
                        <p className="testimonial-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure deleniti ut iste architecto repudiandae magni dolores provident esse delectus expedita soluta modi, exercitationem, aspernatur cumque? Dolor illo laborum officia aut accusantium esse cumque libero nesciunt cupiditate voluptatem harum aspernatur deleniti, beatae, doloribus odit ipsa delectus similique sequi earum voluptatum?
                        </p>
                        <div className="inner-bottom">
                            <div className="user-prof">
                                <div className="prof-pic1">
                                <img src={pink_roung_img} alt=""/>
                                </div>
                                <div className="details">
                                    <p>Mitchell Bronne1</p>
                                    <p><b>CEO Malistack</b></p>
                                    <div className="tstml-stars">
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="tstml-verify">
                                <img src={verified} alt=""/> <small>verified client</small>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='testimonial-slide'>
                    <section>
                        <p className="testimonial-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure deleniti ut iste architecto repudiandae magni dolores provident esse delectus expedita soluta modi, exercitationem, aspernatur cumque? Dolor illo laborum officia aut accusantium esse cumque libero nesciunt cupiditate voluptatem harum aspernatur deleniti, beatae, doloribus odit ipsa delectus similique sequi earum voluptatum?
                        </p>
                        <div className="inner-bottom">
                            <div className="user-prof">
                                <div className="prof-pic1">
                                <img src={pink_roung_img} alt=""/>
                                </div>
                                <div className="details">
                                    <p>Mitchell Bronne1</p>
                                    <p><b>CEO Malistack</b></p>
                                    <div className="tstml-stars">
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="tstml-verify">
                                <img src={verified} alt=""/> <small>verified client</small>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='testimonial-slide'>
                    <section>
                        <p className="testimonial-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure deleniti ut iste architecto repudiandae magni dolores provident esse delectus expedita soluta modi, exercitationem, aspernatur cumque? Dolor illo laborum officia aut accusantium esse cumque libero nesciunt cupiditate voluptatem harum aspernatur deleniti, beatae, doloribus odit ipsa delectus similique sequi earum voluptatum?
                        </p>
                        <div className="inner-bottom">
                            <div className="user-prof">
                                <div className="prof-pic1">
                                <img src={pink_roung_img} alt=""/>
                                </div>
                                <div className="details">
                                    <p>Mitchell Bronne1</p>
                                    <p><b>CEO Malistack</b></p>
                                    <div className="tstml-stars">
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="tstml-verify">
                                <img src={verified} alt=""/> <small>verified client</small>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='testimonial-slide'>
                    <section>
                        <p className="testimonial-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure deleniti ut iste architecto repudiandae magni dolores provident esse delectus expedita soluta modi, exercitationem, aspernatur cumque? Dolor illo laborum officia aut accusantium esse cumque libero nesciunt cupiditate voluptatem harum aspernatur deleniti, beatae, doloribus odit ipsa delectus similique sequi earum voluptatum?
                        </p>
                        <div className="inner-bottom">
                            <div className="user-prof">
                                <div className="prof-pic1">
                                <img src={pink_roung_img} alt=""/>
                                </div>
                                <div className="details">
                                    <p>Mitchell Bronne1</p>
                                    <p><b>CEO Malistack</b></p>
                                    <div className="tstml-stars">
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="tstml-verify">
                                <img src={verified} alt=""/> <small>verified client</small>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='testimonial-slide'>
                    <section>
                        <p className="testimonial-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure deleniti ut iste architecto repudiandae magni dolores provident esse delectus expedita soluta modi, exercitationem, aspernatur cumque? Dolor illo laborum officia aut accusantium esse cumque libero nesciunt cupiditate voluptatem harum aspernatur deleniti, beatae, doloribus odit ipsa delectus similique sequi earum voluptatum?
                        </p>
                        <div className="inner-bottom">
                            <div className="user-prof">
                                <div className="prof-pic1">
                                <img src={pink_roung_img} alt=""/>
                                </div>
                                <div className="details">
                                    <p>Mitchell Bronne1</p>
                                    <p><b>CEO Malistack</b></p>
                                    <div className="tstml-stars">
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                        <img src={star4} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="tstml-verify">
                                <img src={verified} alt=""/> <small>verified client</small>
                            </div>
                        </div>
                    </section>
                </div>
            </Slider>
            </div>
        </div>
        <JoinUs />
        <Footer />
      </>
    );
  }
}