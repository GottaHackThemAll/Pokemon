import { Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import duocook from '../assets/duocook.png';
import { EmojiSunglasses } from 'react-bootstrap-icons';

const Header = () => {

    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <Navbar className='d-flex w-100 px-5 justify-content-between' style={{zIndex:2}}>
            {/* Logo */}
            <Navbar.Brand>
            <Link to="/" className='flex-fill' >
                <img src={duocook} className='logo mr-3' width="50" height="50"/> 
            </Link>
            </Navbar.Brand>
            <Link to="/">
                <button className='rounded-pill green-btn px-3 d-flex align-items-center'>
                    <EmojiSunglasses width="20" height="30" className='mr-2'/>
                    Sign Out
                </button>
            </Link> 
        </Navbar>
    );
};

export default Header;