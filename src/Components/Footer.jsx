import React from 'react'
import '../Styles/Footer.css' 
import { NavLink, useNavigate } from 'react-router-dom'

export default function Footer() {
    const navigate = useNavigate()
  return (
    <div id="foot-wrap">
    <div id="footer">
        <div className="footerhead">
            <NavLink to="/"  id="foot-logo"><span style={{color: "#3ac3d6"}}>af</span><span style={{color: "#015b7e"}}>ren</span></NavLink>
        </div>
        <div  className="footercontent">
            {/* <div className="footerhead">
                <h3>For technicians</h3>
                <div className="footerinnercontent" id="footerinnercontent2">
                    <a href="" className="footer-link">Overview</a>
                    <a href="" className="footer-link">Insurance</a>
                    <a href="" className="footer-link">Sign up</a>
                </div>
            </div>  */}
            <div className="footerhead">
                <h3>Resources</h3>
                <div className="footerinnercontent" id="footerinnercontent3">
                    <NavLink to="/blog" className="footer-link">Blog</NavLink>
                    <NavLink to="/news" className="footer-link">News</NavLink>
                    <NavLink to="/testimonails" className="footer-link">Testimonials</NavLink>
                    <NavLink to="/contact" className="footer-link">Contact</NavLink>
                    <NavLink to="/terms" className="footer-link">Term of Service</NavLink>
                </div>
            </div>
            <div className="footerhead">
                <h3>Other</h3>
                <div className="footerinnercontent" id="footerinnercontent4">
                    <NavLink to="/jobs" className="footer-link">Job listing</NavLink>
                    <a href="" className="footer-link">Find Talent</a>
                    <a href="" className="footer-link">Our partners</a>
                </div>
            </div>
            <div className="footerhead">
                <h3>Connect with us</h3>
                <div className="footerinnercontent" id="footerinnercontent5">
                    <a href="tel:+1233-577-4855" className="footer-link">+1 233-577-4855</a>
                    <a href="" className="footer-link">733 Marquette Avenue S</a>
                    <a href="" className="footer-link">Suite #800</a>
                    <a href="" className="footer-link">Minneapolis, MN 55402</a>
                </div>
            </div>
        </div>
    </div>
    <div id="copy">
        <p style={{margin: 0}}>&copy;2023 
        <span style={{cursor: "pointer"}} onClick={()=>navigate("/")} >Afren</span> &nbsp;LLC. All Rights Reserved.&nbsp;|&nbsp;
        <span style={{cursor: "pointer"}} onClick={()=>navigate("/terms")}>Terms of Service</span> </p>
    </div>
</div>
  )
}
