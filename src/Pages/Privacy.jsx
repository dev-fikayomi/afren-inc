import React from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
// import '../Styles/privacy.css'
import "../style.css"

export default function Privacy() {
  return (
    <>
      <Header />
        <div id="top-item">
            <div id="top-item-inner">
            <h1>Privacy Policy</h1>
            <p> 
                At Afren, We take data privacy seriously, We want to e completely transparent
                about the information that we store, How we use it and How we keep it secure.
            </p>
            </div>
        </div>
        <div id="whole">
        <div id="privacy-side-menu">
            <div id="selected-menu">
                <div id="slctd-line"></div>
                <a href="">Privacy Policy</a>
            </div>
            <div class="menu-opt"><a href="">Information We Collect</a></div>
            <div class="menu-opt"><a href="">Our Legal Basis</a></div>
            <div class="menu-opt"><a href="">Sellers</a></div>
            <div class="menu-opt"><a href="">Buyers</a></div>
            <div class="menu-opt"><a href="">Orders</a></div>
            <div class="menu-opt"><a href="">Dispute and Cancellation</a></div>
            <div class="menu-opt"><a href="">Reporting Violations</a></div>
            <div class="menu-opt"><a href="">User Conduct and Protection</a></div>
        </div>
        <div id="signup-right-whole">
            <div><FontAwesomeIcon icon={faCircle} size='2xs' />&nbsp;&nbsp;&nbsp;<a href="">Privacy Policy</a></div>
            <div><FontAwesomeIcon icon={faCircle} size='2xs'/>&nbsp;&nbsp;&nbsp;<a href="">Information We Collect</a></div>
            <div><FontAwesomeIcon icon={faCircle} size='2xs'/>&nbsp;&nbsp;&nbsp;<a href="">Our Legal Basis for Using Personal Information</a></div>
            <div><FontAwesomeIcon icon={faCircle} size='2xs'/>&nbsp;&nbsp;&nbsp;<a href="">How Do We Use Information Collected</a></div>
            <div><FontAwesomeIcon icon={faCircle} size='2xs'/>&nbsp;&nbsp;&nbsp;<a href="">How Long Do We Keep Your Personal Information</a></div>
            <div><FontAwesomeIcon icon={faCircle} size='2xs'/>&nbsp;&nbsp;&nbsp;<a href="">Children</a></div>
            <div><FontAwesomeIcon icon={faCircle} size='2xs'/>&nbsp;&nbsp;&nbsp;<a href="">Sharing Personal Information With Third Party</a></div>
            <div><FontAwesomeIcon icon={faCircle} size='2xs'/>&nbsp;&nbsp;&nbsp;<a href="">Where We Store Your Personal Information</a></div>
            <div><FontAwesomeIcon icon={faCircle} size='2xs'/>&nbsp;&nbsp;&nbsp;<a href="">Cookies</a></div>
            <div><FontAwesomeIcon icon={faCircle} size='2xs'/>&nbsp;&nbsp;&nbsp;<a href="">Do Not Track</a></div>
            <div><FontAwesomeIcon icon={faCircle} size='2xs'/>&nbsp;&nbsp;&nbsp;<a href="">External Link</a></div>
            <div><FontAwesomeIcon icon={faCircle} size='2xs'/>&nbsp;&nbsp;&nbsp;<a href="">Security</a></div>
            <div><FontAwesomeIcon icon={faCircle} size='2xs'/>&nbsp;&nbsp;&nbsp;<a href="">Specific Provision for Other Users</a></div>
            <div><FontAwesomeIcon icon={faCircle} size='2xs'/>&nbsp;&nbsp;&nbsp;<a href="">Updating Personal Information</a></div>
            <div><FontAwesomeIcon icon={faCircle} size='2xs'/>&nbsp;&nbsp;&nbsp;<a href="">Contact Us</a></div>
        </div>
    </div>
      <Footer/>
    </>
  )
}
