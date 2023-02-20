import React from 'react'
import './footer.css'
import logo from '../../assets/wlogo.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="logo">
            <a href="#"><img src={logo} alt="" /></a>
        </div>
        <div className="information">
            <p>Email: info@mdgroupsurat.com</p>
            <p>© 2022 mdgroup</p>
        </div>
      
    </div>
  )
}

export default Footer
