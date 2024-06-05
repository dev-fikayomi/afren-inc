import React from 'react'
import Navbar from "../Components/Navbar"
// import "../Styles/buyerReg.css"
import "../style.css"

export default function BuyerReg() {
  return (
    <>
      <Navbar/>
      <div id="form-cover">
        <div id="form-buyer">
            <h2>Registration page</h2>
            <form className='buyerreg' action="">
                <p>Basic Info</p>
                <input type="text" name="" id="" class="form-text" placeholder="Company name" />
                <input type="email" name="" id="" class="form-text" placeholder="Company email" />
                <input type="text" name="" id="" class="form-text" placeholder="Company address" />
                <input type="text" name="" id="" class="form-text" placeholder="Residential address" />
                <div class="form-innerdiv">
                    <input type="text" name="" id="" placeholder="city" />
                    <input type="text" name="" id="" placeholder="state" />
                </div>
                <div class="form-innerdiv">
                    <input type="number" name="" id="" class="type-number" placeholder="zipcode"/>
                    <select name="" id="">
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
                <input type="tel" name="" id="" class="form-text" placeholder="Phone number"/>
                <select class="select-opti">
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
                <select class="select-opti" id="occupation" name="occupation">
                    <option value="" selected="selected" disabled="disabled">occupation</option>
                    <optgroup label="Healthcare Practitioners and Technical Occupations:">
                      <option value="1">-  Chiropractor</option>
                      <option value="2">-  Dentist</option>
                      <option value="3">-  Dietitian or Nutritionist</option>
                      <option value="4">-  Optometrist</option>
                      <option value="5">-  Pharmacist</option>
                      <option value="6">-  Physician</option>
                      <option value="7">-  Physician Assistant</option>
                      <option value="8">-  Podiatrist</option>
                      <option value="9">-  Registered Nurse</option>
                      <option value="10">-  Therapist</option>
                      <option value="11">-  Veterinarian</option>
                      <option value="12">-  Health Technologist or Technician</option>
                      <option value="13">-  Other Healthcare Practitioners and Technical Occupation</option>
                    </optgroup>
                    <optgroup label="Healthcare Support Occupations:">
                      <option value="14">-  Nursing, Psychiatric, or Home Health Aide</option>
                      <option value="15">-  Occupational and Physical Therapist Assistant or Aide</option>
                      <option value="16">-  Other Healthcare Support Occupation</option>
                    </optgroup>
                    <optgroup label="Business, Executive, Management, and Financial Occupations:">
                      <option value="17">-  Chief Executive</option>
                      <option value="18">-  General and Operations Manager</option>
                      <option value="19">-  Advertising, Marketing, Promotions, Public Relations, and Sales Manager</option>
                      <option value="20">-  Operations Specialties Manager (e.g., IT or HR Manager)</option>
                      <option value="21">-  Construction Manager</option>
                      <option value="22">-  Engineering Manager</option>
                      <option value="23">-  Accountant, Auditor</option>
                      <option value="24">-  Business Operations or Financial Specialist</option>
                      <option value="25">-  Business Owner</option>
                      <option value="26">-  Other Business, Executive, Management, Financial Occupation</option>
                    </optgroup>
                    <optgroup label="Architecture and Engineering Occupations:">
                      <option value="27">-  Architect, Surveyor, or Cartographer</option>
                      <option value="28">-  Engineer</option>
                      <option value="29">-  Other Architecture and Engineering Occupation</option>
                    </optgroup>
                    <optgroup label="Education, Training, and Library Occupations:">
                      <option value="30">-  Postsecondary Teacher (e.g., College Professor)</option>
                      <option value="31">-  Primary, Secondary, or Special Education School Teacher</option>
                      <option value="32">-  Other Teacher or Instructor</option>
                      <option value="33">-  Other Education, Training, and Library Occupation</option>
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
                      <option value="43">-  Supervisor of Administrative Support Workers</option>
                      <option value="44">-  Financial Clerk</option>
                      <option value="45">-  Secretary or Administrative Assistant</option>
                      <option value="46">-  Material Recording, Scheduling, and Dispatching Worker</option>
                      <option value="47">-  Other Office and Administrative Support Occupation</option>
                    </optgroup>
                    <optgroup label="Services Occupations:">
                      <option value="48">-  Protective Service (e.g., Fire Fighting, Police Officer, Correctional Officer)</option>
                      <option value="49">-  Chef or Head Cook</option>
                      <option value="50">-  Cook or Food Preparation Worker</option>
                      <option value="51">-  Food and Beverage Serving Worker (e.g., Bartender, Waiter, Waitress)</option>
                      <option value="52">-  Building and Grounds Cleaning and Maintenance</option>
                      <option value="53">-  Personal Care and Service (e.g., Hairdresser, Flight Attendant, Concierge)</option>
                      <option value="54">-  Sales Supervisor, Retail Sales</option>
                      <option value="55">-  Retail Sales Worker</option>
                      <option value="56">-  Insurance Sales Agent</option>
                      <option value="57">-  Sales Representative</option>
                      <option value="58">-  Real Estate Sales Agent</option>
                      <option value="59">-  Other Services Occupation</option>
                    </optgroup>
                    <optgroup label="Agriculture, Maintenance, Repair, and Skilled Crafts Occupations:">
                      <option value="60">-  Construction and Extraction (e.g., Construction Laborer, Electrician)</option>
                      <option value="61">-  Farming, Fishing, and Forestry</option>
                      <option value="62">-  Installation, Maintenance, and Repair</option>
                      <option value="63">-  Production Occupations</option>
                      <option value="64">-  Other Agriculture, Maintenance, Repair, and Skilled Crafts Occupation</option>
                    </optgroup>
                    <optgroup label="Transportation Occupations:">
                      <option value="65">-  Aircraft Pilot or Flight Engineer</option>
                      <option value="66">-  Motor Vehicle Operator (e.g., Ambulance, Bus, Taxi, or Truck Driver)</option>
                      <option value="67">-  Other Transportation Occupation</option>
                    </optgroup>
                    <optgroup label="Other Occupations:">
                      <option value="68">-  Military</option>
                      <option value="69">-  Homemaker</option>
                      <option value="70">-  Other Occupation</option>
                      <option value="71">-  Don't Know</option>
                      <option value="72">-  Not Applicable</option>
                    </optgroup>
                </select>
                <select id="mar-status">
                    <option value="Marital status">Marital status</option>
                    <option value="single">single</option>
                    <option value="married">married</option>
                </select>
                <input type="text" name="" id="" class="form-text" placeholder="Monthly income" />
                <h4>Social Media</h4>
                <input type="url" name="" id="" class="form-text" placeholder="Enter full URL"/>
                <div id="extra-url"></div>
                <div class="form-innerdiv" id="form-inndiv">
                    <input type="url" name="" id="last-url" class="form-text" placeholder="Enter full URL"/>
                    <div id="add-url">+</div>
                </div>
                <div id="next-but"><div id="complete-but">Create</div></div>
            </form>
        </div>
    </div>
    </>
  )
}

