import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Sidebar({
    setMyjobs,profile,section,setVisibleSection,isVisibleSection,isMenuOpen,setIsMenuOpen
  }) {
  const [isActive, setisActive] = useState("")
  const [isSubMenuOpen, setSubMenuOpen] = useState(false)
  const navigate = useNavigate()
  function handleClick(){
    setSubMenuOpen(!isSubMenuOpen)
  }
  return (
    <>
    { isMenuOpen
    &&
      <ul class="side-menu" 
      style={
          {position : isVisibleSection === "message"    
          ? "sticky" : "fixed",
          top: "70px", left : "0"
          }
          }
        >
        <li class="menu-opt2" onClick={()=>setVisibleSection(section)}>
          <a class={ isVisibleSection == section ? "active" : null} href="javascript:void(0)">
            <i class="fa fa-qrcode icon" aria-hidden="true"></i>
             Dashboard
          </a>
        </li>
        <li class="menu-opt2" onClick={()=>setVisibleSection("message")}>
          <a href="javascript:void(0)" class={ isVisibleSection == "message" ? "active" : null}>
            <i class="fa fa-comment-o icon" aria-hidden="true"></i>Messages
          </a>
        </li>
        <li class="menu-opt2" onClick={()=>{setMyjobs(true);setVisibleSection("myjobs")}} >
          <a href="javascript:void(0)"><i class="fas fa-suitcase icon"></i>My Jobs</a></li>
        <li class="menu-opt2" onClick={()=>setVisibleSection("leaderboard")} >
          <a class={isVisibleSection == "leaderboard" ? "active" : null}  href="javascript:void(0)"><i class="fas fa-award icon"></i>Leader board</a>
        </li>
        <li class="menu-opt2" onClick={()=>setVisibleSection("billings")} >
          <a href="javascript:void(0)" class={isVisibleSection == "billings" ? "active" : null} ><i class="far fa-credit-card icon"></i>Billings</a>
        </li>
        <li id="sett-divdrop" className={isSubMenuOpen ? 'opensettdrp' : null}>
          <p id="sett-btn" onClick={handleClick}>
            <i class="fas fa-cog icon"></i>Settings 
            <i class="fas fa-caret-down sett-drpic"></i>
          </p>
          <div id="settdrop-cover2">
            <div id="sett-drop">
              <div id="settdrop-line"></div>
              <ul id="sett-dropcontent">
                <li onClick={()=>setVisibleSection("prof")}>
                  <a href="javascript:viod(0)" class={ isVisibleSection == "prof" ? "active" : null} >
                    Profile
                  </a>
                </li>
                <li onClick={()=>setVisibleSection("account")}>
                  <a class={ isVisibleSection == "account" ? "active" : null} 
                  href="javascript:void(0)">Account</a></li>
                <li onClick={()=>setVisibleSection("security")} >
                  <a
                    class={ isVisibleSection == "security" ? "active" : null} 
                    href="javvascript:void(0)"
                  >Security</a>
                </li>
                <li onClick={()=>setVisibleSection("bids")}>
                  <a
                    class={ isVisibleSection == "bids" ? "active" : null} 
                    href="javascript:void(0)">Bids</a></li>
                <li onClick={()=> setVisibleSection("feedback")}>
                  <a
                    class={ isVisibleSection == "feedback" ? "active" : null} 
                    href="javascript:void(0)">Feedback</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="menu-opt2" onClick={()=>setVisibleSection("helpdispute")}>
          <a href="javascript:void(0)" class={ isVisibleSection == "helpdispute" ? "active" : null}  >
            <i class="far fa-question-circle icon"></i>Help Center</a></li>
        <li class="menu-opt2">
          <a href="javascript:void(0)" onClick={()=>{sessionStorage.clear();navigate("/login")}}>
            <i class="fas fa-sign-out-alt icon"></i>Logout
          </a>
        </li>
      </ul>
    }
    </>
  )
}
