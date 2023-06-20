import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo4 from './images/logo.png';

const Navbar = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subSubMenuOpen, setSubSubMenuOpen] = useState(false);

  const subMenuRef = useRef(null);
  const subSubMenuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target) &&
        subSubMenuRef.current &&
        !subSubMenuRef.current.contains(event.target)
      ) {
        closeDropdowns();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
    setSubSubMenuOpen(false); // Close sub-submenu on submenu toggle
  };

  const toggleSubSubMenu = () => {
    setSubSubMenuOpen(!subSubMenuOpen);
  };

  const closeDropdowns = () => {
    setSubMenuOpen(false);
    setSubSubMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/Atraski">
          <img
            src={logo4}
            alt="Your Logo"
            width="100px"
            height="100"
            className="d-inline-block align-text-top"
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Atraski">
                Home
              </NavLink>
            </li>

            <li className={`nav-item dropdown ${subMenuOpen ? 'show' : ''}`} ref={subMenuRef}>
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                onClick={toggleSubMenu}
                style={{ color: '#808080' }}
              >
                Services
              </NavLink>
              <ul className={`dropdown-menu ${subMenuOpen ? 'show' : ''}`} aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <NavLink className="dropdown-item" to="/services" onClick={closeDropdowns}>
                    Digital Marketing
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/event" onClick={closeDropdowns}>
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/marketing" onClick={closeDropdowns}>
                    Influencer Marketing
                  </NavLink>
                </li>
                <li
                  className={`nav-item dropdown ${subSubMenuOpen ? 'show' : ''}`}
                  onMouseEnter={toggleSubSubMenu}
                  onMouseLeave={toggleSubSubMenu}
                  ref={subSubMenuRef}
                >
                  <NavLink className="dropdown-item dropdown-toggle " to="#" style={{ backgroundColor: 'white', color: 'black' }}>
                    More
                  </NavLink>
                  <ul className={`dropdown-menu ${subSubMenuOpen ? 'show' : ''}`}>
                    <li>
                      <NavLink className="dropdown-item" to="/production" onClick={closeDropdowns}>
                        Production
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/web" onClick={closeDropdowns}>
                        Web Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/mice" onClick={closeDropdowns}>
                        MICE
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/OurWork">
                Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="https://mycitymyvoice.in/">
                MCMV
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="https://atstay.in/">
                Atstay
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sectionfashion">
                Fashion
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blogger">
                Blogger's Mela
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Eshower">
                E-Shower
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/careers">
                Careers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ContactUs">
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
