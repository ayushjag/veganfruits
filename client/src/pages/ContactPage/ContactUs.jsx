import React from 'react'
import './ContactUs.css'
import Footer from '../../components/Footer/Footer'
import Announcement from '../../components/Announcement/Announcement'
import Header from '../../components/Header/Header'

const ContactUs = () => {
    return (
        <>
            <Announcement />
            <Header />

            <div className="contact">
                <div className="contact-container">
                    <h1>Connect with Us</h1>
                    <form action="">
                        <label htmlFor="name">Name </label>
                        <input type="text" id="name" placeholder="Name" />

                        <label htmlFor="email">Email </label>
                        <input type="email" id="email" placeholder="Email" />

                        <label htmlFor="phone">Phone </label>
                        <input type="tel" id="phone" placeholder="Phone" />

                        <label htmlFor="textarea">How can we help you?</label>
                        <textarea
                            name="textarea"
                            id="textarea"
                            cols="20"
                            rows="5"
                            required
                            placeholder="Message..."
                        ></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>

                <div className="map-info">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.6658287159844!2d77.31209177549881!3d28.579795775693604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5106f125cfb%3A0xc516eda25aa8482c!2sDucat%20IT%20Training%20School%20Noida%20Sector-16!5e0!3m2!1sen!2sin!4v1709477561937!5m2!1sen!2sin"
                        width="1000"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Location"
                    ></iframe>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ContactUs
