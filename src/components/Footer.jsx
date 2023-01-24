import React from 'react'
import "../styles/Footer.scss"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <ul>
                <li>Home</li>
                <li>Our Story</li>
                <li>Services</li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <span>© 2022 All Rights Reserved</span>
        </footer>
    )
}

export default Footer