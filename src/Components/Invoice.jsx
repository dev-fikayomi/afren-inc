import React from 'react'
// import "../Styles/PaymentInvoice.css"
import "../style.css"
import frame1 from "../assets/afren-images2/Frame 427319851.png"
import frame2 from "../assets/afren-images2/Frame 427319855.png"
import frame3 from "../assets/afren-images2/Frame 427319857.png"
import frame4 from "../assets/afren-images2/Frame 427319858.png"

export default function Invoice() {
  return (
    <>
         <h3 className="section-ttle">Start a new invoice</h3>
        <div className="invoice new">
            <div className="new-inv">
                <a href="" className="inv-add-btn">+</a>
                <p>New invoice</p>
            </div>
            <img src={frame1} className="inv-card" alt="" />
            <img src={frame2} className="inv-card" alt="" />
            <img src={frame3} className="inv-card" alt="" />
            <img src={frame4} className="inv-card" alt="" />
        </div>
        <h3 className="section-ttle">Recent Invoice</h3>
        <div className="invoice recent">
            <img src={frame1} className="inv-card" alt="" />
            <img src={frame2} className="inv-card" alt="" />
            <img src={frame3} className="inv-card" alt="" />
            <img src={frame4} className="inv-card" alt="" />
            <img src={frame1} className="inv-card" alt="" />
        </div>
    </>
  )
}
