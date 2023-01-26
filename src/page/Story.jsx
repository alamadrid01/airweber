import React from 'react'
import '../styles/Story.scss'
import tower from '../assets/tower.jpg'
import travel from '../assets/travel.jpg'
import woman from "../assets/woman.png"
import towers from "../assets/tower-s.png"
import island from "../assets/island.jpg"
import third from "../assets/third.png"
import fifth from "../assets/fifth.png"
import sixth from "../assets/sixth.jpg"

import "../styles/Homepage.scss"

function Story() {
  return (
    <div>
        <div className="story">
          <section className='Sections'>
          <div className="left">
            <img src={tower} alt="" />
          </div>
          <div className="right">
            <h1>Our Story</h1>
            <p>“We’re here to help you travel the world, make money selling real estate and get your business at the top of the search engines.”</p>
            <p>AIRWEBER is a one-stop travel agency, real estate agency, and digital marketing company. We help you to plan your trip, find the right hotel, or buy a property online. For your business, we help with all your marketing needs so you can focus on doing what you do best.</p>
            <p>A travel agency to tour the world, travel with speed and get unrestricted global access via dual citizenship</p>
            <p>Feel the exhilarating air of freedom, travel the world with great adventure, escape the bureauCRAZY, Combining modern technology, and old-fashioned service we ensure every trip is special</p>
            </div>
          </section>
          <section className='section'>
            <div className="left">
              <h1>Our Mission</h1>
              <p>“We’re here to help you travel the world, own property and get your business at the top of the search engines.” </p>
              <p>Gain digital freedom with AirWEBER!</p>
              <img src={travel} alt="travel" />
            </div>
            <div className="right">
              <div className="first">
                <img src={woman} alt="woman" />
                <img src={towers} alt="towers" />
                </div>
                <div className="second">
                  <img src={island} alt="island" />
                  </div>
              </div>
          </section>
          <div className="choose">
                <h2>Why Choose Us</h2>
                <div className="whole">
                    <div className="card">
                        <h5> Earn More</h5>
                        <hr />
                        <p>Earn more as your business offers more</p>
                    </div>
                    <div className="card">
                        <h5>Innovate</h5>
                        <hr />
                        <p>Get access to ideas before they form</p>
                    </div>
                    <div className="card">
                        <h5>Go Global</h5>
                        <hr />
                        <p>Experience true freedom as a Global citizen</p>
                    </div>
                    <div className="card">
                        <h5>Professional</h5>
                        <hr />
                        <p>Professionals that Genuinely CARE</p>
                    </div>
                </div>
            </div>
            <div className="testimony">
                <h2>Client Testimonials</h2>
                <div className="whole">
                    <div className="card">
                        <p>“I came in expecting an Oligarch who'll try to shove down suggestions and upsells down my throat, but my reality was I found a team genuinely willing to help me, they gave me incredibly innovative ideas, methods and info, and prompt execution on my choices, I really have found a long term partner.”</p>
                        <div className="hold">
                            <img src={third} alt="" />
                            <span>Adeola Babalols - Delly Team</span>
                        </div>
                    </div>
                    <div className="card">
                        <p>“They've been so up to date with tech and solutions its crazy, they're my goto hub for innovative ideas before they reach the public. You've made my life so much easier, Thank you Airweber”</p>
                        <div className="hold">
                            <img src={fifth} alt="" />
                            <span>Smart Niza - Techy</span>
                        </div>
                    </div>
                    <div className="card">
                        <p>“Dual citizenship, I'm blown away by how much access this has given me, the AirWEBER team made the whole process easy, and an investment rather than expense, I'm proud of them, huge asset.”</p>
                        <div className="hold">
                            <img src={sixth} alt="" />
                            <span>Tico Lohan</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Story