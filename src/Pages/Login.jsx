import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import "../style.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/afren-images/afren-logo.png";
import googleIcon from "../assets/afren-images/google-icon.png";
import pinkRoundImg from "../assets/afren-images/pink-roung-img.png";
import verified from "../assets/afren-images/verified.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import Cookies from "js-cookie";

const endpoint = "https://afren-main-server.onrender.com/api/userSignIn";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [slant, setSlant] = useState(true);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const navigate = useNavigate();
  const [formObj, setFormObj] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formObj;

  function handleChange(e) {
    const { name, value } = e.target;

    if (email && password) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
    setFormObj({
      ...formObj,
      [name]: value,
    });
  }

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Google login successful", tokenResponse);
    },
    onError: () => {
      console.error("Google login failed");
    },
    flow: "auth-code",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(endpoint, formObj);
      setLoading(false);
      console.log(response)
      if (response.status === 200) {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("role", response.data.role);
        sessionStorage.setItem("firstName", response.data.firstName);
        sessionStorage.setItem("userEmail", response.data.email);
        toast.success("successfully logged in");
        setTimeout(() => {
          if (response.data.role === "Client") {
            navigate("/clientdash");
          } else if (response.data.role === "User") {
            navigate("/completeregistration");
          } else {
            navigate("/freelancerdash");
          }
        }, 2000);
        console.log(response.data);
      }
    } catch (error) {
      setLoading(false);
      toast.error("invalid password or email");
      console.log(error);
    }
  }

  function handleClick() {
    setSlant((prev) => !prev);
  }
  return (
    <>
      <section className="login">
        <Toaster />
        <section className="form_area" name="afren">
          <form action="" onSubmit={handleSubmit}>
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt=""
              className="logo-la-la"
            />
            <h1 className="loggy">Log in</h1>
            <p className="afren">Log in to Afren</p>
            <div className="email">
              <input
                type="email"
                id="email"
                placeholder="Email address"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="password2">
              <input
                type={slant ? "password" : "text"}
                id="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <figure
                onClick={handleClick}
                style={{ position: "relative", cursor: "pointer" }}
              >
                {/* <i className="fa-regular fa-eye"></i> */}
                <FontAwesomeIcon
                  icon={faEye}
                  size="s"
                  style={{ color: "#000000", fontWeight: 400 }}
                />
                <span
                  id="sp"
                  style={{ display: slant ? "block" : "none" }}
                ></span>
              </figure>
            </div>
            <div className="forget">
              <div className="remember">
                <input type="checkbox" />
                <p className="one">Remember me</p>
              </div>
              <NavLink to="/forgotpassword" className="two">
                Forgot password?
              </NavLink>
            </div>
            <button className="submit" type="submit" disabled={btnDisabled}>
              {loading ? (
                <Oval
                  height={25}
                  width={25}
                  color="#fff"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#015B7E"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              ) : (
                "Log in"
              )}
            </button>
            <div className="or2">
              <div className="line"></div>
              <h6>OR</h6>
              <div className="line"></div>
            </div>
            <button
              type="button"
              className="google"
              style={{ cursor: "pointer" }}
              onClick={() => googleLogin()}
            >
              <img src={googleIcon} alt="" />
              <p>Continue with Google</p>
            </button>
            <p className="quesy">
              Don't have an account?{" "}
              <NavLink to="/signup" className="sign">
                Sign up
              </NavLink>
            </p>
          </form>
        </section>
        <section className="welcome">
          <h3> Welcome to Afren dashboard</h3>
          <p className="welcome-text">
            Lorem ipsum dolor sit amet consectetur. Sit dui dolor morbi enim
            arcu ipsum venenatis.
          </p>
          <div className="wrapper2">
            <h1>See what our clients are saying</h1>
            <div className="outer">
              <div className="card" style={{ "--delay": -1 }}>
                <div className="content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat alias dolor neque ratione commodi praesentium nihil
                    ipsum, recusandae earum sapiente, cum nemo nesciunt sint
                    quis iste dolores suscipit illum tempora?
                  </p>
                </div>
                <div className="inner-bottom">
                  <div className="user-prof">
                    <div className="prof-pic">
                      <img src={pinkRoundImg} alt="" />
                    </div>
                    <div className="details">
                      <p>Mitchell Bronne1</p>
                      <p>
                        <b>CEO Malistack</b>
                      </p>
                      <p>
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>
                      </p>
                    </div>
                  </div>
                  <div className="client">
                    <small>
                      <img src={verified} alt="" /> verified client
                    </small>
                  </div>
                </div>
              </div>
              {/* <div className="card" style="--delay:0;">
                <div className="content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat alias dolor neque ratione commodi praesentium nihil
                    ipsum, recusandae earum sapiente, cum nemo nesciunt sint
                    quis iste dolores suscipit illum tempora?
                  </p>
                </div>
                <div className="inner-bottom">
                  <div className="user-prof">
                    <div className="prof-pic">
                      <img src="afren-images/pink-roung-img.png" alt="" />
                    </div>
                    <div className="details">
                      <p>Mitchell Bronne2</p>
                      <p>
                        <b>CEO Malistack</b>
                      </p>
                      <p>
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>
                      </p>
                    </div>
                  </div>
                  <div className="client">
                    <small>
                      <img src="afren-images/verified.png" alt="" /> verified
                      client
                    </small>
                  </div>
                </div>
              </div>
              <div className="card" style="--delay:1;">
                <div className="content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat alias dolor neque ratione commodi praesentium nihil
                    ipsum, recusandae earum sapiente, cum nemo nesciunt sint
                    quis iste dolores suscipit illum tempora?
                  </p>
                </div>
                <div className="inner-bottom">
                  <div className="user-prof">
                    <div className="prof-pic">
                      <img src="afren-images/pink-roung-img.png" alt="" />
                    </div>
                    <div className="details">
                      <p>Mitchell Bronne3</p>
                      <p>
                        <b>CEO Malistack</b>
                      </p>
                      <p>
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>
                      </p>
                    </div>
                  </div>
                  <div className="client">
                    <small>
                      <img src="afren-images/verified.png" alt="" /> verified
                      client
                    </small>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
