
import React from 'react'
import banner from '../../assests/mainbanner.png'
import './Philosophybanner.css'
import { motion } from 'framer-motion';
const Philosophybanner = () => {
  return (
    <motion.div className='image'
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
    >
      <img className='banner' src={banner} alt="" />
    </motion.div>
  )
}

export default Philosophybanner
