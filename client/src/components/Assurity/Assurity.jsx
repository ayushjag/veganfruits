import React from 'react'
import './Assurity.css'
import { motion } from 'framer-motion';
import img1 from '../../assests/secure.png'
import img2 from '../../assests/shipping.png'
import img3 from '../../assests/natural.png'
import img4 from '../../assests/delivery.png'

const Assurity = () => {
    return (
        <>
            <div className="Assurity-container"
            >
                <motion.div className="Assurity"
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false }}
                >
                    <div className="Assurity-card">
                        <div className="Assurity-thumbnail">
                            <img src={img3} alt="" />
                            <span className="Assurity-title">100% NATURAL</span>
                        </div>
                    </div>
                    <div className="Assurity-card" >
                        <div className="Assurity-thumbnail">
                            <img src={img4} alt="" />
                            <span className="Assurity-title">FAST SHIPPING</span>
                        </div>
                    </div>
                    <div className="Assurity-card">
                        <div className="Assurity-thumbnail">
                            <img src={img2} alt="" />
                            <span className="Assurity-title">FREE DELIVERY</span>
                        </div>
                    </div>
                    <div className="Assurity-card">
                        <div className="Assurity-thumbnail">
                            <img src={img1} alt="" />
                            <span className="Assurity-title">100% SECURE</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Assurity