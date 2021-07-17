import React from "react";
import logo from "../logo.png";
import {Link} from "react-scroll";
// React Font Awesome //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const logoStyle = {
  height: "2.5rem",
  width: "2.5rem",
  marginLeft: "1rem"
};
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              className="logoStyle"
              src={logo}
              style={logoStyle}
              alt="logo..."
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link smooth={true} to="home" className="nav-link" href="#">
                  Home <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="about" className="nav-link" href="#">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="services" className="nav-link" href="#">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="experience"
                  className="nav-link"
                  href="#"
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="portfolio"
                  className="nav-link"
                  href="#"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="contacts" className="nav-link" href="#">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
