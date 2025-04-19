import { Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import duocook from '../assets/duocook.png';

const Header = () => {
    return (
        <Navbar className='d-flex w-100 shadow px-5 justify-content-between' style={{zIndex:2}}>
            {/* Logo */}
            <Navbar.Brand>
            <Link to="/" className='flex-fill' >
                <img src={duocook} className='logo mr-3'/> 
            </Link>
            </Navbar.Brand>
            <Link to="/">
                <button className='rounded-pill custom-btn px-3 d-flex align-items-center'>
                    <EmojiSunglasses width="20" height="30" className='mr-2'/>
                    Sign Out
                </button>
            </Link> 
        </Navbar>
    );
};

export default Header;