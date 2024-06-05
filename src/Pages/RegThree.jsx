import React, { useState } from 'react'
import Header from '../Components/Navbar'
import plus from "../assets/afren-images/Plus.svg"
import cross from "../assets/afren-images/Cross.svg"
import axios from "axios";
import Swal from "sweetalert2";
import { Oval } from  'react-loader-spinner'
import { useNavigate } from 'react-router-dom';

// import '../Styles/regthree.css'

const ENDPOINT = "https://afren-server-kjt8.onrender.com/api/registerFreelancer"
const token = sessionStorage.getItem("token") 

export default function RegThree({func, educationInfo, formObj}) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [inputEls, setInputEls] = useState([])
  const [popularSkill, setPopularSKill] = useState([
    "Wordpress", "javascript", "jquery", "python" 
  ])
  const [addSkill,setAddSkill] = useState("")
  const [selectedSkills, setSelectedSkills] = useState([])
  const [professionalInfo,setProfessionalInfo] = useState({
    profession : "",
    skillLevel : "",
    experience : "",
    certification: "XYZ Certification",
    skills : [],
    portfolioLink : ''
})

  const {
    profession,
    skillLevel,
    experience,
    skills,
    portfolioLink
  } = professionalInfo

  function changeHandler(e){
    const {value,name} = e.target;
    setProfessionalInfo({
      ...professionalInfo,
      [name] : value
    })
  }

  function handleClick(){
    if(!addSkill) return 
    setSelectedSkills([
      ...selectedSkills,
      addSkill
    ])
    setAddSkill("")
  }
  function handleClick2(skill){
    const skilll = selectedSkills.find(Skill => Skill === skill)
    const filterSkills = selectedSkills.filter((Skill,index)=> Skill != skill)
    setSelectedSkills(filterSkills)
    if( skilll === "Wordpress" || skilll === "javascript" || skilll === "jquery" || skilll === "python"){
      setPopularSKill([
        ...popularSkill,
        skilll
      ])
    }
  
  }
  function handleClick3(skill){
    const popular_skill = popularSkill.find(Skill => Skill === skill)
    const filteredPopularSkill = popularSkill.filter(skill => skill !== popular_skill)

    setPopularSKill(filteredPopularSkill)
    setSelectedSkills([
      ...selectedSkills,
      popular_skill
    ])
  }
  function handleClick4(){
    if(inputEls.length == 2) return 
    setInputEls([
      ...inputEls,
      `input${inputEls.length}`
    ])
  }

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    func(4)
    setProfessionalInfo({
      ...professionalInfo,
      skills : [...selectedSkills]
    })

    const socialMediaNodelist = document.querySelectorAll(".social-input")
    const socialMediaArray = []
    
    socialMediaNodelist.forEach((edulevel,index)=>{
      socialMediaArray.push(edulevel.value)
    })

    const payload = {
      ...formObj,
      educationalInfo : [educationInfo],
      professionalInfo : [professionalInfo],
      socialMediaLinks : socialMediaArray
    }


    try{
      await axios.post(ENDPOINT,payload,{
        headers : {
          Authorization : token
        }
      })
      setLoading(false)
      Swal.fire({
        icon: 'success',
        title: 'succesfully registered as a freelancer',
        text: 'Welcome to Afren!!'
      }).then(()=>navigate("/freelancerdash"))
    }
    catch(error){
      setLoading(false)
      Swal.fire({
        icon: 'error',
        title: 'unable to register',
        text: 'Something went wrong!'
      })
    }

  }

  return (
    <>
            <form className='regthree' action="">
                <h4>Professional Info</h4>
                <select  value={profession} onChange={changeHandler} name="profession" class="form-control dropdown" id="occupation">
                    <option 
                      selected="selected" 
                      disabled="disabled"
                    >--select one--</option>
                    <optgroup label="Healthcare Practitioners and Technical Occupations:">
                      <option value="Chiropractor">-  Chiropractor</option>
                      <option value="Dentist">-  Dentist</option>
                      <option value="Dietitian or Nutritionist">-  Dietitian or Nutritionist</option>
                      <option value="Optometrist">-  Optometrist</option>
                      <option value="Pharmacist">-  Pharmacist</option>
                      <option value="Physician">-  Physician</option>
                      <option value="Physician Assistant">-  Physician Assistant</option>
                      <option value="Podiatrist">-  Podiatrist</option>
                      <option value="Registered Nurse">-  Registered Nurse</option>
                      <option value="Therapist">-  Therapist</option>
                      <option value="Veterinarian">-  Veterinarian</option>
                      <option value="Health Technologist or Technician">-  Health Technologist or Technician</option>
                      <option value="Other Healthcare Practitioners and Technical Occupation">- Other Healthcare Practitioners and Technical Occupation</option>
                    </optgroup>
                    <optgroup label="Healthcare Support Occupations:">
                      <option value="Nursing, Psychiatric, or Home Health Aide">-  Nursing, Psychiatric, or Home Health Aide</option>
                      <option value="Occupational and Physical Therapist Assistant or Aide">-  Occupational and Physical Therapist Assistant or Aide</option>
                      <option value="Other Healthcare Support Occupation">-  Other Healthcare Support Occupation</option>
                    </optgroup>
                    <optgroup label="Business, Executive, Management, and Financial Occupations:">
                      <option value="Chief Executive">-  Chief Executive</option>
                      <option value="General and Operations Manager">-  General and Operations Manager</option>
                      <option value="Advertising, Marketing, Promotions, Public Relations, and Sales Manager">-  Advertising, Marketing, Promotions, Public Relations, and Sales Manager</option>
                      <option value="Operations Specialties Manager (e.g., IT or HR Manager)">-  Operations Specialties Manager (e.g., IT or HR Manager)</option>
                      <option value="Construction Manager">-  Construction Manager</option>
                      <option value="Engineering Manager">-  Engineering Manager</option>
                      <option value="Accountant, Auditor">-  Accountant, Auditor</option>
                      <option value="Business Operations or Financial Specialist">-  Business Operations or Financial Specialist</option>
                      <option value="Business Owner<">-  Business Owner</option>
                      <option value="Other Business, Executive, Management, Financial Occupation">-  Other Business, Executive, Management, Financial Occupation</option>
                    </optgroup>
                    <optgroup label="Architecture and Engineering Occupations:">
                      <option value="Architect, Surveyor, or Cartographer">-  Architect, Surveyor, or Cartographer</option>
                      <option value="Engineer">-  Engineer</option>
                      <option value="Other Architecture and Engineering Occupation">-  Other Architecture and Engineering Occupation</option>
                    </optgroup>
                    <optgroup label="Education, Training, and Library Occupations:">
                      <option value="Postsecondary Teacher (e.g., College Professor)">-  Postsecondary Teacher (e.g., College Professor)</option>
                      <option value="Primary, Secondary, or Special Education School Teacher">-  Primary, Secondary, or Special Education School Teacher</option>
                      <option value="Other Teacher or Instructor">-  Other Teacher or Instructor</option>
                      <option value="Other Education, Training, and Library Occupation<">-  Other Education, Training, and Library Occupation</option>
                    </optgroup>
                    <optgroup label="Other Professional Occupations:">
                      <option value="Arts, Design, Entertainment, Sports, and Media Occupations">-  Arts, Design, Entertainment, Sports, and Media Occupations</option>
                      <option value="Computer Specialist, Mathematical Science">-  Computer Specialist, Mathematical Science</option>
                      <option value="Counselor, Social Worker, or Other Community and Social Service Specialist">-  Counselor, Social Worker, or Other Community and Social Service Specialist</option>
                      <option value="Lawyer, Judge">-  Lawyer, Judge</option>
                      <option value="Life Scientist (e.g., Animal, Food, Soil, or Biological Scientist, Zoologist)">-  Life Scientist (e.g., Animal, Food, Soil, or Biological Scientist, Zoologist)</option>
                      <option value="Physical Scientist (e.g., Astronomer, Physicist, Chemist, Hydrologist)">-  Physical Scientist (e.g., Astronomer, Physicist, Chemist, Hydrologist)</option>
                      <option value="Religious Worker (e.g., Clergy, Director of Religious Activities or Education)">-  Religious Worker (e.g., Clergy, Director of Religious Activities or Education)</option>
                      <option value="Social Scientist and Related Worker">-  Social Scientist and Related Worker</option>
                      <option value="Other Professional Occupation">-  Other Professional Occupation</option>
                    </optgroup>
                    <optgroup label="Office and Administrative Support Occupations:">
                      <option value="Supervisor of Administrative Support Workers">-  Supervisor of Administrative Support Workers</option>
                      <option value="Financial Clerk">-  Financial Clerk</option>
                      <option value="Secretary or Administrative Assistant">-  Secretary or Administrative Assistant</option>
                      <option value="Material Recording, Scheduling, and Dispatching Worker">-  Material Recording, Scheduling, and Dispatching Worker</option>
                      <option value="Other Office and Administrative Support Occupation">-  Other Office and Administrative Support Occupation</option>
                    </optgroup>
                    <optgroup label="Services Occupations:">
                      <option value="Protective Service (e.g., Fire Fighting, Police Officer, Correctional Officer)">-  Protective Service (e.g., Fire Fighting, Police Officer, Correctional Officer)</option>
                      <option value="Chef or Head Cook">-  Chef or Head Cook</option>
                      <option value="Cook or Food Preparation Worker">-  Cook or Food Preparation Worker</option>
                      <option value="Food and Beverage Serving Worker (e.g., Bartender, Waiter, Waitress)">-  Food and Beverage Serving Worker (e.g., Bartender, Waiter, Waitress)</option>
                      <option value="Building and Grounds Cleaning and Maintenance">-  Building and Grounds Cleaning and Maintenance</option>
                      <option value="Personal Care and Service (e.g., Hairdresser, Flight Attendant, Concierge)">-  Personal Care and Service (e.g., Hairdresser, Flight Attendant, Concierge)</option>
                      <option value="Sales Supervisor, Retail Sales">-  Sales Supervisor, Retail Sales</option>
                      <option value="Retail Sales Worker">-  Retail Sales Worker</option>
                      <option value="Insurance Sales Agent">-  Insurance Sales Agent</option>
                      <option value="Sales Representative">-  Sales Representative</option>
                      <option value="Real Estate Sales Agent">-  Real Estate Sales Agent</option>
                      <option value="Other Services Occupation">-  Other Services Occupation</option>
                    </optgroup>
                    <optgroup label="Agriculture, Maintenance, Repair, and Skilled Crafts Occupations:">
                      <option value="Construction and Extraction (e.g., Construction Laborer, Electrician)">-  Construction and Extraction (e.g., Construction Laborer, Electrician)</option>
                      <option value="Farming, Fishing, and Forestry">-  Farming, Fishing, and Forestry</option>
                      <option value="Installation, Maintenance, and Repair">-  Installation, Maintenance, and Repair</option>
                      <option value="Production Occupations">-  Production Occupations</option>
                      <option value="Other Agriculture, Maintenance, Repair, and Skilled Crafts Occupation">-  Other Agriculture, Maintenance, Repair, and Skilled Crafts Occupation</option>
                    </optgroup>
                    <optgroup label="Transportation Occupations:">
                      <option value="Aircraft Pilot or Flight Engineer">-  Aircraft Pilot or Flight Engineer</option>
                      <option value="Motor Vehicle Operator (e.g., Ambulance, Bus, Taxi, or Truck Driver)">-  Motor Vehicle Operator (e.g., Ambulance, Bus, Taxi, or Truck Driver)</option>
                      <option value="Other Transportation Occupation">-  Other Transportation Occupation</option>
                    </optgroup>
                    <optgroup label="Other Occupations:">
                      <option value="Military">-  Military</option>
                      <option value="Homemaker">-  Homemaker</option>
                      <option value="Other Occupation">-  Other Occupation</option>
                      <option value="Don't Know">-  Don't Know</option>
                      <option value="Not Applicable">-  Not Applicable</option>
                    </optgroup>
                </select>
                <select value={skillLevel} name='skillLevel' onChange={changeHandler}>
                    <option value="" disabled="disabled">Skill Level</option>
                    <option value="Expert">Expert</option>
                    <option value="Proficient">Proficient</option>
                    <option value="Novice">Novice</option>
                </select>
                <input 
                  type="text"
                  name='experience'
                  value={experience}
                  onChange={changeHandler}
                  id="" 
                  class="form-text" 
                  placeholder="Years of experience"
                  ></input>
                <h4>Additional skills</h4>
                <div id="add-sk">
                    <input 
                      type="text"
                      value={addSkill} 
                      id="ski-text" 
                      onChange={(e)=> setAddSkill(e.target.value)}
                      placeholder="Add skills"
                    ></input>
                    <div id="skill-add" onClick={handleClick} >Add</div>
                </div>
                <div class="skills">
                    <section className='skills-section'>
                        <p>Selected Skills</p>
                        <div class="select s1" id="selected">
                            {
                              selectedSkills.map((skill, index)=>{
                                return (
                                  <div key={index} className="skill cross">
                                    <p>{skill}</p>
                                    <img onClick={()=> handleClick2(skill)} class="" src={cross} alt=""/>
                                  </div>
                                )
                              })
                            }
                        </div>
                    </section>
                    <section className='skills-section'>
                        <p>Popular Skills</p>
                        <div class="select s2" id="popular-sk">
                          {
                            popularSkill.map((skill,index)=>{
                              return (
                                <div key={index} class="skill pl">
                                  <p>{skill}</p>
                                  <img class="plus" 
                                    onClick={()=>handleClick3(skill)} src={plus} alt=""/>
                                </div>    
                              )
                            })
                          }
                        </div>
                    </section>
                </div>
                <h4>Certifications</h4>
                <p id="cert-text">This helps you build trust with your clients</p>
                <input type="file" multiple="true" name="" id="file-upload"></input>
                <div id="cert-div"></div>
                <h4>Portfolio Link (optional)</h4>
                <input 
                  type="url" 
                  id=""
                  name='portfolioLink'
                  value={portfolioLink}
                  onChange={changeHandler} 
                  class="form-text" 
                  placeholder="Enter full URL"
                ></input>
                <h4>Social Media</h4>
                <input 
                  type="url" 
                  id="" 
                  class="form-text social-input" 
                  placeholder="Enter full URL"></input>
                <div id="extra-url">
                    {
                      inputEls.map((input,index)=>{
                        return (
                          <input 
                          key={index} 
                          id={input} 
                          class="form-text social-input" 
                          placeholder="Enter full URL" />
                        )
                      })
                    }
                </div>
                <div class="form-innerdiv">
                    <input 
                      type="url" 
                      id="last-url" 
                      class="form-text social-input" 
                      placeholder="Enter full URL"></input>
                    <div id="add-url" onClick={handleClick4} >+</div>
                </div>
                <div id="next-but3">
                    <a href="#" onClick={()=>func(2)}>Back</a>
                    <div id="complete-but3"  onClick={handleSubmit}>
                    {loading
                    ? (
                      <Oval
                        height={25}
                        width={25}
                        color="#fff"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#015B7E"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                      />
                  )
                  : "Complete my registration"}
                    </div>
                </div>
            </form>
    </>
  )
}
