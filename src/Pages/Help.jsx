import React from 'react'
import Header from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
// import "../Styles/help.css"
import "../style.css"

export default function Help() {
  return (
    <>
      <Header />
      <div class="menu-cover">
        <Sidebar />
      </div>
      <div id="main">
        <div id="pg-title">
            <i class="fas fa-question-circle help-icon"></i>
            <h3>Help Center</h3>
        </div>
        <div id="search-help-whole">
            <h3>How can we help you?</h3>
            <div id="help-search-bx">
                <input type="text" name="" id="" placeholder="Search your question" />
                <div id="hlp-srch-btn"><i class="fas fa-search"></i></div>
            </div>
        </div>
        <div id="cards-cover">
            <a href="faq.html" class="help-card">
                <i class="far fa-question-circle help-icon"></i>
                <h3>Frequently asked Questions</h3>
            </a>
            <a href="help-disp.html" class="help-card">
                <i class="far fa-question-circle help-icon"></i>
                <h3>Disputes</h3>
            </a>
            <a href="javascript:void(0)" class="help-card">
                <i class="far fa-question-circle help-icon"></i>
                <h3>Customer Service</h3>
            </a>
        </div>
        <div id="gett-strt-whole">
            <h3 id="gett-strt-ttle">Getting Started</h3>
            <p id="gett-strt-desc">Getting Started Getting StartedGetting StartedGetting StartedGetting StartedGetting StartedGetting Started</p>
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
                <p>Getting a gig</p>
                <div class="gett-strt-plus">+</div>
            </div>
        </div>
    </div>
    </>
  )
}
