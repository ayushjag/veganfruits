import React from 'react'
import './LoginPage.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { publicRequest } from '../../utils/requestMethod';

const LoginPage = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
    console.log(error);
    const loginValidation = async () => {

        try {
            const res = await publicRequest.post('/auth/login', { username, password });
            if (res.data) {
                login(dispatch, { username, password });
                navigate('/');
                toast.success(`Welcome ${username}!`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    theme: "colored",
                })
            }
        } catch (error) {
            toast.error(error.response.data, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                theme: "colored",
            })
        }
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        if (!username || !password) {
            username === '' ? toast.warn('Please enter username', {
                theme: "colored",
                hideProgressBar: true,
            }) : password === '' ? toast.warn('Please enter password', {
                theme: "colored",
                hideProgressBar: true,
            }) :
                toast.warn('Please fill all fields', {
                    theme: "colored",
                    hideProgressBar: true,
                })
            return;
        }
        // e.preventDefault();
        loginValidation(username, password);
    }

    return (

        <div className="login">
            <div className="login-container">
                <h1 >Login to your account</h1>
                <form action="">
                    <input type="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleSubmit} disabled={isFetching}>LOGIN</button>

                    {/* {error && <p>something went wrong....</p>} */}

                    <div className="link">DO NOT YOU REMEMBER THE PASSWORD?</div>
                    <div className="link" onClick={() => navigate('/SignUp')}>CREATE A NEW ACCOUNT</div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
