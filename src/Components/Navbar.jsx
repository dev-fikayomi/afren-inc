/* eslint-disable no-unused-vars */
import React,{useState,useRef,useEffect} from 'react'
import '../Styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faCaretDown,faMagnifyingGlass,faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink,useNavigate } from 'react-router-dom'
import axios from "axios"

export default function Header() {
    const navigate = useNavigate()
    const [isSidebarOpen,setSidebarOpen] = useState(false)
    const [isMenuOneOpen, setMenuOneOpen] = useState(false);
    const [isMenuTwoOpen, setMenuTwoOpen] = useState(false);
    const [isMenuThreeOpen, setMenuThreeOpen] = useState(false);
    const [isSearchbarOpen, setSearchOpen] = useState(false);
    const [text,setText] = useState("");
    const [jobCategories, setJobCategories] = useState([]);
    const [token,setToken] = useState(sessionStorage.getItem("token"))

    
    function clickHandler(){
        setSidebarOpen(true)
        setSearchOpen(false)
    }
    function clickHandler2(){
        setSidebarOpen(false)
        setMenuOneOpen(false)
        setMenuTwoOpen(false)
        setMenuThreeOpen(false)
    }
    function clickHandler3(){
        setMenuOneOpen(prev => !prev)
        setMenuTwoOpen(false)
        setMenuThreeOpen(false)
    }
    function clickHandler4(){
        setMenuTwoOpen(prev => !prev)
        setMenuOneOpen(false)
        setMenuThreeOpen(false)
    }
    function clickHandler5(){
        setMenuThreeOpen(prev => !prev)
        setMenuTwoOpen(false);
        setMenuOneOpen(false)
    }
    function clickHandler6(){
        setSearchOpen(prev => !prev)
    }



    useEffect(() => {
        const fetchJobCategories = async () => {
            try {
                const response = await axios.get('https://afren-main-server.onrender.com/api/getJobCategories', {
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
    <nav className={
            !isSidebarOpen && !isSearchbarOpen 
            ? "nav1"
            :  !isSidebarOpen && isSearchbarOpen
            ? "nav1 openSearch"
            :  isSidebarOpen && isMenuOneOpen
            ? "nav1 openNav openDrop"
            :  isSidebarOpen && isMenuTwoOpen
            ? "nav1 openNav openDropTwo"
            : isSidebarOpen && isMenuThreeOpen
            ? "nav1 openNav openDropThree"
            : "nav1 openNav"}>
        <NavLink to="/" className="logo1"><span style={{color: "#3ac3d6"}}>af</span><span style={{color: "#015b7e"}}>ren</span></NavLink>
        <div id="overflow1">
            <ul className="nav-links1">
                <FontAwesomeIcon icon={faXmark} onClick={clickHandler2} className="navCloseBtn" />
                {/* <i className="fa fa-times navCloseBtn"></i> */}
                <li onClick={()=>{navigate("/findtalent")}}>
                    <a href="">Find Talent</a>
                </li>
                <li className="dropdown1">
                    <NavLink to="/jobs">
                    <p className="dropbtn" onClick={clickHandler3} id="droptn-one">Find Work 
                        {/* <i className="fas fa-caret-down"></i> */}
                        {/* <FontAwesomeIcon icon={faCaretDown} /> */}
                    </p>
                    </NavLink>
                </li>
                <li className="dropdown1">
                    <p className="dropbtn" onClick={clickHandler4} id="droptn-two">Resources 
                        {/* <i className="fas fa-caret-down"></i> */}
                        <FontAwesomeIcon icon={faCaretDown} />
                    </p>
                    <div className="dropdown-content" id="drp-cont-two">
                        <NavLink to="/blog">Blog</NavLink>
                        <NavLink to="/news">News</NavLink>
                        <NavLink to="/testimonails">Testimonials</NavLink>
                        <NavLink to="/contact">contact</NavLink>
                    </div>
                </li>
                <li className="dropdown1">
                    <p className="dropbtn" onClick={clickHandler5} id="droptn-three">Services category 
                        {/* <i className="fas fa-caret-down"></i> */}
                        <FontAwesomeIcon icon={faCaretDown} />
                    </p>
                    <div className="dropdown-content" id="drp-cont-three">
                    {jobCategories.map((category) => (
                                    <a key={category.id} href="javascript:void(0)">
                                        {category.jobCategory}
                                    </a>
                                ))}
                    </div>
                </li>
                <li><NavLink to="/about">About</NavLink></li>
                <div id="drp-nav-but1">
                    <NavLink 
                        to="/signup" 
                        id="drp-strt-butt1" 
                        className="butt-in-nav1"
                    >Get Started
                    </NavLink>
                    <NavLink 
                        to="/login" 
                        id="drp-sign-butt1" 
                        className="butt-in-nav1"
                    >Sign in
                    </NavLink>
                </div>
                 {/* <li><a href="" className="butt-in-nav">Sign in</a></li>
                <li><a href="" className="butt-in-nav">Get Started</a></li> */}
            </ul>
        </div>
        <div id="nav-buttons1">
            <NavLink to="/login" id="si-innav1">Sign in</NavLink>
            <NavLink to="/signup" id="start-navbut1">Get Started</NavLink>
        </div>
        {/* <i className="fa fa-search search-icon" id="searchIcon"></i> */}
        <FontAwesomeIcon onClick={clickHandler6} icon={!isSearchbarOpen ? faMagnifyingGlass : faXmark} className='search-icon' id="searchIcon1" />
        <div className="search-box1">
            {/* <i className="fa fa-search search-icon"></i> */}
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon1' />
            <input 
                type="text" 
                placeholder="Search here..." 
                value={text}
                onChange={(e)=>setText(e.target.value)}    
            />
        </div>
        {/* <i className="fas fa-bars navOpenBtn"></i> */}
        <FontAwesomeIcon icon={faBars} onClick={clickHandler} className='navOpenBtn1' />
    </nav>
  )
}
