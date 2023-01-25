import React from 'react'
import "../styles/Homepage.scss"
import picture from "../assets/react.svg";
import travel from "../assets/travel.jpg"
import digital from "../assets/digital.jpg"
import estate from "../assets/estate.jpg"
import island from "../assets/island.jpg"
import first from "../assets/first.png"
import second from "../assets/second.png"
import fourth from "../assets/fourth.png"
import ballon from "../assets/ballon.jpg"


function Homepage() {
    return (
        <>
            <div className='homepage'>
               
            </div>
            <div className="hero">
            <h1>Need to be somewhere?We make it BREEZY</h1>
                <p>Your one-stop travel agency, real estate agency and digital marketing company. We help you to plan your trip, find the right hotel, or buy a property online. For your business we help with all your marketing needs so you can focus on doing what you do best.</p>
                <button>Contact Us</button>
            </div>
            <div className="services">
                <h2>Our Services</h2>
                <span>We're here to help you travel the world, make money trading real estate and get your website at the top of the search engines.</span>
                <div className="whole">
                    <div className="card">
                        <img src={travel} alt="" />
                        <h5>Travel</h5>
                        <p>Feel the exhilarating air of freedom, travel the world with great adventure, escape the bureauCRAZY, Combining modern technology, and old-fashioned service we ensure every trip is special</p>
                    </div>
                    <div className="card">
                        <img src={estate} alt="" />
                        <h5>Real Estate</h5>
                        <p>Join the Elite in owning Global Real Estate, @ Airweber, you enjoy hidden benefits and profitable opportunities. Let your Real Estate project create the lifestyle of Freedom and Luxury you've always wanted, not just for you alone, your family included</p>
                    </div>
                    <div className="card">
                        <img src={digital} alt="" />
                        <h5>Digital Services</h5>
                        <p>We get it. You're a busy person and you don't have time to worry about your business. Let us handle it for you. Services to boost your business ranging from online advertising, web design, brand/product launch & design, copywriting, video creation and animation, model design. Absolutely any digital service to get your business thriving even on auto-pilot</p>
                    </div>
                </div>
                <button>View All Services</button>
            </div>
            <div className="choose">
                <h2>Why Choose Us</h2>
                <div className="whole">
                    <div className="card">
                        <h5>Tour & Earn</h5>
                        <p>Tour the World while your business runs on auto-pilot</p>
                    </div>
                    <div className="card">
                        <h5>Dual Citizenship</h5>
                        <p>Place the world at the palm of your hands, with Multiple-citizenship</p>
                    </div>
                    <div className="card">
                        <h5>Creative Marketing</h5>
                        <p>Creative professional services, to Set your business at the center</p>
                    </div>
                    <div className="card">
                        <h5>Travel Processing</h5>
                        <p>Travel Booking, Study visa, Travel documents, Travel research</p>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="left">
                    <img src={island} alt="" />
                </div>
                <div className="right">
                    <h2>About AIRWEBER</h2>
                    <p>The world is your oyster.</p>
                    <p>We’re here to help you travel the world, make money selling real estate and get your website to the top of the search engines</p>
                    <span>Our Story</span>
                </div>
            </div>
            <div className="testimony">
                <h2>Client Testimonials</h2>
                <div className="whole">
                    <div className="card">
                        <p>“If you are looking to improve your business or even start a new one, you should call AIRWEBER. From marketing, to travel agency, they have it all and make it easy to sell."</p>
                        <div className="hold">
                            <img src={first} alt="" />
                            <span>Shelby Summers - Summer Aesthetics</span>
                        </div>
                    </div>
                    <div className="card">
                        <p>“AirWeber has always been my 'go-to' hub Airweber for many years, for the best customer service, innovative ideas, travel, and hotel bookings. They make it so easier for me to earn, travel, and implement my ideas In mark time”</p>
                        <div className="hold">
                            <img src={second} alt="" />
                            <span>Mr. Iloba - Lobzy Empire</span>
                        </div>
                    </div>
                    <div className="card">
                        <p>“I am using the travel agency and they help me to book my flights and hotels. I own a few rental properties, and they are helping me get more clients and make more money than I thought possible!</p>
                        <div className="hold">
                            <img src={fourth} alt="" />
                            <span>Yan Tone - Tone Wow Trader</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="want">
                <div className="left">
                <h2>Want More Freedom?</h2>
                <p>You’ve fought hard, made your business work, now you need more time for family, friends and most especially yourself.
                </p>
                <p>
                    Believe it’s high-time your money works for you? While you go on that vacation and experience true freedom?
                </p>
                <p>Hit the button below now…</p>
                <button>Contact Us</button>
                </div>
                <div className="right">
                    <img src={ballon} alt="" />
                </div>
            </div>
        </>
    )
}

export default Homepage