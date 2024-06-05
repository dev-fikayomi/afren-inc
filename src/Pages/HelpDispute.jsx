import React from 'react'
import Header from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
// import "../Styles/helpDispute.css"
import "../style.css"


export default function HelpDispute() {
  return (
    <>
        <div id="main"
            style={{height : "fit-content"}}
        >
            <p id="back-link"><a href="javascript:void(0)">&lt;</a> Back</p>
            <div id="main-top">
                <div id="top-head">
                    <h3>My Disputes</h3>
                    <button onclick="createDisp()" id="new-disp">+ <span>start a new dispute</span></button>
                </div>
                <p>We offer services of  disputes We offer services of  disputesWe offer services of  disputesWe offer services of  disputes</p>
                <p>Learn more about disputes process <a href="">here.</a></p>
            </div>
            <div class="table-whole">
                <h3>Opened Disputes</h3>
                <div class="table-body">
                    <table>
                        <thead>
                            <tr>
                                <th>Contract</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Disagreement Contract</td>
                            <td class="type">20 Aug,2023</td>
                            <td>$200.00</td>
                            <td><p class="status pending">Pending</p></td>
                            <td><button class="close-disp">Close dispute</button></td>
                        </tr>
                        <tr>
                            <td>Disagreement Contract</td>
                            <td class="type">20 Aug,2023</td>
                            <td>$200.00</td>
                            <td><p class="status pending">Pending</p></td>
                            <td><button class="close-disp">Close dispute</button></td>
                        </tr>
                        <tr>
                            <td>Disagreement Contract</td>
                            <td class="type">20 Aug,2023</td>
                            <td>$200.00</td>
                            <td><p class="status pending">Pending</p></td>
                            <td><button class="close-disp">Close dispute</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="table-whole">
            <h3>Closed Disputes</h3>
            <div class="table-body">
                <table>
                    <thead>
                        <tr>
                            <th>Contract</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Disagreement Contract</td>
                            <td class="type">20 Aug,2023</td>
                            <td>$200.00</td>
                            <td><p class="status received">Pending</p></td>
                        </tr>
                        <tr>
                            <td>Disagreement Contract</td>
                            <td class="type">20 Aug,2023</td>
                            <td>$200.00</td>
                            <td><p class="status received">Pending</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        </div>
    </>
  )
}
