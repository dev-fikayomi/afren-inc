import React from 'react'
import Navbar from "../Components/Navbar"
import JoinUs from '../Components/JoinUs'
import Footer from '../Components/Footer'
// import "../Styles/Blog.css"
import "../style.css"
import rect from "../assets/afren-images2/Rectangle 2.png"
import rect1 from "../assets/afren-images2/Rectangle 2-1.png"
import rect2 from "../assets/afren-images2/Rectangle 2-2.png"
import rect3 from "../assets/afren-images2/Rectangle 2-3.png"
import rect4 from "../assets/afren-images2/Rectangle 2-4.png"
import rect5 from "../assets/afren-images2/Rectangle 2-5.png"
import rect6 from "../assets/afren-images2/Rectangle 2-6.png"


export default function Blog() {
  return (
    <>
      <Navbar />
      <div id="body-whole">
        <div id="top-whole">
            <div id="top-article">
                <p className="article-head">FEATURED ARTICLE</p>
                <h2 className="article-topic">Success Stories from Our Community.</h2>
                <p className="article-writer">Ralph Hawkins <span>.</span><span>May 7, 2023 (10 mins read)</span></p>
                <p className="article-content">Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.</p>
            </div>
        </div>
        <div id="sec-whole2">
            <div id="articles">
                <div className="individual-atcle">
                    <img className="atcle-image" src={rect} alt="" />
                    <div className="whole-atcle-contect">
                        <p className="article-head">FREELANCING TIPS</p>
                        <h2 className="article-topic">Tips for Scaling Your Business on Afren</h2>
                        <p className="article-writer">Ralph Hawkins <span>.</span><span>May 7, 2023 (10 mins read)</span></p>
                        <p className="article-content">Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute ex officia pariatur irure.</p>
                    </div>
                </div>
                <div className="individual-atcle">
                    <img className="atcle-image" src={rect1} alt="" />
                    <div className="whole-atcle-contect">
                        <p className="article-head">REMOTE WORK</p>
                        <h2 className="article-topic">The Future of Remote Work</h2>
                        <p className="article-writer">Ralph Hawkins <span>.</span><span>May 7, 2023 (10 mins read)</span></p>
                        <p className="article-content">Qui ipsum consectetur ad incididunt et aliquip exercitation laboris nisi reprehenderit. Et excepteur commodo esse enim ea aliqua officia reprehenderit.</p>
                    </div>
                </div>
                <div className="individual-atcle">
                    <img className="atcle-image" src={rect2} alt="" />
                    <div className="whole-atcle-contect">
                        <p className="article-head">ENTREPRENEURSHIP</p>
                        <h2 className="article-topic">From Freelancer to Entrepreneur</h2>
                        <p className="article-writer">Ralph Hawkins <span>.</span><span>May 7, 2023 (10 mins read)</span></p>
                        <p className="article-content">Amet ipsum occaecat aliqua aute nisi laboris nostrud culpa est do. Aliqua esse velit in excepteur esse qui voluptate laboris adipisicing qui irure elit amet excepteur.</p>
                    </div>
                </div>
                <div className="individual-atcle">
                    <img className="atcle-image" src={rect3} alt="" />
                    <div className="whole-atcle-contect">
                        <p className="article-head">CAREER DEVELOPMENT</p>
                        <h2 className="article-topic">Acquiring In-Demand Skills</h2>
                        <p className="article-writer">Ralph Hawkins <span>.</span><span>May 7, 2023 (10 mins read)</span></p>
                        <p className="article-content">Amet ipsum occaecat aliqua aute nisi laboris nostrud culpa est do. Aliqua esse velit in excepteur esse qui voluptate laboris adipisicing qui irure elit amet excepteur.</p>
                    </div>
                </div>
            </div>
            <div id="tags">
                <h3>tags.</h3>
                <div id="tag-links">
                    <a href="">Freelancing Tips</a>
                    <a href="">Remote Work</a>
                    <a href="">Entrepreneurship</a>
                    <a href="">Career Development</a>
                    <a href="">Work-Life Balance</a>
                    <a href="">Digital Marketing</a>
                    <a href="">Web Developement</a>
                    <a href="">Graphic Design</a>
                    <a href="">Skill Development</a>
                    <a href="">Productivity Hacks</a>
                    <a href="">Web Technologies</a>
                    <a href="">Career</a>
                    <a href="">Life</a>
                    <a href="">Spirituality</a>
                    <a href="">Food</a>
                    <a href="">Cooking</a>
                    <a href="">Financial Management</a>
                </div>
            </div>
        </div>
        <div id="secnd-hero" style={{ backgroundImage: "url('Article\ Image.png')" }}>
            <div id="hero-artcle">
                <p className="article-head">FREELANCE SUCCESS STORIES</p>
                <h2 className="article-topic">How Afren Empowers Freelancers</h2>
                <p className="article-writer">Ralph Hawkins <span>.</span><span>May 7, 2023 (10 mins read)</span></p>
                <p className="article-content">Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.</p>
            </div>
        </div>
        <div id="editors-picks">
            <h2 id='editors-cent-text'>Editor's Picks</h2>
            <div className="picked-articles">
                <img className="picked-image" src={rect6} alt="" />
                <div className="whole-atcle-contect">
                    <p className="article-head">DIGITAL MARKETING</p>
                    <h2 className="article-topic">Building Your Personal Brand on Afren</h2>
                    <p className="article-writer">Ralph Hawkins <span>.</span><span>May 7, 2023 (10 mins read)</span></p>
                    <p className="article-content">Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.</p>
                </div> 
            </div>
            <div className="picked-articles">
                <img className="picked-image" src={rect5} alt="" />
                <div className="whole-atcle-contect">
                    <p className="article-head">WEB DEVELOPMENT</p>
                    <h2 className="article-topic">Top Trends and Tools for Freelancers on Afren</h2>
                    <p className="article-writer">Ralph Hawkins <span>.</span><span>May 7, 2023 (10 mins read)</span></p>
                    <p className="article-content">Sint anim Lorem aute duis Lorem incididunt. Nulla nostrud irure id ipsum aute excepteur duis sint. Do occaecat sit dolor magna esse. Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem. Deserunt non duis excepteur aliqua duis eu reprehenderit.</p>
                </div> 
            </div>
            <div className="picked-articles">
                <img className="picked-image" src={rect4} alt="" />
                <div className="whole-atcle-contect">
                    <p className="article-head">ARTICLE</p>
                    <h2 className="article-topic">Dolor ex Tempor Cotur Culpa li</h2>
                    <p className="article-writer">Ralph Hawkins <span>.</span><span>May 7, 2023 (10 mins read)</span></p>
                    <p className="article-content">Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.</p>
                </div> 
            </div>
        </div>
    </div>
      <JoinUs />
      <Footer />
    </>
  )
}
