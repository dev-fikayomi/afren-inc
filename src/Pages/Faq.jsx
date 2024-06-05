import React from 'react'
import Header from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import "../Styles/faq.css"



export default function Faq() {
  return (
    <>
        <Header />
        <div class="menu-cover">
        <Sidebar />
        </div>
        <div id="main">
        <p id="back-link"><a href="javascript:void(0)">&lt;</a> Back</p>
        <div id="pg-title">
            <i class="fas fa-question-circle help-icon"></i>
            <h3>Help Center</h3>
        </div>
        <div id="search-help-whole">
            <div id="help-search-bx">
                <input type="text" name="" id="" placeholder="Search your question" />
                <div id="hlp-srch-btn"><i class="fas fa-search"></i></div>
            </div>
        </div>
        <div id="gett-strt-whole">
            <div class="gett-strt-opt">
                <p>Getting a gig</p>
                <div class="gett-strt-plus">+</div>
            </div>
            <div class="gett-strt-opt">
                <p>setting your profile</p>
                <div class="gett-strt-plus">+</div>
            </div>
            <div class="gett-strt-opt">
                <p>Getting a gig</p>
                <div class="gett-strt-plus">+</div>
            </div>
            <div class="gett-strt-opt">
                <p>Getting Started</p>
                <div class="gett-strt-plus">+</div>
            </div>
            <div class="gett-strt-opt">
                <p>Getting Started</p>
                <div class="gett-strt-plus">+</div>
            </div>
            <div class="gett-strt-opt">
                <p>Getting Started</p>
                <div class="gett-strt-plus">+</div>
            </div>
        </div>
        </div>
    </>
  )
}
