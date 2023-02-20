import React from 'react'
import './moreimg.css'

const Moreimg = (props) => {
  return (
    <div className='imgs'>
       <div className="moreimg">
        <img src={props.img} alt="image" />
      </div>
    </div>
  )
}

export default Moreimg
