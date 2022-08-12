import React from 'react';
import { Link } from 'react-router-dom';
import { MdAccountCircle, MdShare, MdRoom } from "react-icons/md";

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
            <Link to='/'>
                <MdShare size={40}/>
                <p>Share</p>
            </Link>
            <Link to='/'>
                <MdRoom size={40}/>
                <p>Visit</p>
            </Link>
            <Link to='/login'>
                <button type='button' className='navbar__button'>OPEN</button>
                <p className='navbar__button__p'>Close at 20:00</p>
            </Link>
            <Link to='/login'>
                <MdAccountCircle size={40}/>
                <p>Login</p>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar