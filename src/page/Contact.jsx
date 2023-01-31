import React from 'react'
import "../styles/Contact.scss"
import picture from "../assets/whatsap.svg"

function Contact() {
  return (
    <div className='contact'>
        <div className="container">
        <h1>Contact Us</h1>
        <p>Ready to embark on an exciting journey with us? or have inquiries to make, hop on a call/chat with us</p>
        <p>We would love to hear from you.</p>
        <p>Feel free to reach out using the details below.</p>
        <div className="icon">
          <div className="holder">
            <img src={picture} alt="icon" />
          </div>
          <div className="holder">
            <img src={picture} alt="icon" />
          </div>
          <div className="holder">
            <img src={picture} alt="icon" />
          </div>
          <div className="holder">
            <img src={picture} alt="icon" />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Contact