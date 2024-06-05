import React, { useState } from 'react'
import plus from "../assets/afren-images/Plus.svg"
import minus from "../assets/afren-images/Cross.svg"


export default function Gig2({setCount, gigInfo, setGigInfo }) {
    const [popularSkill, setPopularSkill] = useState([
        "User Interface Design",
        "Motion design",
        "Wordpress",
        "Javascript",
        "Python"
    ])
    const { skills } = gigInfo
    const [selectedSkill, setSelectedSkill] = useState([])
    function handleSubmit(e){
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        setGigInfo({
            ...gigInfo,
            skills : `${selectedSkill}`
        })
        setCount(3);
    }

    function handleClick(skill){
        const popular_skill = popularSkill.find(Skill => Skill === skill)
        const filteredPopularSkill = popularSkill.filter(skill => skill !== popular_skill)
    
        setPopularSkill(filteredPopularSkill)
        setSelectedSkill([
          ...selectedSkill,
          popular_skill
        ])
      }

    function handleClick2(skill){
        const skilll = selectedSkill.find(Skill => Skill === skill)
        const filterSkills = selectedSkill.filter((Skill,index)=> Skill != skill)
        setSelectedSkill(filterSkills)
        if( skilll === "User Interface Design" || skilll === "Motion design" || skilll === "Javascript" || skilll === "Python" || skilll === "Wordpress"){
          setPopularSkill([
            ...popularSkill,
            skilll
          ])
        }
      
      }

  return (
    <>
        <h1 className="step-h1">
            Skills required for the work
        </h1>
        <p className="description">
            What are the main skills required for the work
        </p>
        <form action="" onSubmit={handleSubmit} className='gig-form'>
            <div className="step-form-div">
                <label for="">
                    Search skills or add your own
                </label>
                <input type="search" placeholder="Add skills required on the work"/>
            </div>
            <p className='gig-recommendation'>For the best results, add 3-5 skills</p>
            
            <div className="step-skills">
                <section>
                    <p>Selected Skills</p>
                    <div className="step-skills-space s1">
                        {
                            selectedSkill.map((skill,index)=>{
                                return (
                                    <div key={index} className="skill">
                                        <p>{skill}</p>
                                        <img onClick={()=> handleClick2(skill)} src={minus} alt=""/>
                                    </div>             
                                )
                            })
                        }
                        {/* <div className="skill">
                            <p>UX design</p>
                            <img src="afren-images/cancell.png" alt=""/>
                        </div>
                        <div className="skill">
                            <p>Wordpress</p>
                            <img src="afren-images/cancell.png" alt=""/>
                        </div>
                        <div className="skill">
                            <p>User Interface Design</p>
                            <img src="afren-images/cancell.png" alt=""/>
                        </div>
                        <div className="skill">
                            <p>Wordpress</p>
                            <img src="afren-images/cancell.png" alt=""/>
                        </div> */}
                    </div>
                </section>
                <section>
                    <p>Popular Skills</p>
                    <div className="step-skills-space s2">
                        {
                            popularSkill.map((skill,index)=>{
                                return (
                                    <div key={index} className="skill">
                                        <p>{skill}</p>
                                         <img onClick={()=>handleClick(skill)} src={plus} alt=""/>
                                    </div>
                                )
                            })
                        }
                        {/* <div className="skill">
                            <p>User Interface Design</p>
                            <img src="afren-images/Plus.svg" alt=""/>
                        </div>
                        <div className="skill">
                            <p>Motion design</p>
                            <img src="afren-images/Plus.svg" alt=""/>
                        </div>
                        <div className="skill">
                            <p>Wordpress</p>
                            <img src="afren-images/Plus.svg" alt=""/>
                        </div>
                        <div className="skill">
                            <p>Wordpress</p>
                            <img src="afren-images/Plus.svg" alt=""/>
                        </div>
                        <div className="skill">
                            <p>Wordpress</p>
                            <img src="afren-images/Plus.svg" alt=""/>
                        </div> */}
                    </div>
                </section>
            </div>
            <button className="step-btn" >
                Next: scope
            </button>
        </form>
    </>
  )
}
