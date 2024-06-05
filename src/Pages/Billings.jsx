import React, { useState } from 'react'
import Payment from '../Components/Payment'
import Invoice from '../Components/Invoice'
import History from '../Components/History'

export default function Billings() {
    const [section, setSection] = useState("payment")
  
    function handleClick(section){
        setSection(section)
    }
    return (
    <>
        <div id="main-pay">
            <h3 id="heading">Billing</h3>
            <div id="page-title">
                <a 
                    href="javacript:void(0)" 
                    className={ section === "payment" ?"each-pg-ttle active" : "each-pg-ttle"}
                    onClick={()=>handleClick("payment")}
                    >Payment
                </a>
                <a 
                    href="javascript:void(0)" 
                    className={ section === "invoice" ?"each-pg-ttle active" : "each-pg-ttle"}
                    onClick={()=>handleClick("invoice")}
                >Invoice</a>
                <a 
                    href="javascript:void(0)" 
                    className={ section === "history" ?"each-pg-ttle active" : "each-pg-ttle"}
                    onClick={()=>handleClick("history")}
                >Payment History</a>
            </div>
            {
             section === "payment"
             ? <Payment />
             : section === "invoice"
             ? <Invoice />
             : <History />
            }
        </div>
    </>
  )
}
