import React from 'react'
import { useNavigate } from 'react-router-dom';
import cancelImg from '../../assests/warning.png'

const CancelPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="success">
                <img src={cancelImg} alt="payment cancel" style={{ width: "80px", height: "80px" }} />
                <h2>Oops, Payment failed</h2>
                <span>Your payment could not be processed.</span>
                <button className="btn" onClick={() => navigate('/', { replace: true })}>OK</button>
            </div>
        </div>
    )
}

export default CancelPage