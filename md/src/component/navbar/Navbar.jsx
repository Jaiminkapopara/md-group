import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
    <div className="nav">
      <div className="logo">
        <a href="#"><img src={logo} alt="" /></a>
      </div>
      <div className="menu">
        <ul>
        <li><a href="#">Home</a></li>
          <li><a href="#detail">About Us</a></li>
          <li><a href="#footer">Contact Us</a></li>

        </ul>
      </div>


      <div className="burger">

        {toggleMenu
          ? <RiCloseLine className='close'
            color="var(--title)" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line className='lines' color="var(--title)" size={27} onClick={() => setToggleMenu(true)} />}



        {toggleMenu && (

          <div className='scale-up-center'>

<div className="hmenu ">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#detail">About</a></li>
          <li><a href="#footer">Contact</a></li>

        </ul>
      </div>

          </div>




        )}
      </div>

    </div>
    </div>
  )
}

export default Navbar
