
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { useSelector } from "react-redux";


const Footer = () => {
    const navigate = useNavigate();
    const [isHomePage, setIsHomePage] = useState(false);
    const user = useSelector((state) => state.user.currentUser);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setIsHomePage(true);
        } else {
            setIsHomePage(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    return (
        <>
            <motion.footer className="footer"

                initial={{ opacity: 0.7 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
            >
                <div className="footer-content">
                    <div className="col">
                        <div className="title">VEGAN-FOOD</div>
                        <div className="text">
                            An organic fruits shop is a store that specializes in selling organic fruits, which are grown without synthetic pesticides, herbicides, or fertilizers
                            Offers a variety of organic fruit products, such as juices, jams, and dried fruits.
                        </div>
                        <div className="social-items">
                            <div className="social-icon1"><FacebookIcon /></div>
                            <div className="social-icon2"><TwitterIcon /></div>
                            <div className="social-icon3"> <InstagramIcon /></div>
                            <div className="social-icon4"> <LinkedInIcon /></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">Get In Touch</div>
                        <div className="c-item">
                            <LocationOnIcon />
                            <div className="text">Village Rampatti, Madhubani, Bihar</div>
                        </div>
                        <div className="c-item">
                            <LocalPhoneIcon />
                            <div className="text">+91 8541806579</div>
                        </div>
                        <div className="c-item">
                            <EmailIcon />
                            <div className="text">customercare@veganfood.com</div>
                        </div>
                        <div className="subscribe" >
                            <div className="forms">
                                <input type="text" placeholder="Subscribe" />
                            </div>
                            <button>→</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">Quick Links</div>
                        <span className="text" onClick={() => { navigate('/products/dry-fruits') }}>
                            Dry Fruits</span>
                        <span className="text" onClick={() => { navigate('/products/juice') }}>Fresh Juice</span>
                        <span className="text" onClick={() => { navigate('/products/fruits') }}>Fruits</span>
                        {
                            !user &&
                            <span className="text">SignIn</span>
                        }
                        {
                            user &&
                            <span className="text" onClick={() => navigate("/Profile")}>Profile</span>
                        }
                    </div>
                    <div className="col">
                        <div className="title">Pages</div>
                        <span className="text" onClick={() => navigate("/")}>Home</span>
                        <span className="text" onClick={() => navigate("/about")}>About</span>
                        <span className="text" onClick={() => navigate("/Cart")}>Cart</span>
                        <span className="text" onClick={() => navigate("/contactUs")}>Contact us</span>
                        <span className="text">Privacy policy</span>
                    </div>
                </div>
                <div className="bottam-bar">
                    <div className="bottam-bar-content">
                        <div className="text">
                            Copyright &copy; 2025,
                            <span>
                                VEGANFOOD.COM
                            </span>
                            ,All Rights Reserved
                        </div>
                        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt=" " />
                    </div>
                </div>
            </motion.footer>
            {
                isHomePage && (

                    <motion.div className='footer-btn'
                        initial={{ opacity: 0, x: 40 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: false }}
                        onClick={() => navigate("#")}>
                        <div className='home-button'>
                            <span>⇧</span>
                        </div>
                    </motion.div>
                )
            }

        </>

    );
};

export default Footer;