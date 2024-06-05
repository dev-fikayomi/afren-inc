import React from 'react'
import '../Styles/Landingpage.css'
import pink_roung_img from '../assets/afren-images/pink-roung-img.png'
import jumoke from "../assets/afren-images/jumoke.jpg"
import verified from '../assets/afren-images/verified.png'

export default function Testimonials() {
  return (
    <div className="wrapper">
    <h1>See what our clients are saying</h1>
    <div className="outer">
        <div className="card" style={{"--delay":-1}}>
            <div className="content">
                <p>
                    Joining Afren waitlist will make me among the first to experience the groundbreaking platform. With Afren Inc, I know I will have the opportunity to connect with top talents and access unparalleled resources to elevate my business and projects    
                </p>
            </div>
            <div className="inner-bottom">
                <div className="user-prof">
                    <div className="prof-pic1">
                    <img src={jumoke} alt=""/>
                    </div>
                    <div className="details">
                        <p>Mitchell Bronne1</p>
                        <p><b>CEO Malistack</b></p>
                        <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                    </div>
                </div>
                <div className="client1">
                    <img src={verified} alt=""/> <small>verified client</small></div>
            </div>
        </div>
        <div className="card" style={{"--delay":0}}>
            <div className="content">
                <p>
                  Joining Afren waitlist will make me among the first to experience the groundbreaking platform. With Afren Inc, I know I will have the opportunity to connect with top talents and access unparalleled resources to elevate my business and projects
                </p>
            </div>
            <div className="inner-bottom">
                <div className="user-prof">
                    <div className="prof-pic1">
                        <img src={jumoke} alt=""/>
                    </div>
                    <div className="details">
                        <p>Mitchell Bronne2</p>
                        <p><b>CEO Malistack</b></p>
                        <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                    </div>
                </div>
                <div className="client1"><img src={verified} alt=""/> <small>verified client</small></div>
            </div>
        </div>
        <div className="card" style={{"--delay":1}}>
            <div className="content">
                <p>
                  Joining Afren waitlist will make me among the first to experience the groundbreaking platform. With Afren Inc, I know I will have the opportunity to connect with top talents and access unparalleled resources to elevate my business and projects
                </p>
            </div>
            <div className="inner-bottom">
                <div className="user-prof">
                    <div className="prof-pic1">
                        <img src={jumoke} alt=""/>
                    </div>
                    <div className="details">
                        <p>Mitchell Bronne3</p>
                        <p><b>CEO Malistack</b></p>
                        <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                    </div>
                </div>
                <div className="client1">
                    <img src={verified} alt=""/> <small>verified client</small></div>
            </div>
        </div>
        <div className="card" style={{"--delay":2}}>
            <div className="content">
                <p>
                    Joining Afren waitlist will make me among the first to experience the groundbreaking platform. With Afren Inc, I know I will have the opportunity to connect with top talents and access unparalleled resources to elevate my business and projects
                </p>
            </div>
            <div className="inner-bottom">
                <div className="user-prof">
                    <div className="prof-pic1">
                        <img src={jumoke} alt=""/>

                        </div>
                    <div className="details">
                        <p>Mitchell Bronne4</p>
                        <p><b>CEO Malistack</b></p>
                        <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                    </div>
                </div>
                <div className="client1"><img src={verified} alt=""/> <small>verified client</small></div>
            </div>
        </div>
        <div className="card" style={{"--delay":2}}>
            <div className="content">
                <p>
                    Joining Afren waitlist will make me among the first to experience the groundbreaking platform. With Afren Inc, I know I will have the opportunity to connect with top talents and access unparalleled resources to elevate my business and projects
                </p>
            </div>
            <div className="inner-bottom">
                <div className="user-prof">
                    <div className="prof-pic1">
                        <img src={jumoke} alt=""/>
                    </div>
                    <div className="details">
                        <p>Mitchell Bronne5</p>
                        <p><b>CEO Malistack</b></p>
                        <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                    </div>
                </div>
                <div className="client1"><img src={verified} alt=""/> <small>verified client</small></div>
            </div>
        </div>
    </div>
    </div>
  )
}
