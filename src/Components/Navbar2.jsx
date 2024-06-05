/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react'
import Ellipse31 from "../assets/afren-images/Ellipse31.png"
// import "../Styles/navbar2.css"
import "../style.css"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export default function Navbar2({ profile, setVisibleSection, isMenuOpen, setIsMenuOpen}) {
    const navigate = useNavigate()
    const [jobCategories, setJobCategories] = useState([]);
    const token = sessionStorage.getItem("token")

    function closeNavbar(){
        setIsMenuOpen(prev => !prev)
    }
    useEffect(() => {
        const fetchJobCategories = async () => {
            try {
                const response = await axios.get('https://afren-server-kjt8.onrender.com/api/getJobCategories', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setJobCategories(response.data);
            } catch (error) {
                console.error('Error fetching job categories:', error);
            }
        };

        fetchJobCategories();
    }, [token]);
    return (
        <nav class="nav2">
            <i onClick={closeNavbar} class="fa fa-qrcode" id="menu-icon" aria-hidden="true"></i>
            <a href="javascript:void(0)" class="logo"><span style={{ color: "#3ac3d6" }}>af</span><span style={{ color: "#015b7e" }}>ren</span></a>
            <div id="nav-flexdiv">
                <div id="overflow">
                    <ul class="nav-links">
                        <i class="fa fa-times navCloseBtn"></i>
                        <div id="prof-cover">
                            <div id="profile" onClick={() => { setVisibleSection(profile) }}>
                                <img src={Ellipse31} alt="" />
                                <div class="online-tag"></div>
                            </div>
                        </div>
                        <li onClick={() => navigate("/findtalent")}>
                            <a href="javascript:void(0)">Find Talent</a>
                        </li>
                        <li class="dropdown">
                            <p class="dropbtn" id="droptn-one" onClick={() => { navigate("/jobs") }}>
                                Find Work
                                <i class="fas fa-chevron-down nav-down"></i>
                            </p>
                            <div class="dropdown-content" id="drp-cont-one">
                                <a href="javascript:void(0)">list</a>
                                <a href="javascript:void(0)">list</a>
                                <a href="javascript:void(0)">list</a>
                            </div>
                        </li>
                        <li class="dropdown">
                            <p class="dropbtn" id="droptn-two">Resources <i class="fas fa-chevron-down nav-down2"></i></p>
                            <div class="dropdown-content" id="drp-cont-two">
                                <a href="javascript:void(0)">list</a>
                                <a href="javascript:void(0)">list</a>
                                <a href="javascript:void(0)">list</a>
                            </div>
                        </li>
                        <li class="dropdown">
                            <p class="dropbtn" id="droptn-three">Services category
                                <i class="fas fa-chevron-down nav-down3"></i></p>
                            <div class="dropdown-content" id="drp-cont-three">
                                {jobCategories.map((category) => (
                                    <a key={category.id} href="javascript:void(0)">
                                        {category.jobCategory}
                                    </a>
                                ))}
                            </div>
                        </li>
                        <li class="dropdown">
                            <p class="dropbtn" id="droptn-four">About <i class="fas fa-chevron-down nav-down4"></i></p>
                            <div class="dropdown-content" id="drp-cont-four">
                                <a href="javascript:void(0)">list</a>
                                <a href="javascript:void(0)">list</a>
                                <a href="javascript:void(0)">list</a>
                            </div>
                        </li>
                        <li id="bell-ic"><i class="fa fa-bell-o" aria-hidden="true"></i></li>
                    </ul>
                </div>
                {/* <i class="fa fa-search search-icon" id="searchIcon"></i>
                <div id="search-boxcover">
                    <div class="search-box">
                        <i class="fa fa-search search-icon"></i>
                        <input type="text" placeholder="Search." />
                    </div>
                </div> */}
            </div>
        </nav>
    )
}