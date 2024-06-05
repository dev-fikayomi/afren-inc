import React from 'react'
// import "../Styles/SettFeedback.css"
import "../style.css"

export default function Feedback() {
  return (
    <div id="main-setfeed">
    <h3>Feedback</h3>
    <div id="feed-form">
        <form action="">
            <div id="switch-whle">
                <h4>Public feedback</h4>
                <div id="feed-switch">
                    <label class="switch">
                    <input type="checkbox" />
                        <span class="slider"></span>
                    </label>
                </div>
            </div>
            <p>This feedback will be kept anonymous and never shared directly with the Afren commuity. <a href="">Learn more</a></p>
            <h4 id="recomd">How likely are you to recommend this freelancer to a friend or a colleague </h4>
            <div id="flex-item">
                <p>Not at all likely</p>
                <p>Extremely likely</p>
            </div>
            <div id="radio-opt">
                <div><input type="radio" name="rating" value="1" /><span> 1</span></div>
                <div><input type="radio" name="rating" value="2" /><span> 2</span></div>
                <div><input type="radio" name="rating" value="3" /><span> 3</span></div>
                <div><input type="radio" name="rating" value="4" /><span> 4</span></div>
                <div><input type="radio" name="rating" value="5" /><span> 5</span></div>
                <div><input type="radio" name="rating" value="6" /><span> 6</span></div>
                <div><input type="radio" name="rating" value="7" /><span> 7</span></div>
                <div><input type="radio" name="rating" value="8" /><span> 8</span></div>
                <div><input type="radio" name="rating" value="9" /><span> 9</span></div>
                <div><input type="radio" name="rating" value="10" /><span> 10</span></div>
            </div>
            <div id="rate-af">
                <p>Rate Afren:</p>
                <div id="af-star"><i class="fas fa-star checked"></i><i class="fas fa-star checked"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            </div>
            <div id="frlacer-rep">
                <p>Tell us more. What did the freelancer do well? What could have been better? (Optional)</p>
                <textarea name="" id="" cols="30" rows="10" placeholder="Enter message..."></textarea>
            </div>
            <input type="submit" name="" id="submit-butt" value="Submit Feedback" />
        </form>
    </div>
</div>
  )
}
