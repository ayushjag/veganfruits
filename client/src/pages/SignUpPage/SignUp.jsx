import React from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../../redux/apiCalls';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { publicRequest } from '../../utils/requestMethod';

const SignUp = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
    console.log(error);

    const registerValidation = async () => {
        try {
            const res = await publicRequest.post('/auth/register', { username, email, phone, password });
            if (res.data) {
                registerUser(dispatch, { username, email, phone, password });
                navigate('/login');
                toast.success('Account created successfully!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    theme: "colored",
                })
            }
        } catch (error) {
            console.log(error.response.data);
            toast.error(error.response.data, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                theme: "colored",
            })
        }
    }
    const handleClick = (e) => {
        e.preventDefault();
        if (!username || !email || !phone || !password) {
            username === '' ? toast.warn('Please enter username') : email === '' ? toast.warn('Please enter email') : phone === '' ? toast.warn('Please enter phone') : password === '' ? toast.warn('Please enter password') :
                toast.warn('Please fill all fields')
            return;
        }

        registerValidation(username, email, phone, password);
    }
    return (
        <div className="register">
            <div className="register-container">
                <h1 >Create Account</h1>
                <form action="">
                    <input type="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="phone" placeholder="phone" onChange={(e) => setPhone(e.target.value)} />
                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    <div className="Agreement">
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </div>
                    <button onClick={handleClick} disabled={isFetching}>REGISTER</button>
                    <div className="link" onClick={() => navigate('/Login')}>ALREADY HAVE AN ACCOUNT?</div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
