import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/logoClear.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>
          <Link to="backdrop" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} offset={-260} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="events" smooth={true} offset={-260} duration={500}>
            Events
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <li className="btn">
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              Contact Us
            </Link>
          </li>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
