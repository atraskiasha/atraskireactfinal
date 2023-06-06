

import React from 'react'
import { NavLink } from "react-router-dom";
import logo4 from './images/logo.png';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark ">
      <div className="container-fluid">

        <NavLink className="navbar-brand" to="/home">
          <img src={logo4} alt="Your Logo" width="100px" height="100"
            className="d-inline-block align-text-top" />
        </NavLink>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            
            <li className="nav-item dropdown">
              <NavLink className=" nav-link dropdown-toggle " to="#" id="navbarDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#808080'}}>
                Services
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink className="dropdown-item" to="/services">Digital Marketing</NavLink></li>
                <li><NavLink className="dropdown-item" to="/event">Events</NavLink></li>
                <li><NavLink className="dropdown-item" to="/public">Public Relation</NavLink></li>
                <li><NavLink className="dropdown-item" to="/production">Production</NavLink></li>
                <li><NavLink className="dropdown-item" to="/web">Web Development</NavLink></li>
                <li><NavLink className="dropdown-item" to="/mice">MICE</NavLink></li>
                <li><NavLink className="dropdown-item" to="/marketing">Influencer Marketing</NavLink></li>
              </ul>
            </li>
            
            <li className="nav-item">
             < NavLink className="nav-link" to="/Work1">Work</NavLink>
            </li>
            <li className="nav-item">
             < NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>
            {/* <li className="nav-item">
             < NavLink className="nav-link" to="/chat">Chat</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="https://mycitymyvoice.in/">MCMV</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blogger">Blogger's Mela</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Eshower">E-Shower</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/careers">Careers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ContactUs">Contact us</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
