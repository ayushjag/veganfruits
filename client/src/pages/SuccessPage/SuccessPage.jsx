
import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./SuccessPage.css";

const SuccessPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="success">
                <img src="https://funtura.in/lko/wp-content/themes/funtura/assets/images/success.svg" alt="" />
                <h2>Your Order is Successful.</h2>
                <span>Thank you so much for your Order.</span>
                <button className="btn" onClick={() => navigate('/', { replace: true })}>Back To Home</button>
            </div>
        </div>
    )
}

export default SuccessPage