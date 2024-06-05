import React from 'react'
import arrowLeft from "../assets/afren-images/blue-arrow-left.png"
import blueStar from "../assets/afren-images/blue-star.png"
import "../../src/style.css"


export default function ClientFeedback() {
  return (
    <div class="major-container">
            <div class="client-feedback-subheading">
                <figure class="cfs-backbtn">
                    <img src={arrowLeft} alt=""/>
                </figure>
                <h2 class="cfs-text">
                    Client Feedback
                </h2>
            </div>
            <form action="" class="clientfeedback-form">
                <div class="cf-form-subheading">
                    <h2>Public feedback</h2>
                    <div class="cf-toggle-btn">
                        <span class="cf-toggle-btn-inner"></span>
                    </div>
                </div>
                <p class="feedback-info">
                    This feedback will be kept anonymous and never shared directly with the client. Learn more
                </p>

                <section class="cf-recommendation">
                    <p class="cfr-text">
                        How likely are you to recommend this client to a friend or a colleague 
                    </p>
                    <div class="cfr-range-text">
                        <p>Not likely</p>
                        <p>Extremely likely</p>
                    </div>
                    <div class="cfr-option">
                        <span>
                            <input type="radio" name="cfr" id="" />
                            <p>1</p>
                        </span>
                        <span>
                            <input type="radio" name="cfr" id="" />
                            <p>2</p>
                        </span>
                        <span>
                            <input type="radio" name="cfr" id="" />
                            <p>3</p>
                        </span>
                        <span>
                            <input type="radio" name="cfr" id="" />
                            <p>4</p>
                        </span>
                        <span>
                            <input type="radio" name="cfr" id="" />
                            <p>5</p>
                        </span>
                        <span>
                            <input type="radio" name="cfr" id="" />
                            <p>6</p>
                        </span>
                        <span>
                            <input type="radio" name="cfr" id="" />
                            <p>7</p>
                        </span>
                        <span>
                            <input type="radio" name="cfr" id="" />
                            <p>8</p>
                        </span>
                        <span>
                            <input type="radio" name="cfr" id="" />
                            <p>9</p>
                        </span>
                        <span>
                            <input type="radio" name="cfr" id="" />
                            <p>10</p>
                        </span>
                    </div>
                </section>

                <section class="vocabulary-rating">
                    <p class="vr-text">
                        Rate their English proficiency (speaking and comprehension) 
                    </p>
                    <div class="vr-option">
                        <span>
                            <input type="radio" name="vr" id="" />
                            <p>Fluent</p>
                        </span>
                        <span>
                            <input type="radio" name="vr" id="" />
                            <p>Acceptable</p>
                        </span>
                        <span>
                            <input type="radio" name="vr" id="" />
                            <p>Difficult to understand</p>
                        </span>
                        <span>
                            <input type="radio" name="vr" id="" />
                            <p>I didn’t speak to the freelancer</p>
                        </span>
                        <span>
                            <input type="radio" name="vr" id="" />
                            <p>Others</p>
                        </span>
                    </div>
                </section>
                <section class="fbk-to-client">
                    <p class="ftc-text">
                        Feedback to client
                    </p>
                    <div class="ftc-option-space">
                        <div>
                            <span>
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt=""/>
                                <img src={blueStar} alt=""/>
                                <img src={blueStar} alt="" />
                                <img src={blueStar}  alt="" />
                            </span>
                            <p class="ftc-option-text">Skills</p>
                        </div>
                        <div>
                            <span>
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt="" />/
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt="" /> 
                            </span>
                            <p class="ftc-option-text">Quality of work</p>
                        </div>
                        <div>
                            <span>
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt=""/>
                            </span>
                            <p class="ftc-option-text">Availability</p>
                        </div>
                        <div>
                            <span>
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt=""/>
                            </span>
                            <p class="ftc-option-text">Adherence to Schedule</p>
                        </div>
                        <div>
                            <span>
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt=""/>
                            </span>
                            <p class="ftc-option-text">Communication</p>
                        </div>
                        <div>
                            <span>
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt="" />
                                <img src={blueStar} alt=""/>
                            </span>
                            <p class="ftc-option-text">Cooperation</p>
                        </div>
                    </div>
                    <p class="ftc-total-score">
                        Total  Score: 3.50
                    </p>
                </section>
                <section class="feedback-message">
                    <div class="fbm-subheading">
                        <p>
                            Tell us more. What did the client do well? What could have been better?
                        </p>
                        <small>Optional</small>
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Enter message...."></textarea>
                </section>
                <h2 class="see-ex-feedback">
                    See an <a href="#">example of appropriate feedbacks</a>
                </h2>
                <button type="submit" class="submit-feedback-btn">
                    Submit Feedback
                </button>
            </form>
        </div>
  )
}
