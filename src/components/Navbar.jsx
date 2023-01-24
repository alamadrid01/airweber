import React from 'react'
import "../styles/Navbar.scss"
import picture from "../assets/react.svg"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <div className="left">
                <Link to="/"><img src={picture} alt="picture" /></Link>
            </div>
            <div className="right">
                <ul>
                    <li>Home</li>
                    <li>Our Story</li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar