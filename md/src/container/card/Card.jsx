import React from 'react'
import './card.css'

const Card = (props) => {

 
  return (
    <div className='card' >
      <div className="bg">
        <img src={props.img} alt="image" />
        <div className="infom">
          <h5>{props.title}</h5>
          {props.infom}        </div>

      </div>
    </div>
  )
}

export default Card
