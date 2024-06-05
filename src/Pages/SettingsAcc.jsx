/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React,{useState, useEffect} from 'react'
// import "../Styles/sett-acc.css"
import "../style.css"
import ellipse31 from "../assets/afren-images2/Ellipse 31.png"
import toast, {Toaster} from 'react-hot-toast'

const token = sessionStorage.getItem("token")

export default function SettingsAcc() {
    const [photo, setPhoto] = useState("");

    const [formState, setFormState] = useState({
        fullName: '',
        emailAddress: '',
        location: '',
        residentialAddress1: '',
        residentialAddress2: '',
        portfolioLink: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevFormState) => ({
          ...prevFormState,
          [name]: value,
        }));
      };
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          setPhoto(reader.result);
        };
    
        if (file) {
          reader.readAsDataURL(file);
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const updates = {
          firstName: formState.fullName,
          email: formState.emailAddress,
          residentialAddress1: formState.residentialAddress1,
          residentialAddress2:formState.residentialAddress2,
          portfolioLink: formState.portfolioLink,
          city:formState.location,
          profileImage: photo
        };
    
        try {
          const response = await fetch('https://afren-main-server.onrender.com/api/updateFreelancerDetails', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ updates }),
          });
    
          if (response.ok) {
            // Handle success, e.g., show a success message or redirect
            toast.success('Details updated successfully');
          } else {
            // Handle error, e.g., show an error message
            toast.error('Failed to update details');
          }
        } catch (error) {
          toast.error('An error occurred');
        }
      };
  return (
    <div id="main">
    <div id="top-div">
        <Toaster />
        <h3>Account Settings</h3>
        <div id="av-switch">
            <h3>Availability</h3>
            <div id="switch">
                <label className="switch">
                <input type="checkbox"/>
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    </div>
    <h3 id="user-name">Jane Doe</h3>
    <div id="prof">
        <div id="prof-pic">
            {/* <div id="pic"><img src={ellipse31} alt=""/></div> */}
            {/* <button>Change Photo</button>  */}
            {/* <input type="file" name="" id="photo-inp"/>
            <label for="photo-inp">Change Photo</label> */}
            <div id="pic">
          <img src={photo || ellipse31} alt="" />
        </div>
        <input
          type="file"
          name=""
          id="photo-inp"
          onChange={handleImageChange}
        />
        <label htmlFor="photo-inp">Change Photo</label>
        </div>
        <div id="about">
            <form action="">
                <label for="about">About</label>
                <textarea name="" id="about-txtarea" cols="30" rows="9" placeholder="Tell us about you"></textarea>
            </form>
        </div>
    </div>
    <div className="form-box">
        <h3 className="form-heading">Basic info</h3>
        <form onSubmit={handleSubmit}>
            <div className="inp-cover">
                <div className="inp-inner-cov">
                    <label for="name">Full name</label>
                    <input type="text" name="fullName" id="fullName" 
                    className="inp" placeholder="your full name"
                    value={formState.fullName}
                    onChange={handleChange}
                    />
                </div>
                <div className="inp-inner-cov">
                    <label for="email">Email address</label>
                    <input type="email" name="emailAddress" id="emailAddress" className="inp" 
                    value={formState.emailAddress}
                    onChange={handleChange}
                    placeholder="johndoe@gmail.com"/>
                </div>
            </div>
            <div className="inp-cover">
                <div className="inp-inner-cov">
                    <label for="location">Location</label>
                    <input type="text" name="location" id="location" className="inp"
                    value={formState.location}
                    onChange={handleChange}
                     placeholder="your location"/>
                </div>
                <div className="inp-inner-cov">
                    <label for="res-address1">Residential address 1</label>
                    <input type="text" name="residentialAddress1" id="residentialAddress1" className="inp" 
                    value={formState.residentialAddress1}
                    onChange={handleChange}
                    placeholder="enter address"/>
                </div>
            </div>
            <div className="inp-cover">
                <div className="inp-inner-cov">
                    <label for="res-address2">Residential address 2</label>
                    <input type="text" name="residentialAddress2" id="residentialAddress2" className="inp" 
                    value={formState.residentialAddress2}
                    onChange={handleChange}
                    placeholder="enter address"/>
                </div>
            </div>
            <label for="">Portfolio link <span id="optional">Optional</span></label> 
            <input type="url" name="portfolioLink" id="portfolioLink" className="inp" 
            value={formState.portfolioLink}
            onChange={handleChange}
            placeholder="Enter full url"/>
            <input type="submit" name="" className="save-butt" id="" value="Save changes"/>
        </form>
    </div>
    <div className="form-box">
        <h3 className="form-heading">Social Profile</h3>
        <form action="">
            <div className="inp-cover">
                <div className="inp-inner-cov">
                    <label for="">Linkedin</label>
                    <input type="url" name="" id="" className="inp" placeholder="Enter full url"/>
                </div>
                <div className="inp-inner-cov">
                    <label for="">X</label>
                    <input type="url" name="" id="" className="inp" placeholder="Enter full url"/>
                </div>
            </div>
            <div className="inp-cover">
                <div className="inp-inner-cov">
                    <label for="">Facebook</label>
                    <input type="url" name="" id="" className="inp" placeholder="Enter full url"/>
                </div>
                <div className="inp-inner-cov">
                    <label for="">Instagram</label>
                    <input type="url" name="" id="" className="inp" placeholder="Enter full url"/>
                </div>
            </div>
            <input type="submit" name="" className="save-butt" id="" value="Save changes"/>
        </form>
    </div>
    <div className="form-hrly-rate">
        <h3>Change hourly rate</h3>
        <p>Please note that your new hourly rate will only apply to new contracts</p>
        <span id="profile-rate">Your profile rate: $25.00/hr</span>
        <form action="">
            <div id="hrly-cover">
                <label for="">Hourly Rate</label>
                <input type="number" name="" id="hrly-rate-inp" className="type-number" placeholder="$30.00"/><span>/hr</span>
            </div>
            <input type="submit" name="" className="save-butt" id="" value="Save changes"/>
        </form>
    </div>
    <div id="deactivation">
        <h3>Account Deactivation</h3>
        <p>What happens when you deactivate your account?</p>
        <div id="deactivate-opt">
            <ul>
                <li>Your profile and Gigs won’t be shown on Afren anymore.</li>
                <li>Active orders will be cancelled.</li>
                <li>You won’t be able to activate your Gigs</li>
            </ul>
        </div>
        <p>I’m leaving because.......</p>
        <form action="">
            <div id="reason-opt">
                <select name="" id="" disabled="disabled">
                    <option value="">Choose a reason</option>
                </select>
            </div>
            <input type="submit" name="" id="deactivate-but" value="Deactivate Account"/>
        </form>
    </div>
</div>
  )
}
