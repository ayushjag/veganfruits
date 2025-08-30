
import './NewArrival.css'
import { motion } from 'framer-motion';

const NewArrival = ({ heading, arrivals }) => {


    return (
        <>
            <div className="NewArrival-container"
            >
                <motion.div className='head-Title'
                    initial={{ opacity: 0, y: 40 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.7 }}
                >{heading}</motion.div>
                <motion.div className="NewArrival"
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false }}
                >
                    {
                        arrivals.map((item) =>
                        (
                            <div className="NewArrival-card" key={item._id}>
                                <p className="new">
                                    NEW
                                </p>
                                <div className="NewArrival-thumbnail">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="NewArrival-details">
                                    <span className="NewArrival-title">{item.title}</span>
                                    <span className="price">&#8377; {item.price}</span>
                                </div>
                            </div>
                        )
                        )
                    }

                </motion.div>
            </div>
        </>
    )
}

export default NewArrival