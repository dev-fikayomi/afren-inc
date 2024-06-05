import React, { useState } from 'react'
import Header from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import fluent_image from "../assets/afren-images/fluent_crown-20-regular.png"
import mi_filter from "../assets/afren-images/mi_filter-blue.png"
import rank1 from "../assets/afren-images/rank1.png"
import rank2 from "../assets/afren-images/rank2.png"
import rank3 from "../assets/afren-images/rank3.png"
import jane_doe from "../assets/afren-images/jane-doee.png"
import star_icon from "../assets/afren-images/star-icon.png"
import location from "../assets/afren-images/location.png"
import pink_round from "../assets/afren-images/pink-roung-img.png"
import woman from "../assets/afren-images/womann.png"
import badge_1 from "../assets/afren-images/badge-1.png"
import badge_2 from "../assets/afren-images/badge-2.png"
import badge_3 from "../assets/afren-images/badge-3.png"
import badge_4 from "../assets/afren-images/badge-4.png"
import badge_5 from "../assets/afren-images/badge-5.png"
// import "../Styles/leaderboard.css"
import "../style.css"


export default function Leaderboard() {
  return (
    <>
        <div class="major-container">
            <div class="leaderboard-subheading">
                <h2 class="ls-text">
                    Leaderboard
                </h2>
                <section class="viewer-rank-display">
                    <img 
                        src={fluent_image} 
                        alt="" class="vrd-image" />
                    <p class="vrd-text">
                        Your Rank: 10th
                    </p>
                </section>
            </div>
            <header class="leaderboard-header">
                <div class="leaderboard-modal-btns">
                    <span class="tf-btn">Top Freelancer</span>
                    <span class="tc-btn">Top Client</span>
                </div>
                <section class="filter-section">
                    <img 
                        src={mi_filter} 
                        alt="" class="filter-img"
                    />
                    <select name="" id="">
                        <option value="" selected hidden disabled>Filter</option>
                        <option value="">list</option>
                        <option value="">list</option>
                        <option value="">list</option>
                    </select>
                </section>
            </header>
            <div class="top-freelancer-space">
                <section class="tfs-cards">
                    <div class="profile-rank-left pr-profile">
                        <img 
                            src={rank2} 
                            alt="" 
                            class="ranking-icon"
                        />
                        <figure class="profile-rank-img">
                            <img 
                                src={jane_doe} 
                                alt=""
                            />
                        </figure>
                        <p class="profile-name">Rosemary Doe</p>
                        <small class="profile-role">
                            Product Designer
                        </small>
                        <div class="profile-ratings">
                            <p class="profile-rating-amount">$9,000</p>
                            <span class="pr-approx">
                                <img 
                                    src={star_icon} 
                                    alt=""
                                />
                                <small>4.5</small>
                            </span>
                        </div>
                        <div class="profile-description">
                            <span class="pd-location">
                                <img 
                                    src={location} 
                                    alt=""
                                />
                                <small>USA</small>
                            </span>
                            <a href="javascript:void(0)" class="view-profile-link">View Profile</a>
                        </div>
                    </div>
                    <div class="profile-rank-middle pr-profile">
                        <img 
                            src={rank1} 
                            alt="" 
                            class="ranking-icon ri1"
                        />
                        <figure class="profile-rank-img">
                            <img 
                                src={pink_round} 
                                alt=""
                            />
                        </figure>
                        <p class="profile-name">Alicia Keys</p>
                        <small class="profile-role">Software Engineer</small>
                        <div class="profile-ratings">
                            <p class="profile-rating-amount">$11,000</p>
                            <span class="pr-approx">
                                <img 
                                    src={star_icon}
                                    alt=""
                                />
                                <small>5.0</small>
                            </span>
                        </div>
                        <div class="profile-description">
                            <span class="pd-location">
                                <img 
                                    src={location} 
                                    alt=""
                                />
                                <small>USA</small>
                            </span>
                            <a href="javascript:void(0)" class="view-profile-link">View Profile</a>
                        </div>
                    </div>
                    <div class="profile-rank-right pr-profile">
                        <img 
                            src={rank3} 
                            alt="" 
                            class="ranking-icon"
                        />
                        <figure class="profile-rank-img">
                            <img 
                                src={woman} 
                                alt=""
                            />
                        </figure>
                        <p class="profile-name">Jane Doe</p>
                        <small class="profile-role">UI/UX Designer</small>
                        <div class="profile-ratings">
                            <p class="profile-rating-amount">$7,000</p>
                            <span class="pr-approx">
                                <img 
                                    src={star_icon} 
                                    alt=""
                                />
                                <small>4.3</small>
                            </span>
                        </div>
                        <div class="profile-description">
                            <span class="pd-location">
                                <img 
                                    src={location} 
                                    alt=""
                                />
                                <small>Germany</small>
                            </span>
                            <a href="javascript:void(0)" class="view-profile-link">View Profile</a>
                        </div>
                    </div>
                </section>
                <div class="other-ranks">
                    <div class="profile-rank-1 prp">
                        <span class="pr-number">
                            4
                        </span>
                        <div class="profile-rank-desc">
                            <img 
                                src={jane_doe} 
                                alt="" 
                                class="prd-img"
                            />
                            <div class="prd-text">
                                <p>Kiran Acharys</p>
                            <p>Product Designer</p>
                            </div>
                        </div>
                        <div class="profile-ratings">
                            <p class="profile-rating-amount">$7,000</p>
                            <span class="pr-approx">
                                <img 
                                    src={star_icon} 
                                    alt=""
                                />
                                <small>4.3</small>
                            </span>
                        </div>
                        <div class="profile-rank-description">
                            <span class="pd-location">
                                <img 
                                    src={location} 
                                    alt=""
                                />
                                <small>Germany</small>
                            </span>
                            <a href="javascript:void(0)" class="view-profile-link">View Profile</a>
                        </div>
                    </div>
                    <div class="profile-rank-2 prp">
                        <span class="pr-number">
                            5
                        </span>
                        <div class="profile-rank-desc">
                            <img 
                                src={jane_doe} 
                                alt="" 
                                class="prd-img"
                            />
                            <div class="prd-text">
                                <p>Kiran Acharys</p>
                            <p>Product Designer</p>
                            </div>
                        </div>
                        <div class="profile-ratings">
                            <p class="profile-rating-amount">$7,000</p>
                            <span class="pr-approx">
                                <img 
                                    src={star_icon}
                                    alt=""
                                />
                                <small>4.3</small>
                            </span>
                        </div>
                        <div class="profile-rank-description">
                            <span class="pd-location">
                                <img 
                                    src={location}
                                    alt=""
                                />
                                <small>Germany</small>
                            </span>
                            <a href="javascript:void(0)" class="view-profile-link">View Profile</a>
                        </div>
                    </div>
                    <div class="profile-rank-3 prp">
                        <span class="pr-number">
                            6
                        </span>
                        <div class="profile-rank-desc">
                            <img 
                                src={jane_doe}
                                alt="" 
                                class="prd-img"
                            />
                            <div class="prd-text">
                                <p>Kiran Acharys</p>
                            <p>Product Designer</p>
                            </div>
                        </div>
                        <div class="profile-ratings">
                            <p class="profile-rating-amount">$7,000</p>
                            <span class="pr-approx">
                                <img 
                                    src={star_icon} 
                                    alt=""
                                />
                                <small>4.3</small>
                            </span>
                        </div>
                        <div class="profile-rank-description">
                            <span class="pd-location">
                                <img 
                                    src={location} 
                                    alt=""
                                />
                                <small>Germany</small>
                            </span>
                            <a href="javascript:void(0)" class="view-profile-link">View Profile</a>
                        </div>
                    </div>
                </div>
                <section class="badges-space">
                    <h2 class="bs-subheading">
                        Badges Earned
                    </h2>
                    <div class="badge-list">
                        <span>
                            <img 
                                src={badge_1} 
                                alt=""
                            />
                            <p>Elite Level</p>
                        </span>
                        <span>
                            <img 
                                src={badge_2} alt="" />
                            <p>Elite Level</p>
                        </span>
                        <span>
                            <img src={badge_3} alt=""/>
                            <p>Elite Level</p>
                        </span>
                        <span>
                            <img src={badge_4} alt=""/>
                            <p>Elite Level</p>
                        </span>
                        <span>
                            <img src={badge_5} alt=""/>
                            <p>Elite Level</p>
                        </span>
                    </div>
                </section>
            </div>
            <div class="top-client-space">
                <section class="tfs-cards">
                    <div class="profile-rank-left pr-profile">
                        <img 
                            src={rank2} alt="" class="ranking-icon"
                            />
                        <figure class="profile-rank-img">
                            <img 
                                src={jane_doe}
                                alt=""
                            />
                        </figure>
                        <p class="profile-name">Rosemary Doe</p>
                        <small class="profile-role">
                            Product Designer
                        </small>
                        <div class="profile-ratings">
                            <p class="profile-rating-amount">
                                <small>spent: </small>$9,000</p>
                            <span class="pr-approx">
                                <img 
                                    src={star_icon} 
                                    alt=""
                                />
                                <small>4.5</small>
                            </span>
                        </div>
                        <div class="profile-description">
                            <span class="pd-location">
                                <img 
                                    src={location} alt=""
                                />
                                <small>USA</small>
                            </span>
                            <a href="javascript:void(0)" class="view-profile-link">View Profile</a>
                        </div>
                    </div>
                    <div class="profile-rank-middle pr-profile">
                        <img 
                            src={rank1}
                            alt="" class="ranking-icon ri1" />
                        <figure class="profile-rank-img">
                            <img 
                                src={pink_round} alt="" />
                        </figure>
                        <p class="profile-name">Alicia Keys</p>
                        <small class="profile-role">Software Engineer</small>
                        <div class="profile-ratings">
                            <p class="profile-rating-amount">
                                <small>spent: </small>$11,000</p>
                            <span class="pr-approx">
                                <img 
                                    src={star_icon} alt="" />
                                <small>5.0</small>
                            </span>
                        </div>
                        <div class="profile-description">
                            <span class="pd-location">
                                <img src={location} alt="" />
                                <small>USA</small>
                            </span>
                            <a href="javascript:void(0)" class="view-profile-link">View Profile</a>
                        </div>
                    </div>
                    <div class="profile-rank-right pr-profile">
                        <img src={rank3}
                        alt="" class="ranking-icon" />
                        <figure class="profile-rank-img">
                            <img src={woman} alt=""/>
                        </figure>
                        <p class="profile-name">Jane Doe</p>
                        <small class="profile-role">UI/UX Designer</small>
                        <div class="profile-ratings">
                            <p class="profile-rating-amount">
                                <small>spent: </small>$7,000</p>
                            <span class="pr-approx">
                                <img 
                                    src={star_icon} 
                                    alt=""
                                />
                                <small>4.3</small>
                            </span>
                        </div>
                        <div class="profile-description">
                            <span class="pd-location">
                                <img src={location} 
                                alt="" />
                                <small>Germany</small>
                            </span>
                            <a href="javascript:void(0)" class="view-profile-link">View Profile</a>
                        </div>
                    </div>
                </section>
                <div class="other-ranks">
                    <div class="profile-rank-1 prp">
                        <span class="pr-number">
                            4
                        </span>
                        <div class="profile-rank-desc">
                            <img src={jane_doe}
                            alt="" class="prd-img"/>
                            <div class="prd-text">
                                <p>Kiran Acharys</p>
                            <p>Product Designer</p>
                            </div>
                        </div>
                        <div class="profile-ratings">
                            <p class="profile-rating-amount">
                                <small>spent: </small>$7,000</p>
                            <span class="pr-approx">
                                <img 
                                    src={star_icon} alt="" />
                                <small>4.3</small>
                            </span>
                        </div>
                        <div class="profile-rank-description">
                            <span class="pd-location">
                                <img src={location} alt=""/>
                                <small>Germany</small>
                            </span>
                            <a href="javascript:void(0)" class="view-profile-link">View Profile</a>
                        </div>
                    </div>
                    <div class="profile-rank-2 prp">
                        <span class="pr-number">
                            5
                        </span>
                        <div class="profile-rank-desc">
                            <img src={jane_doe} alt="" class="prd-img" />
                            <div class="prd-text">
                                <p>Kiran Acharys</p>
                            <p>Product Designer</p>
                            </div>
                        </div>
                        <div class="profile-ratings">
                            <p class="profile-rating-amount">
                                <small>spent: </small>$7,000</p>
                            <span class="pr-approx">
                                <img src={star_icon} alt="" />
                                <small>4.3</small>
                            </span>
                        </div>
                        <div class="profile-rank-description">
                            <span class="pd-location">
                                <img src={location} alt=""/>
                                <small>Germany</small>
                            </span>
                            <a href="javascript:void(0)" class="view-profile-link">View Profile</a>
                        </div>
                    </div>
                    <div class="profile-rank-3 prp">
                        <span class="pr-number">
                            6
                        </span>
                        <div class="profile-rank-desc">
                            <img 
                                src={jane_doe} 
                                alt="" 
                                class="prd-img"
                            />
                            <div class="prd-text">
                                <p>Kiran Acharys</p>
                            <p>Product Designer</p>
                            </div>
                        </div>
                        <div class="profile-ratings">
                            <p class="profile-rating-amount">
                                <small>spent: </small>$7,000</p>
                            <span class="pr-approx">
                                <img 
                                    src={star_icon} 
                                    alt=""
                                />
                                <small>4.3</small>
                            </span>
                        </div>
                        <div class="profile-rank-description">
                            <span class="pd-location">
                                <img src={location} alt=""/>
                                <small>Germany</small>
                            </span>
                            <a href="javascript:void(0)" class="view-profile-link">View Profile</a>
                        </div>
                    </div>
                    <div class="profile-rank-3 prp">
                        <span class="pr-number">
                            7
                        </span>
                        <div class="profile-rank-desc">
                            <img src={jane_doe} alt="" class="prd-img"/>
                            <div class="prd-text">
                                <p>Kiran Acharys</p>
                            <p>Product Designer</p>
                            </div>
                        </div>
                        <div class="profile-ratings">
                            <p class="profile-rating-amount">
                                <small>spent: </small>$7,000</p>
                            <span class="pr-approx">
                                <img src={jane_doe} alt="" />
                                <small>4.3</small>
                            </span>
                        </div>
                        <div class="profile-rank-description">
                            <span class="pd-location">
                                <img src={location} alt="" />
                                <small>Germany</small>
                            </span>
                            <a href="javascript:void(0)" class="view-profile-link">View Profile</a>
                        </div>
                    </div>
                    <div class="profile-rank-3 prp">
                        <span class="pr-number">
                            8
                        </span>
                        <div class="profile-rank-desc">
                            <img src={jane_doe}
                            alt="" class="prd-img" />
                            <div class="prd-text">
                                <p>Kiran Acharys</p>
                            <p>Product Designer</p>
                            </div>
                        </div>
                        <div class="profile-ratings">
                            <p class="profile-rating-amount">
                                <small>spent: </small>$7,000</p>
                            <span class="pr-approx">
                                <img src={star_icon} alt="" />
                                <small>4.3</small>
                            </span>
                        </div>
                        <div class="profile-rank-description">
                            <span class="pd-location">
                                <img src={location} alt="" />
                                <small>Germany</small>
                            </span>
                            <a href="javascript:void(0)" class="view-profile-link">View Profile</a>
                        </div>
                    </div>
                    <div class="profile-rank-3 prp">
                        <span class="pr-number">
                            9
                        </span>
                        <div class="profile-rank-desc">
                            <img src={jane_doe} alt="" class="prd-img" />
                            <div class="prd-text">
                                <p>Kiran Acharys</p>
                            <p>Product Designer</p>
                            </div>
                        </div>
                        <div class="profile-ratings">
                            <p class="profile-rating-amount">
                                <small>spent: </small>$7,000</p>
                            <span class="pr-approx">
                                <img src={star_icon} alt="" />
                                <small>4.3</small>
                            </span>
                        </div>
                        <div class="profile-rank-description">
                            <span class="pd-location">
                                <img src={location} alt="" />
                                <small>Germany</small>
                            </span>
                            <a href="javascript:void(0)" class="view-profile-link">View Profile</a>
                        </div>
                    </div>
                </div>
                <section class="badges-space">
                    <h2 class="bs-subheading">
                        Badges Earned
                    </h2>
                    <div class="badge-list">
                        <span>
                            <img src={badge_1} alt="" />
                            <p>Elite Level</p>
                        </span>
                        <span>
                            <img src={badge_2} alt="" />
                            <p>Elite Level</p>
                        </span>
                        <span>
                            <img src={badge_3} alt="" />
                            <p>Elite Level</p>
                        </span>
                        <span>
                            <img src={badge_4} alt="" />
                            <p>Elite Level</p>
                        </span>
                        <span>
                            <img src={badge_5} alt="" />
                            <p>Elite Level</p>
                        </span>
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}
