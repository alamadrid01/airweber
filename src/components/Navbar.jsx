import React from "react";
import "../styles/Navbar.scss";
import picture from "../assets/logo.png";
import { Link } from "react-router-dom";
import Bar from "../assets/bar.svg"
import Close from "../assets/close.png"

function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [matches, setMatches] = React.useState(window.matchMedia("(max-width: 768px").matches)

  React.useEffect(() =>{
    window.matchMedia("(max-width: 768px)").addEventListener('change', (e) => setMatches(e.matches))
  }, [])


  return (
    <div>
      <nav>
        <div className="left">
          <Link to="/">
            <img src={picture} alt="picture" />
          </Link>
        </div>
        <div className="right">
          {
            matches ?
            <>
            <button onClick={() => setOpen(!open)}><img src={`${open ? Close : Bar}`} alt="bar"/></button>
            <ul style={{ display: `${open ? 'flex' : 'none'} `}}>
            <li>
              <Link className="Link" to="/" onClick={() => setOpen(!open)}>
                Home
              </Link>
            </li>
            <li>
              <Link className="Link" to="/our-story" onClick={() => setOpen(!open)}>
                Our Story
              </Link>
            </li>
            <li>
              <Link className="Link" to="/services" onClick={() => setOpen(!open)}>
                Services
              </Link>
            </li>
            <li>
              <Link className="Link" to="/contact" onClick={() => setOpen(!open)}>
                Contact Us
              </Link>
            </li>
          </ul> 
          </>
            :
            <ul style={{ display: `${open ? 'none' : 'flex'} `}}>
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
          }
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
