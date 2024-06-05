import React from 'react'

export default function OngoingGigs({_id,title,description,price,timeLeft}) {
  return (
    <div className="gigs-card">
    <div className="gig-title">
        <p>{title}</p>
        <i className="fas fa-ellipsis-v"></i>
    </div>
    <p className="gig-description">{description}</p>
    <div className="gig-prize">
        <p>Prize</p>
        <span>${price}/hr</span>
    </div>
    <div className="gig-dvry-time">
        <p>Delivery Time</p>
        <span>{timeLeft} days late</span>
    </div>
    <div className="gig-bttm-div">
        <div className="gig-progress">in progress</div>
        {/* <div className="gig-client-prof">
            <div className="gig-client one"><img src={rect2} alt="" /></div>
            <div className="gig-client two"><img src={rect} alt="" /></div>
            <div className="gig-client three"><img src={rect1} alt="" /></div>
        </div> */}
    </div>
</div>
  )
}
