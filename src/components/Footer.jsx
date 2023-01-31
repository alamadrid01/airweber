import React from 'react'
import "../styles/Footer.scss"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <ul>
                <li><Link className='Link' to="/">Home</Link></li>
                <li><Link className='Link' to="/our-story">Our Story</Link></li>
                <li><Link className='Link' to="/service">Services</Link></li>
                <li><Link className='Link' to="/contact">Contact Us</Link></li>
            </ul>
            <span>© 2022 All Rights Reserved</span>
        </footer>
    )
}

export default Footer