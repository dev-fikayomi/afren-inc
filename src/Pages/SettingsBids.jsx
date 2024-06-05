import { useEffect, useState } from "react";
// import "../Styles/sett-bids.css"
import "../style.css";
import rect from "../assets/afren-images2/Rectangle 34624273.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function SettingsBids() {
  const [bids, setBids] = useState([]);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://afren-main-server.onrender.com/api/getBids", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setBids(response.data);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  }, []);

  function formatUpdatedAt(updatedAt) {
    const currentTime = new Date();
    const updatedAtTime = new Date(updatedAt);
    const timeDifference = currentTime - updatedAtTime;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return `Updated ${seconds} second${seconds === 1 ? "" : "s"} ago`;
    } else if (minutes < 60) {
      return `Updated ${minutes} minute${minutes === 1 ? "" : "s"} ago`;
    } else if (hours < 24) {
      return `Updated ${hours} hour${hours === 1 ? "" : "s"} ago`;
    } else {
      return `Updated ${days} day${days === 1 ? "" : "s"} ago`;
    }
  }

  return (
    <div id="main">
      <div id="pg-title">
        <h3>My Bids</h3>
      </div>
      <div id="whole-bids-cov">
        <div id="bids-pgs">
          {/* <a href="javascript:void(0)" className="bid-pg">Active Bids</a>
                <a href="javascript:void(0)" className="bid-pg">Won Auction</a>
                <a href="javascript:void(0)" className="bid-pg">Bids History</a> */}
          <a href="javascript:void(0)" className="bid-pg active">
            All
          </a>
        </div>
        <div className="table-body">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
          </table>
          <div className="demacation">
            <div className="dm-line"></div>
            <p>Last Bids</p>
          </div>
          {bids.length === 0 && (
            <div id="today-bids">
              <p>No bids during this time</p>
              <p className="srch-jbs">
                <a href="">Search jobs</a> for you and place a bid
              </p>
            </div>
          )}

          {/* <div className="demacation">
                    <div className="dm-line"></div>
                    <p style={{whiteSpace: "nowrap"}}>
                        Last Week
                    </p>
                </div> */}
          {bids &&
            bids.length > 0 &&
            bids.map((bid) => (
              <div className="tab-bod">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div className="client-prf">
                          <div className="client-pic">
                            <img src={rect} alt="" />
                          </div>
                          <div>
                            <p>{bid.name}</p>
                            <span>{formatUpdatedAt(bid.updatedAt)}</span>
                          </div>
                        </div>
                      </td>
                      <td className="type">{bid.type}</td>
                      <td>
                        <p className="status in-revision">
                          {bid.applicationStatus}
                        </p>
                      </td>
                      <td>
                        <h3>${bid.amount}</h3>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          {/* <div className="tab-bod">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="client-prf">
                                        <div className="client-pic">
                                            <img src={rect} alt=""/></div>
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
                                            <img src={rect} alt=""/>
                                        </div>
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
                                            <img src={rect} alt=""/></div>
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
                                            <img src={rect} alt=""/>
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
                                            <img src={rect} alt=""/>
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
                </div> */}
        </div>
        <div id="pgination">
          <p>Showing 1 - 5 of 24</p>
          <div id="pg-arrows">
            <a href="javascript:void(0)">&lt;</a>
            <a href="javascript:void(0)">&gt;</a>
          </div>
        </div>
      </div>
    </div>
  );
}
