import React from 'react'
import './Product.css'
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { motion } from 'framer-motion';
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';

const Product = ({ item }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(
            addToCart({ ...item, quantity: 1 })
        );
        toast.dark(`Successfully added ${item.title} to your cart`, {
            // theme: "colored",
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnHover: false,
        })
    };

    return (
        <motion.div className="product-card"
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}

        >
            <div onClick={() => navigate(`/product/${item._id}`)}>
                <div className="thumbnail">
                    <img src={item.img} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">{item?.title}</span>
                    <span className="qty">QTY: {item?.qty}</span>
                    <span className="price">&#8377; {item?.price}</span>
                </div>
            </div>
            <div className="prod-btn">
                <div className="view-detail" onClick={() => navigate(`/product/${item._id}`)}>
                    <VisibilityIcon style={{ fontSize: "1.2em", color: "#54AC00" }} />
                    View detail
                </div>
                {item.inStock === true ?
                    <div className="shop-btn" onClick={handleClick}>
                        < ShoppingBagIcon style={{ fontSize: "1.2em", color: "#54AC00" }} />
                        Add to cart
                    </div> :
                    <div className="out-of-stock" >Out of Stock</div>
                }
            </div>
        </motion.div>

    )
}

export default Product
