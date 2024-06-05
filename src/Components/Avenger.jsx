import React from 'react'

export default function TeamMember({id,name,position,image}) {
  // console.log(id,name,position,image)
  return (
    <div className="indi-team">
      <div className="member-pic"><img src={image} alt=""/></div>
      <p><b>{name}</b></p>
      <small>{position}</small>
    </div>
  )
}
