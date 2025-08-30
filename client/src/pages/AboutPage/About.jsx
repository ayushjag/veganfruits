import React from 'react'
import './About.css'
import abtBanner from '../../assests/banner.png'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Announcement from '../../components/Announcement/Announcement'

function About() {
    return (
        <>
            <Announcement />
            <Header />

            <div className="about">
                <div className="abt-heading">About Us</div>
                <div className="about-content">
                    <p>Welcome to VeganFood, your go-to destination for the finest organic fruits! We are passionate about providing you with the freshest, most delicious, and ethically sourced fruits that nature has to offer. Our commitment to sustainability and health is at the core of everything we do, ensuring that every bite you take is not only good for you but also good for the planet.</p>
                    <img src={abtBanner} alt="" />
                    <div className="abt-heading">Our Mission</div>
                    <p>
                        At VeganFood, our mission is to revolutionize the way people think about and consume fruits. We believe that everyone deserves access to high-quality, nutrient-rich produce that is free from harmful chemicals and pesticides. By offering a wide range of organic fruits, we aim to promote healthier lifestyles and support sustainable farming practices.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About