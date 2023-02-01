import React from "react";
import "../styles/Navbar.scss";
import picture from "../assets/logo.png";
import { Link } from "react-router-dom";
import Bar from "../assets/bar.svg"
import Close from "../assets/close.png"

function Navbar() {
  const [open, setOpen] = React.useState(false)
  // console.log(open)
  return (
    <div>
      <nav>
        <div className="left">
          <Link to="/">
            <img src={picture} alt="picture" />
          </Link>
        </div>
        <div className="right">
          <ul style={{ display: `${open ?'flex': 'none'} `}}>
            <li>
              <Link className="Link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="Link" to="/our-story">
                Our Story
              </Link>
            </li>
            <li>
              <Link className="Link" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="Link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <button onClick={() => setOpen(!open)}><img src={`${open ? Close : Bar}`} alt="bar"/></button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
