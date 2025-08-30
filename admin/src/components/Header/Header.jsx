import React from 'react'
import { useEffect, useState, useRef } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import './Header.css'
import { useNavigate } from 'react-router-dom';
const Header = () => {

    const menuRef = useRef();
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('center-visible');
        e.target.classList.toggle('open');
    }
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();


    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <div className='left'>
                        <li>Admin</li>
                    </div>
                    <div onClick={dropdown_toggle} className="hamburger-menu">
                        <HiMenuAlt2 style={{ fontSize: "40px" }} />
                    </div>
                    <div ref={menuRef} className="center" >
                        <li onClick={() => navigate('/')}>Dashboard</li>
                        <li onClick={() => navigate('/productList')}>Products</li>
                        <li onClick={() => navigate('/orders')}>Orders</li>
                        <li onClick={() => navigate('/customerList')}>Customers</li>
                    </div>
                    <div className="right">
                        <li><button onClick={() => navigate('/addProduct')}>Create Product</button></li>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header