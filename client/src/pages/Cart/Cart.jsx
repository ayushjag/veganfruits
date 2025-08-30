
import React, { useState } from 'react'
import './Cart.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../../components/Header/Header'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'
import { useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import emptycart from '../../assests/emptycart.svg';
import cartImg from '../../assests/empty-cart.png';
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const Cart = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const [isPaymentInProgress, setIsPaymentInProgress] = useState(false);

    const makePayment = async () => {
        setIsPaymentInProgress(true);
        try {
            // console.log(cart);
            const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

            const body = {
                products: cart.products
            }

            const headers = {
                'Content-Type': 'application/json',
            }

            const response = await fetch("https://vegan-food-012z.onrender.com/api/create-checkout-session", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            });

            const session = await response.json();

            const result = stripe.redirectToCheckout({
                sessionId: session.id
            });

            if (result.error) {
                console.log(result.error)
            }
            else {
                await createOrder();
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsPaymentInProgress(false);
        }
    };
    const createOrder = async () => {
        try {
            const response = await axios.post('https://vegan-food-012z.onrender.com/api/orders', {
                products: cart.products,
                userId: user._id,
                userName: user.username,
                email: user.email,
                phone: user.phone,
                amount: cart.total,
            });

            const data = await response.data;
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <Header />
            <Announcement />
            <div className="wrapper">
                <h1>YOUR BAG</h1>
                <hr />
                <div className="top">
                </div>
                <div className="bottom">
                    <div className="info">
                        {user ? <>
                            {!cart.products.length && <div className="empty-cart">
                                <img src={cartImg} alt="sorry" />
                                <p> Your cart is empty.</p>
                                <span>Add something to make me happy :)</span>
                            </div>}
                            {cart.products.map((product) => (
                                <div className="product" key={product._id} product={product} >
                                    <div className="product-detail" onClick={() => navigate(`/product/${product._id}`)}>
                                        <img src={product.img} alt="" />
                                        <div className="details">
                                            <div className="product-name">
                                                <b>Product:</b> {product.title}
                                            </div>
                                            <div className="product-id">
                                                <b>ID:</b> {product._id}
                                            </div>
                                            <div className="product-qty">
                                                <b>QTY:</b> {product.qty}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="PriceDetail">
                                        <button onClick={() => {
                                            dispatch(removeFromCart(product));
                                            toast.dark(`Successfully removed ${product.title} from your cart`, {
                                                position: "bottom-center",
                                                autoClose: 3000,
                                                hideProgressBar: true,
                                                pauseOnHover: false,
                                            })
                                        }} ><DeleteIcon /></button>
                                        <div className="ProductAmountContainer">
                                            <div className="quantity-btn">
                                                <span onClick={() => dispatch(decrementQuantity(product))}><RemoveIcon /></span>
                                                <span>{product.quantity}</span>
                                                <span onClick={() => dispatch(incrementQuantity(product))}><AddIcon /></span>
                                            </div>
                                        </div>
                                        <div className="ProductPrice">&#8377; {product.price * product.quantity}.00</div>
                                    </div>

                                </div>))}
                            <hr />
                        </> :
                            <div className="cart-missing">
                                <img className='svg' src={emptycart} alt="Sad face" />
                                <span>Missing Cart items?</span>
                                <p>Login to see the items you added previously</p>
                                <button className="emp-btn" onClick={() => navigate('/Login')}>
                                    <span>Login</span>
                                </button>

                            </div>
                        }

                    </div>
                    {user &&
                        <div className="summary">
                            <div className="SummaryTitle">
                                ORDER SUMMARY
                            </div>
                            <div className="SummaryItem">
                                <div className="SummaryItemText">SubTotal</div>
                                <div className="SummaryItemPrice">&#8377; {cart.total}.00</div>
                            </div>
                            <div className="SummaryItem">
                                <div className="SummaryItemText">Estimated Shipping</div>
                                <div className="SummaryItemPrice">&#8377; 30.90</div>
                            </div>
                            <div className="SummaryItem">
                                <div className="SummaryItemText">Shipping Discount</div>
                                <div className="SummaryItemPrice">&#8377; -30.90</div>
                            </div>
                            <hr />
                            <div className="SummaryItem">
                                <div className="SummaryItemText" type="total"><span> Total</span></div>
                                <div className="SummaryItemPrice"> <span>&#8377; {cart.total}.00</span></div>

                            </div>
                            <button onClick={makePayment} disabled={cart.products.length === 0} style={{ cursor: cart.products.length === 0 ? 'not-allowed' : 'pointer' }} >{isPaymentInProgress ? 'PROCESSING...' : 'CHECKOUT NOW'}</button>
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Cart
