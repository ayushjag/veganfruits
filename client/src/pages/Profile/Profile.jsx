import React from 'react'
import './Profile.css'
import Header from '../../components/Header/Header'
import { useSelector } from "react-redux";
import CryptoJS from 'crypto-js';

const secretKey = "ankit"
const Profile = () => {
    const user = useSelector(state => state.user.currentUser);

    return (
        <>
            <Header />
            <div className="profile">
                <div className="profile-container">
                    <h1 >My Profile</h1>
                    <form action="">
                        {
                            user &&
                            <>
                                <label htmlFor="userid">User Id </label>
                                <input type="userid" placeholder={user._id} disabled />
                                <label htmlFor="name">User Name </label>
                                <input type="name" placeholder={user.username} disabled />
                                <label htmlFor="phone">Phone </label>
                                <input type="phone" placeholder={user.phone} disabled />
                                <label htmlFor="email">Email </label>
                                <input type="email" placeholder={user.email} disabled />
                                <label htmlFor="password">Password </label>
                                <input type="password" placeholder={CryptoJS.AES.decrypt(user.password, secretKey).toString(CryptoJS.enc.Utf8)} disabled />
                            </>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default Profile