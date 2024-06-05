/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
// import "../Styles/sett-afr-pf.css"
import "../style.css"
import ellipse from "../assets/afren-images2/Ellipse 31.png"
import badge from "../assets/afren-images2/Badge.png"
import rect from "../assets/afren-images2/Rectangle 34624338.png"
import rect2 from "../assets/afren-images2/Rectangle 34624339.png"
import rect3 from "../assets/afren-images2/Rectangle 34624273.png"
import ellipse2 from "../assets/afren-images2/Ellipse 36.png"

const API_URL = 'https://afren-main-server.onrender.com/api/freelancerWorkHistory';
const API_URL2 = 'https://afren-main-server.onrender.com/api/getFreelancer';

const token = sessionStorage.getItem("token")

export default function SettingProfile() {

    const [workHistory, setWorkHistory] = useState([]);
    const [freelancerData, setFreelancerData] = useState({});



    useEffect(() => {
        const fetchWorkHistory = async () => {
            try {
                const response = await fetch(API_URL, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setWorkHistory(data);
            } catch (error) {
                console.error('Error fetching work history:', error);
            }
        };

        fetchWorkHistory();
    }, []);

    useEffect(() => {
        const fetchFreelancerData = async () => {
            try {
                const response = await fetch(API_URL2, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setFreelancerData(data);
            } catch (error) {
                console.error('Error fetching freelancer data:', error);
            }
        };

        fetchFreelancerData();
    }, []);


    return (
        <div id="main">
            <div id="main-inner">
                <div id="main-left">
                    <div id="user-info-cover">
                        <div id="user-info">
                            <div id="online-ba">
                                <div id="onl-dot"></div>
                                <p>{freelancerData.isAvailable ? 'Offline' : 'Online'}</p>
                            </div>
                            <div id="prof-pic2">
                                <img src={ellipse} alt="" />
                            </div>
                            <div id="us-name">
                                <h3>{`${freelancerData.firstName} ${freelancerData.lastName}`}</h3>
                                <div id="user-lvl"><img src={badge} alt="" /> <span>{freelancerData.professionalInfo ? (
                                    <p>{freelancerData.professionalInfo[0]?.skillLevel}</p>
                                ) : (
                                    <p></p>
                                )}
</span></div>
                            </div>
                            <div id="user-skl-pay">
                                {freelancerData.professionalInfo ? (
                                    <p>{freelancerData.professionalInfo[0]?.profession}</p>
                                ) : (
                                    <p></p>
                                )}

                                <p><strong>$25.00/hr</strong></p>
                            </div>
                            {/* <div id="contact-butts">
                                <a href="javascript:void(0)" className="ctact-butt cntct">Contact Me</a>
                                <a href="javascript:void(0)" className="ctact-butt">Get a Quote</a>
                            </div> */}
                        </div>
                        <div id="evaluation">
                            <div className="each-total">
                                <h3>$70K+</h3>
                                <p>Total Earnings</p>
                            </div>
                            <div className="each-total">
                                <h3>155</h3>
                                <p>Total Jobs</p>
                            </div>
                            <div className="each-total">
                                <h3>2,961</h3>
                                <p>Total Hours</p>
                            </div>
                        </div>
                        <div id="prof-tbl">
                            <table>
                                <tr>
                                    <th>Location</th>
                                    <td>{freelancerData.city}, {freelancerData.state}, {freelancerData.country}</td>
                                </tr>
                                <tr>
                                    <th>Member Since</th>
                                    <td>{new Date(freelancerData.createdAt).toLocaleDateString()}</td>
                                </tr>
                                <tr>
                                    <th>Avg Response Time</th>
                                    <td>2 Hrs</td>
                                </tr>
                                <tr>
                                    <th>Recent Delivery</th>
                                    <td>5 days</td>
                                </tr>
                            </table>
                            <div id="report-acc">
                                <i className="fas fa-flag"></i>
                                <a href="">Report this account</a>
                            </div>
                        </div>
                    </div>
                    <div id="about">
                        <h3>About</h3>
                        <p>I am a passionate blah blah blah, God I’m exhausted. I am a passionate blah blah blah, God I’m exhausted I am a passionate blah blah blah, God I’m exhausted I am a passionate blah blah blah, God I’m exhausted I am a passionate blah blah blah, God I’m exhausted </p>
                        <a href="" className="more">more...</a>
                        <h3>Portfolio website</h3>
                        {freelancerData.socialMediaLinks ? (
                            <a href={freelancerData.socialMediaLinks[0] || 'javascript:void(0)'} className="prtflio-link">
                                <i className="fas fa-link"></i>
                                <p>{freelancerData.socialMediaLinks[0] ? freelancerData.socialMediaLinks[0] : 'No Link Available'}</p>
                            </a>
                        ) : (
                            <p></p>
                        )}

                        <h3>Socials</h3>
                        {freelancerData.socialMediaLinks ? (
                            <a href={freelancerData.socialMediaLinks[0] || 'javascript:void(0)'} className="socials-link">
                                <i className="fab fa-linkedin-in"></i>
                                <p>{freelancerData.socialMediaLinks[0] ? freelancerData.socialMediaLinks[0] : 'No Link Available'}</p>
                            </a>
                        ) : (
                            <p>Loading portfolio link...</p>
                        )}

                        {freelancerData.socialMediaLinks ? (
                            <a href={freelancerData.socialMediaLinks[1] || 'javascript:void(0)'} className="socials-link">
                                <i className="fab fa-twitter"></i>
                                <p>{freelancerData.socialMediaLinks[1] ? freelancerData.socialMediaLinks[1] : 'No Link Available'}</p>
                            </a>
                        ) : (
                            <p>Loading portfolio link...</p>
                        )}

                        {freelancerData.socialMediaLinks ? (
                            <a href={freelancerData.socialMediaLinks[2] || 'javascript:void(0)'} className="socials-link">
                                <i className="fab fa-facebook-f"></i>
                                <p>{freelancerData.socialMediaLinks[2] ? freelancerData.socialMediaLinks[2] : 'No Link Available'}</p>
                            </a>
                        ) : (
                            <p>Loading portfolio link...</p>
                        )}

                    </div>
                    <div id="ski-ed-whole">
                        <div className="ski-ed-header">
                            <h3>Skills</h3>
                            <i className="fas fa-pen"></i>
                        </div>
                        {freelancerData.professionalInfo ? (
                            <div id="skils">
                                {freelancerData.professionalInfo[0]?.skills.map((skill, index) => (
                                    <div key={index} className="idvdual-skill">{skill}</div>
                                ))}
                            </div>
                        ) : (
                            <p></p>
                        )}
                        <div className="ski-ed-header">
                            <h3>Education</h3>
                            <i className="fas fa-pen"></i>
                        </div>
                        {freelancerData.educationalInfo ? (
                            freelancerData.educationalInfo.map((education) => (
                                <div key={education.id} className="edu-info">
                                    <h3>{education.schoolName}</h3>
                                    <p>{education.country}</p>
                                    <p>{education.educationalLevel} in {education.schoolName}</p>
                                    <p className="edu-year">{education.startDate} - {education.endDate}</p>
                                </div>
                            ))
                        ) : (
                            <p></p>
                        )}
                        <h3 id="cert">Certificates</h3>
                        <div id="certificates">
                            <img src={rect} alt="" />
                            <img src={rect2} alt="" />
                        </div>
                    </div>
                </div>
                <div id="main-right">
                    

                        {/* <div id="page-num-cover">
                            <ul id="page-num">
                                <li className="page pg-more"><a href="javascript:void(0)">First</a></li>
                                <li className="page pg active"><a href="javascript:void(0)">1</a></li>
                                <li className="page pg"><a href="javascript:void(0)">2</a></li>
                                <li className="page pg"><a href="javascript:void(0)">3</a></li>
                                <li className="page pg"><a href="javascript:void(0)">4</a></li>
                                <li className="page pg-more"><a href="javascript:void(0)">Last</a></li>
                            </ul>
                        </div> */}
                    <div id="feat-wrk">
                        <h3>Featured Work</h3>
                        <div id="worked-prj">
                            <div className="prj-div">
                                <div className="prj-client-info">
                                    <div className="prj-client-prf">
                                        <div className="prj-client-pic">
                                            <img src={rect3} alt="" /></div>
                                        <div>
                                            <p>Alexander willians</p>
                                            <span>Updated 10m ago</span>
                                        </div>
                                    </div>
                                    <div className="prj-skill">Design</div>
                                </div>
                                <p className="prj-title">Need a designer to form a design system for my business</p>
                                <p className="prj-desc">Looking for a talented product designer. Looking for a talented product designer, Looking for a talented product designer</p>
                                <p className="star"><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i></p>
                            </div>
                            <div className="prj-div">
                                <div className="prj-client-info">
                                    <div className="prj-client-prf">
                                        <div className="prj-client-pic">
                                            <img src={rect3} alt="" /></div>
                                        <div>
                                            <p>Alexander willians</p>
                                            <span>Updated 10m ago</span>
                                        </div>
                                    </div>
                                    <div className="prj-skill">Design</div>
                                </div>
                                <p className="prj-title">Need a designer to form a design system for my business</p>
                                <p className="prj-desc">Looking for a talented product designer. Looking for a talented product designer, Looking for a talented product designer</p>
                                <p className="star"><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i></p>
                            </div>
                            <div className="prj-div">
                                <div className="prj-client-info">
                                    <div className="prj-client-prf">
                                        <div className="prj-client-pic">
                                            <img src={rect3} alt="" /></div>
                                        <div>
                                            <p>Alexander willians</p>
                                            <span>Updated 10m ago</span>
                                        </div>
                                    </div>
                                    <div className="prj-skill">Design</div>
                                </div>
                                <p className="prj-title">Need a designer to form a design system for my business</p>
                                <p className="prj-desc">Looking for a talented product designer. Looking for a talented product designer, Looking for a talented product designer</p>
                                <p className="star"><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i></p>
                            </div>
                            <div className="prj-div">
                                <div className="prj-client-info">
                                    <div className="prj-client-prf">
                                        <div className="prj-client-pic">
                                            <img src={rect3} alt="" /></div>
                                        <div>
                                            <p>Alexander willians</p>
                                            <span>Updated 10m ago</span>
                                        </div>
                                    </div>
                                    <div className="prj-skill">Design</div>
                                </div>
                                <p className="prj-title">Need a designer to form a design system for my business</p>
                                <p className="prj-desc">Looking for a talented product designer. Looking for a talented product designer, Looking for a talented product designer</p>
                                <p className="star"><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
