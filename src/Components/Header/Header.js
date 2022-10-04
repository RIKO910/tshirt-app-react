import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomeLInk/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome to TShirt !!!</h2>
            <nav className=''>
                <CustomLink to='/home'> Home</CustomLink>
                <CustomLink to="/orderreview">Order Review</CustomLink>
                <CustomLink to="grandpa">GrandPa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;