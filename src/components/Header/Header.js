import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        
            <nav className='header'>
            <img src={logo} alt="Logo pic" />
            <div>
                <a href="./Order">Order</a>
                <a href="./Order review">Order Review</a>
                <a href="./Inventory">Inventory</a>
                <a href="./Login">Login</a>
            </div>
        </nav>
       
    );
};

export default Header;