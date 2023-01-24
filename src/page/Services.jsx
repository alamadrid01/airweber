import React from 'react'
import "../styles/Services.scss"

function Services() {
  return (
    <div className='service'>
        <h2>Our Services</h2>
        <p>Get a taste of Global Freedom</p>
        <section>
            <div className="first">
              <h2>Travel</h2>
              <img src="" alt="" />
            </div>
            <div className="second">
              <h3>Bookings</h3>
              <hr />
              <p>We’re here to help you with your travel and tourism needs. Whether you’re looking for an international school, or just need to plan a vacation, we’re here to make it happen.</p>
            </div>
            <div className="third">
              <img src="" alt="" />
            </div>
            <div className="fourth">
              <h2>Dual Citizenship</h2>
              <hr />
              <p>As you grow your business and expand to explore new opportunities. You need access beyond your birth country’s passport or visa to where you want to invest. Right now, there’s a way to become an international citizen with dual citizenship and get global freedom and security.</p>
            </div>
        </section>
        <section>
          <div className="first">
            <img src="" alt="" />
          </div>
          <div className="second">
            <h2>Tours & Tourism</h2>
            <hr />
            <p>Life is short, but experience lives forever. Go on an adventure to all the places you’ve always wanted to go and let us handle the bureaucracy for you</p>
          </div>
          <div className="third">
            <h2>Real Estate</h2>
            <img src="" alt="" />
          </div>
          <div className="fourth">
            <h3>Investment</h3>
            <hr />
            <p>Invest in profitable global real estate, that’ll secure wealth for even future generations.</p>
          </div>
        </section>
        <h2 className='digital'>Digital Services</h2>
        <section>
        <div className="first">
          <img src="" alt="" />
        </div>
        <div className="second">
          <h3>Digital Marketing</h3>
          <hr />
          <p>Get your business before the eyes of “your” customers, refine your product, enhance your brand, through social media, web design, digital advertising, video marketing and more. Don’t settle for less. Let us help you grow your business with innovative digital marketing strategies</p>
        </div>
        <div className="third">
          <img src="" alt="" />
        </div>
        <div className="fourth">
          <h3>Purchase</h3>
          <hr />
          <p>Purchase property for you and your family, from a luxurious mansion to a simple minimalist outdoor home.Also get access to the latest advancements in home technology</p>
        </div>
        </section>
        <section>
          <div className="first">
            <img src="" alt="" />
          </div>
          <div className="second">
            <h3>Gifts Vouchers & Courses</h3>
            <hr />
            <p>Shop gifts for your loved ones, but also learn with them. Bond with your loved ones across the world</p>
          </div>
          <div className="third">
            <img src="" alt="" />
          </div>
          <div className="fourth">
            <h3>Serviced Apartment & Rentals</h3>
            <hr />
            <p>Rent your home, make it a serviced apartment, list it on AIRBNB, and let us handle the job of making it an easy & fun experience</p>
          </div>
        </section>

    </div>
  )
}

export default Services