import React, { useState, useEffect } from 'react'
// import "../Styles/Payment.css"
import "../style.css"
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from '../utils/Data';
import { LineChart } from './LineChart';
import image2 from "../assets/afren-images2/image 2.png"
import image182 from "../assets/afren-images2/image 182.png"
import image1 from "../assets/afren-images2/image 1.png"
import image3 from "../assets/afren-images2/image 3.png"
import visa from "../assets/afren-images2/Visa Inc. - png 0.png"
import rectangle338 from "../assets/afren-images2/Rectangle 338.png"
import image183 from "../assets/afren-images2/image 183.png"
import image184 from "../assets/afren-images2/image 184.png"
import image185 from "../assets/afren-images2/image 185.png"
import rectangle34624273 from "../assets/afren-images2/Rectangle 34624273.png"


Chart.register(CategoryScale);


export default function Payment() {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.week), 
        datasets: [
          {
            label: "Paid ",
            data: Data.map((data) => data.paid),
            borderColor: "white",
            pointRadius: 0,
            tension: 0.4
          },
        ]
    });
    const [paymentObj, setPaymentObj] = useState({
        payment1 : false,
        payment2 : false,
        payment3 : false,
        payment4 : false,
        payment5 : false
    })

    const {payment1, payment2, payment3, payment4, payment5} = paymentObj

    function handleClick(options){
        setPaymentObj({
            ...paymentObj,
            [options] : !paymentObj[options]
        })
    }

  return (
    <div id="body-div">
            <div id="whole-pymnt-card">
                <div id="pymmt-head"><h3>Payment Options</h3></div>
                <div id="pymnt-cover">
                    <form action="">
                        <div className="pymnt-type-whole">
                            <div className="pymnt-type-card">
                                <input type="radio" name="radio-drp" id="" />
                                <label for="">Direct Bank Transfer</label>
                                <i 
                                    onClick={()=>{handleClick("payment1")}}  
                                    className="fas fa-chevron-down pymnt-drp-icon"
                                    style={{transform: payment1 ? "rotate(180deg)" : "rotate(0deg)" }}
                                ></i>
                            </div>
                            { 
                            payment1
                            && <div className="card-info-whole">
                                <p>Credit or Debit</p>
                                <input type="text" name="" className="card-inp" id="" placeholder="Card Name" />
                                <div className="date-cvc">                                  
                                    <input type="text" name="" className="exp-date" id="" placeholder="MM / YY" />
                                    <div className="cvc">
                                        <input type="text" name="" id="" placeholder="CVC" />
                                        <div className="cvc-img">
                                            <img src={image2} alt="" /></div>
                                    </div>
                                </div>
                                <input type="text" name="" className="card-inp card-num" id="" placeholder="Card Number" />
                                </div>
                            }
                        </div>
                        <div className="pymnt-type-whole">
                            <div className="pymnt-type-card">
                                <input type="radio" name="radio-drp" id="" />
                                <label for="">Automatic Bank Transfer</label>
                                <img src={image182} className="bank-trasf card-images" alt="" />
                                <i 
                                    onClick={()=>{handleClick("payment2")}} 
                                    className="fas fa-chevron-down pymnt-drp-icon"
                                    style={{transform: payment2 ? "rotate(180deg)" : "rotate(0deg)" }}    
                                ></i>
                            </div>
                            {   payment2
                              &&  
                                <div className="card-info-whole">
                                <p>Credit or Debit</p>
                                <input type="text" name="" className="card-inp" id="" placeholder="Card Name" />
                                <div className="date-cvc">                                  
                                    <input type="text" name="" className="exp-date" id="" placeholder="MM / YY" />
                                    <div className="cvc">
                                        <input type="text" name="" id="" placeholder="CVC" />
                                        <div className="cvc-img"><img src={image2} alt="" /></div>
                                    </div>
                                </div>
                                <input type="text" name="" className="card-inp card-num" id="" placeholder="Card Number" />
                                </div>
                            }
                        </div>
                        <div className="pymnt-type-whole">
                            <div className="pymnt-type-card">
                                <input type="radio" name="radio-drp" id="" />
                                <label for="">Cards Payment</label>
                                <div className="card-icons card-images">
                                    <img src={image1} alt="" />
                                    <img src={visa} alt="" />
                                    <img src={rectangle338} alt="" />
                                </div>
                                <i 
                                    onClick={()=>{handleClick("payment3")}} 
                                    className="fas fa-chevron-down pymnt-drp-icon"
                                    style={{transform: payment3 ? "rotate(180deg)" : "rotate(0deg)" }}    
                                ></i>
                            </div>
                            {   payment3
                                &&
                                <div className="card-info-whole">
                                <p>Credit or Debit</p>
                                <input type="text" name="" className="card-inp" id="" placeholder="Card Name" />
                                <div className="date-cvc">                                  
                                    <input type="text" name="" className="exp-date" id="" placeholder="MM / YY" />
                                    <div className="cvc">
                                        <input type="text" name="" id="" placeholder="CVC" />
                                        <div className="cvc-img"><img src={image2} alt="" /></div>
                                    </div>
                                </div>
                                <input type="text" name="" className="card-inp card-num" id="" placeholder="Card Number" />
                                </div>
                            }
                        </div>
                        <div className="pymnt-type-whole">
                            <div className="pymnt-type-card">
                                <input type="radio" name="radio-drp" id="" />
                                <label for="">Pay in Installment</label>
                                <div className="card-icons card-images">
                                    <img src={image183} alt="" />
                                    <img src={image184} alt="" />
                                </div>
                                <i 
                                    onClick={()=>{handleClick("payment4")}} 
                                    className="fas fa-chevron-down pymnt-drp-icon"
                                    style={{transform: payment4 ? "rotate(180deg)" : "rotate(0deg)" }}    
                                ></i>
                            </div>
                            {   payment4
                                &&
                                <div className="card-info-whole">
                                <p>Credit or Debit</p>
                                <input type="text" name="" className="card-inp" id="" placeholder="Card Name" />
                                <div className="date-cvc">                                  
                                    <input type="text" name="" className="exp-date" id="" placeholder="MM / YY" />
                                    <div className="cvc">
                                        <input type="text" name="" id="" placeholder="CVC" />
                                        <div className="cvc-img">
                                            <img src={image2} alt="" /></div>
                                    </div>
                                </div>
                                <input type="text" name="" className="card-inp card-num" id="" placeholder="Card Number" />
                                </div>
                            }
                        </div>
                        <div className="pymnt-type-whole">
                            <div className="pymnt-type-card">
                                <input type="radio" name="radio-drp" id="" />
                                <label for="">Payment with Crypto</label>
                                <div className="card-icons card-images">
                                    <img src={image185} alt=""/>
                                    <img src={image3} alt="" />
                                </div>
                                <i 
                                    onClick={()=>{handleClick("payment5")}} 
                                    className="fas fa-chevron-down pymnt-drp-icon"
                                    style={{transform: payment5 ? "rotate(180deg)" : "rotate(0deg)" }}    
                                ></i>
                            </div>
                            {   payment5
                                &&
                                <div className="card-info-whole">
                                <p>Credit or Debit</p>
                                <input type="text" name="" className="card-inp" id="" placeholder="Card Name" />
                                <div className="date-cvc">                                  
                                    <input type="text" name="" className="exp-date" id="" placeholder="MM / YY" />
                                    <div className="cvc">
                                        <input type="text" name="" id="" placeholder="CVC" />
                                        <div className="cvc-img">
                                            <img src={image2} alt="" /></div>
                                    </div>
                                </div>
                                <input type="text" name="" className="card-inp card-num" id="" placeholder="Card Number" />
                                </div>
                            }
                        </div>
                        <input type="submit" className="pay-butt" name="" id="" value="Withdraw" />
                    </form>
                </div>
            </div>
            <div id="right-div">
                <div id="earnings">
                    <div id="chart-cover">
                        <div id="chart"><LineChart chartData={chartData} /></div>
                        <i className="fa fa-eye-slash eye-slash"></i>
                    </div>
                    <div className="earn-amount">
                        <p>Balance</p>
                        <span>$15,000</span>
                    </div>
                    <button id="bal-wthdrw">Withdraw</button>
                </div>
                <div id="table-cover">
                    <div id="table-topic">
                        <h3>Invoices</h3>
                        <a href="">View all</a>
                    </div>
                    <div className="table-body">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="client-prf">
                                            <div className="client-pic">
                                                <img src={rectangle34624273} alt="" />
                                            </div>
                                            <div>
                                                <p>Alexander willians</p>
                                                <span>Updated 10m ago</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="type">Withdraw</td>
                                    <td><p className="status in-revision">In Revision</p></td>
                                    <td><h3>$1,222</h3></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="client-prf">
                                            <div className="client-pic">
                                                <img src={rectangle34624273} alt="" /></div>
                                            <div>
                                                <p>Alexander willians</p>
                                                <span>Updated 10m ago</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="type">Withdraw</td>
                                    <td><p className="status pending">Pending</p></td>
                                    <td><h3>$1,222</h3></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="client-prf">
                                            <div className="client-pic">
                                                <img src={rectangle34624273} alt="" /></div>
                                            <div>
                                                <p>Alexander willians</p>
                                                <span>Updated 10m ago</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="type">Withdraw</td>
                                    <td><p className="status paid">Paid</p></td>
                                    <td><h3>$1,222</h3></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="client-prf">
                                            <div className="client-pic">
                                                <img src={rectangle34624273} alt="" />
                                            </div>
                                            <div>
                                                <p>Alexander willians</p>
                                                <span>Updated 10m ago</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="type">Withdraw</td>
                                    <td><p className="status in-revision">In Revision</p></td>
                                    <td><h3>$1,222</h3></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="client-prf">
                                            <div className="client-pic">
                                                <img src={rectangle34624273} alt="" />
                                            </div>
                                            <div>
                                                <p>Alexander willians</p>
                                                <span>Updated 10m ago</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="type">Withdraw</td>
                                    <td><p className="status paid">Paid</p></td>
                                    <td><h3>$1,222</h3></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
  )
}
