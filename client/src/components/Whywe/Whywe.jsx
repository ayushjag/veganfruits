import React from 'react'
import './Whywe.css'
import firstImg from "../../assests/midbanner.png"
import secImg from "../../assests/midbanner-2.png"
import thirdImg from "../../assests/midbanner-3.png"
import forthdImg from "../../assests/midbanner-4.png"
import { motion } from 'framer-motion';
const Whywe = ({ headTag }) => {
    return (
        <>
            <div className="whywe-container"
            >
                <motion.div className='head-Title'
                    initial={{ opacity: 0, y: 40 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.7 }}
                >{headTag}</motion.div>
                <motion.div className="whywe"
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false }}
                >
                    <div className="whywe-card">
                        <div className="whywe-thumbnail">
                            <img src={firstImg} alt="" />
                        </div>
                        <div className="whywe-details">
                            <span className="whywe-title">Recyclable Packaging</span>
                            <span className="desc">Recyclable packaging is made from materials that can be collected, processed, and made into new products. This helps to conserv.</span>
                        </div>
                    </div>
                    <div className="whywe-card" >
                        <div className="whywe-thumbnail">
                            <img src={secImg} alt="" />
                        </div>
                        <div className="whywe-details">
                            <span className="whywe-title">Creativity and  Innovation</span>
                            <span className="desc">We are always thinking of new ways to make everything and everyday taste better. Our intent is to give you a unique experience with every product</span>
                        </div>
                    </div>
                    <div className="whywe-card">
                        <div className="whywe-thumbnail">
                            <img src={thirdImg} alt="" />
                        </div>
                        <div className="whywe-details">
                            <span className="whywe-title">100% Quality assurity</span>
                            <span className="desc">Quality assurance is the promise that a customer will have the most positive experience possible with a company regardless of purpose, and time again.</span>
                        </div>
                    </div>
                    <div className="whywe-card">
                        <div className="whywe-thumbnail">
                            <img src={forthdImg} alt="" />
                        </div>
                        <div className="whywe-details">
                            <span className="whywe-title">Complete Transparency</span>
                            <span className="desc">We share complete information about our packaging in what is going inside the product, which you can clearly find listed on pack.</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Whywe
