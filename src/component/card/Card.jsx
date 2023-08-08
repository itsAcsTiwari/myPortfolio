import React from 'react'
import "./card.css";

const Card = ({ emoji, heading, details }) => {
  return (
    <div className='cards' >
      <img src={emoji} alt="" style={{ height: "60px", width: "60px" }} />
      <span>{heading}</span>
      <span>{details}</span>
      <button className="c__btn">Learn more</button>

    </div>
  )
}

export default Card
