import React, { useEffect, useState } from "react";
// import "../Styles/ClientReg.css";
import "../style.css"
import Header from "../Components/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { Oval } from  'react-loader-spinner'
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const endpoint = "https://afren-server-kjt8.onrender.com/api/registerClient"

export default function ClientReg() {
  const navigate = useNavigate()
  const [ socials,setSocials] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [maxSocialLinks, setMaxsocailLinks] = useState(false)
  const [isbuttonDisabled, setIsbuttonDisabled] = useState(true)
  const [formObj, setFormObj] = useState({
    companyName : "",
    companyEmail : "",
    companyAddress : "",
    residentialAddress : "",
    city : "",
    state : "",
    zipCode : "",
    country : "",
    occupation : "",
    phoneNumber : "",
    educationLevel : "",
    maritalStatus : "",
    monthlyIncome : "",
    socialMediaLinks: ""
  })

  const {
    companyName,
    companyEmail,
    companyAddress,
    residentialAddress,
    city,
    state,
    zipCode,
    country,
    occupation,
    phoneNumber,
    educationLevel,
    maritalStatus,
    monthlyIncome,
    socialMediaLinks
  } = formObj

  function handleChange(e){
    const {name, value} = e.target

    setFormObj({
      ...formObj,
      [name] : value
    })

  }

  function handleClick(){
    setSocials((prev)=>{
      if(prev.length === 1){
        setMaxsocailLinks(true)
        // return prev
      }
      return [
      ...socials,
      `social${socials.length + 1}`
    ]
  })
  }

  function handleClick2(){
    const newSocials = socials.filter((social,index)=>{
      return social != `social${socials.length}`
    })
    setSocials((prev)=>{
      if(prev.length == 1){
        setMaxsocailLinks(false)
        return []
      }
      return newSocials
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    setIsLoading(true)

    const socialInputLinks = document.querySelectorAll(".links-input") 
    let linksArray = [];
    socialInputLinks.forEach((link,index)=>{
      linksArray.push(link.value)
    });


  const token = sessionStorage.getItem("token") 
  const payLoad = {
      ...formObj,
      socialMediaLinks : `${linksArray}`,
      profileImage : "",
      position: "Test"
    }
    // console.log(payLoad)
    axios.post(endpoint, payLoad,{
      headers : {
        Authorization : token
      }
    })
    .then((response)=>{
      setIsLoading(false)
      Swal.fire({
        icon: 'success',
        title: 'succesfully registered as a client',
        text: 'Welcome to Afren!!'
        // footer: '<a href="">Why do I have this issue?</a>'
      }).then(()=>{
        navigate("/clientdash")
      })
      // console.log(response)
      setFormObj({
          companyName : "",
          companyEmail : "",
          companyAddress : "",
          residentialAddress : "",
          city : "",
          state : "",
          zipCode : "",
          country : "",
          occupation : "",
          phoneNumber : "",
          educationLevel : "",
          maritalStatus : "",
          monthlyIncome : "",
          socialMediaLinks: "",
      })
      socialInputLinks.forEach((link,index)=>{
        link.value = ""
      });
        
    }).catch((error)=>{
      setIsLoading(false)
      Swal.fire({
        icon: 'error',
        title: 'unable to register',
        text: 'Something went wrong!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
      // console.log(error.response.data)
    })
  }

  return (
    <>
      <Header/>
      <div id="client-reg-form-cover">
        <div id="client-reg-form">
            <h2>Registration page</h2>
            <form className="clientreg" onSubmit={handleSubmit} action="">
                <p>Basic Info</p>
                <input 
                  type="text" 
                  name="companyName"
                  value={companyName} 
                  id="" class="form-text" 
                  placeholder="Company name"
                  onChange={handleChange}
                  required
                  />
                <input 
                  type="email" 
                  name="companyEmail" id=""
                  value={companyEmail}
                  onChange={handleChange} 
                  class="form-text" 
                  placeholder="Company email"
                  required                  
                  />
                <input type="text" name="companyAddress" 
                  id="" value={companyAddress} class="form-text" 
                  placeholder="Company address"
                  onChange={handleChange}
                  required/>
                <input type="text" name="residentialAddress" id="" 
                  class="form-text" value={residentialAddress} placeholder="Residential address"
                  onChange={handleChange}
                  required/>
                <div class="form-innerdiv">
                    <input type="text" name="city" 
                      value={city} id="" onChange={handleChange} placeholder="city" required/>
                    <input type="text" name="state" value={state} 
                      onChange={handleChange} id="" placeholder="state" required/>
                </div>
                <div class="form-innerdiv">
                    <input type="number" name="zipCode"  value={zipCode}
                      id="" class="type-number" onChange={handleChange} placeholder="zipcode"/>
                    <select name="country" value={country} onChange={handleChange} id="" required>
                        <option value="  " selected>Country</option>
                        <option value="--">Not Specified</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO">Bolivia</option>
                        <option value="BA">Bosnia and Herzegowina</option>
                        <option value="BW">Botswana</option>
                        <option value="BV">Bouvet Island</option>
                        <option value="BR">Brazil</option>
                        <option value="IO">British Indian Ocean Territory</option>
                        <option value="BN">Brunei Darussalam</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CA">Canada</option>
                        <option value="CV">Cape Verde</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="CF">Central African Republic</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">Cocos (Keeling) Islands</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros</option>
                        <option value="CG">Congo</option>
                        <option value="CD">Congo, the Democratic Republic of the</option>
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="CI">Cote d'Ivoire</option>
                        <option value="HR">Croatia (Hrvatska)</option>
                        <option value="CU">Cuba</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="TP">East Timor</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">Falkland Islands (Malvinas)</option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="FX">France, Metropolitan</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">French Polynesia</option>
                        <option value="TF">French Southern Territories</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HM">Heard and Mc Donald Islands</option>
                        <option value="VA">Holy See (Vatican City State)</option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran (Islamic Republic of)</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KI">Kiribati</option>
                        <option value="KP">Korea, Democratic People's Republic of</option>
                        <option value="KR">Korea, Republic of</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">Lao People's Democratic Republic</option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libyan Arab Jamahiriya</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macau</option>
                        <option value="MK">Macedonia, The Former Yugoslav Republic of</option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">Mexico</option>
                        <option value="FM">Micronesia, Federated States of</option>
                        <option value="MD">Moldova, Republic of</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NL">Netherlands</option>
                        <option value="AN">Netherlands Antilles</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="NO">Norway</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PW">Palau</option>
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="RE">Reunion</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russian Federation</option>
                        <option value="RW">Rwanda</option>
                        <option value="KN">Saint Kitts and Nevis</option> 
                        <option value="LC">Saint LUCIA</option>
                        <option value="VC">Saint Vincent and the Grenadines</option>
                        <option value="WS">Samoa</option>
                        <option value="SM">San Marino</option>
                        <option value="ST">Sao Tome and Principe</option> 
                        <option value="SA">Saudi Arabia</option>
                        <option value="SN">Senegal</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SG">Singapore</option>
                        <option value="SK">Slovakia (Slovak Republic)</option>
                        <option value="SI">Slovenia</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SO">Somalia</option>
                        <option value="ZA">South Africa</option>
                        <option value="GS">South Georgia and the South Sandwich Islands</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SH">St. Helena</option>
                        <option value="PM">St. Pierre and Miquelon</option>
                        <option value="SD">Sudan</option>
                        <option value="SR">Suriname</option>
                        <option value="SJ">Svalbard and Jan Mayen Islands</option>
                        <option value="SZ">Swaziland</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="SY">Syrian Arab Republic</option>
                        <option value="TW">Taiwan, Province of China</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania, United Republic of</option>
                        <option value="TH">Thailand</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UG">Uganda</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="UM">United States Minor Outlying Islands</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Viet Nam</option>
                        <option value="VG">Virgin Islands (British)</option>
                        <option value="VI">Virgin Islands (U.S.)</option>
                        <option value="WF">Wallis and Futuna Islands</option>
                        <option value="EH">Western Sahara</option>
                        <option value="YE">Yemen</option>
                        <option value="YU">Yugoslavia</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                    </select>
                </div>
                <input type="tel" name="phoneNumber" value={phoneNumber} 
                  id="" onChange={handleChange} class="form-text" placeholder="Phone number" required/>
                <select class="select-opti" onChange={handleChange} value={educationLevel} name="educationLevel">
                    <option value="" selected="selected" disabled="disabled">Educational level</option>
                    <option value="No formal education">No formal education</option>
                    <option value="Primary education">Primary education</option>
                    <option value="Secondary education">Secondary education or high school</option>
                    <option value="GED">GED</option>
                    <option value="Vocational qualification">Vocational qualification</option>
                    <option value="Bachelor's degree">Bachelor's degree</option>
                    <option value="Master's degree">Master's degree</option>
                    <option value="Doctorate or higher">Doctorate or higher</option>
                </select>
                <select class="select-opti" 
                  value={occupation} 
                  id="occupation" 
                  name="occupation"
                  onChange={handleChange}
                  >
                    <option value="" selected="selected" disabled="disabled">occupation</option>
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
                      <option value="Other Healthcare Practitioners and Technical Occupation">-  Other Healthcare Practitioners and Technical Occupation</option>
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
                      <option value="Business Owner">-  Business Owner</option>
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
                      <option value="Other Education, Training, and Library Occupation">-  Other Education, Training, and Library Occupation</option>
                    </optgroup>
                    <optgroup label="Other Professional Occupations:">
                      <option value="34">-  Arts, Design, Entertainment, Sports, and Media Occupations</option>
                      <option value="35">-  Computer Specialist, Mathematical Science</option>
                      <option value="36">-  Counselor, Social Worker, or Other Community and Social Service Specialist</option>
                      <option value="37">-  Lawyer, Judge</option>
                      <option value="38">-  Life Scientist (e.g., Animal, Food, Soil, or Biological Scientist, Zoologist)</option>
                      <option value="39">-  Physical Scientist (e.g., Astronomer, Physicist, Chemist, Hydrologist)</option>
                      <option value="40">-  Religious Worker (e.g., Clergy, Director of Religious Activities or Education)</option>
                      <option value="41">-  Social Scientist and Related Worker</option>
                      <option value="42">-  Other Professional Occupation</option>
                    </optgroup>
                    <optgroup label="Office and Administrative Support Occupations:">
                      <option value="Supervisor of Administrative Support Workers">-  Supervisor of Administrative Support Workers</option>
                      <option value="Financial Clerk">-  Financial Clerk</option>
                      <option value="Secretary or Administrative Assistant">-  Secretary or Administrative Assistant</option>
                      <option value="Material Recording, Scheduling, and Dispatching Worker">-  Material Recording, Scheduling, and Dispatching Worker</option>
                      <option value="Other Office and Administrative Support Occupation<">-  Other Office and Administrative Support Occupation</option>
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
                <select id="mar-status" name="maritalStatus" value={maritalStatus} onChange={handleChange}>
                    <option value="Marital status">Marital status</option>
                    <option value="single">single</option>
                    <option value="married">married</option>
                </select>
                <input type="text" name="monthlyIncome" value={monthlyIncome} 
                  id="" class="form-text" onChange={handleChange} placeholder="Monthly income"/>
                <h4>Social Media</h4>
                <input type="url" 
                  id=""  class="form-text links-input" placeholder="Enter full URL" required/>
                <div id="extra-url">
                  {
                    socials.map((social,index)=>{
                      return (
                        <input 
                          id={social} 
                          key={index} 
                          class="form-text links-input" 
                          placeholder="Enter full URL"
                          ></input>
                      )
                    })
                  }
                </div>
                <div class="form-innerdiv">
                    <input type="url" id="last-url" class="form-text links-input" placeholder="Enter full URL" required/>
                    { socials.length === 2 || maxSocialLinks
                      ? <div id="add-url" onClick={handleClick2}>-</div> 
                     : <div id="add-url" onClick={handleClick}>+</div>
                    }
                </div>
                <div id="next-but">
                  <button type="submit" id="complete-but">
                    {isLoading 
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
                  : "Create"}
                    </button>
                </div>
            </form>
        </div>
    </div>      
    </>
  );
}
