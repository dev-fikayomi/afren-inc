import React from 'react'
// import "../Styles/PaymentHistory.css"
import "../style.css"
import rect from "../assets/afren-images2/Rectangle 34624273.png"

export default function History() {
  return (
    <div id="main-bttm-div">
    <div id="bllngs-pgs">
        <a href="javascript:void(0)" className="bllngs-pg active">All</a>
        <a href="javascript:void(0)" className="bllngs-pg">Received</a>
        <a href="javascript:void(0)" className="bllngs-pg">Transfer</a>
        <a href="javascript:void(0)" className="bllngs-pg">Payment</a>
        <a href="javascript:void(0)" className="bllngs-pg">Withdraw</a>
    </div>
    <div id="table-cover">
        <div className="table-body">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="client-prf">
                                <div className="client-pic"><img src={rect} alt=""/></div>
                                <div>
                                    <p>Alexander willians</p>
                                    <span>Updated 10m ago</span>
                                </div>
                            </div>
                        </td>
                        <td className="type">Withdraw</td>
                        <td><p className="status in-revision">In Revision</p></td>
                        <td><h3>$1,222</h3></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="client-prf">
                                <div className="client-pic"><img src={rect} alt=""/></div>
                                <div>
                                    <p>Alexander willians</p>
                                    <span>Updated 10m ago</span>
                                </div>
                            </div>
                        </td>
                        <td className="type">Withdraw</td>
                        <td><p className="status pending">Pending</p></td>
                        <td><h3>$1,222</h3></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="client-prf">
                                <div className="client-pic"><img src={rect} alt=""/></div>
                                <div>
                                    <p>Alexander willians</p>
                                    <span>Updated 10m ago</span>
                                </div>
                            </div>
                        </td>
                        <td className="type">Withdraw</td>
                        <td><p className="status paid">Paid</p></td>
                        <td><h3>$1,222</h3></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="client-prf">
                                <div className="client-pic"><img src={rect} alt=""/></div>
                                <div>
                                    <p>Alexander willians</p>
                                    <span>Updated 10m ago</span>
                                </div>
                            </div>
                        </td>
                        <td className="type">Withdraw</td>
                        <td><p className="status in-revision">In Revision</p></td>
                        <td><h3>$1,222</h3></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="client-prf">
                                <div className="client-pic"><img src={rect} alt=""/></div>
                                <div>
                                    <p>Alexander willians</p>
                                    <span>Updated 10m ago</span>
                                </div>
                            </div>
                        </td>
                        <td className="type">Withdraw</td>
                        <td><p className="status paid">Paid</p></td>
                        <td><h3>$1,222</h3></td>
                        <td>...</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div id="pgination">
        <p>Showing 1 - 5 of 24</p>
        <div id="pg-arrows">
            <a href="javascript:void(0)">&lt;</a>
            <a href="javascript:void(0)">&gt;</a>
        </div>
    </div>
</div>
  )
}
