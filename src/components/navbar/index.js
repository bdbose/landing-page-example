import React from 'react';
import './style.scss';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
      <div className='logo'>
        <img src={Logo} alt='logo' />
        <span>organic</span>
      </div>
      <div className='nav-elements'>
        <a href='/'>Home</a>
        <a href='/'>Product</a>
        <a href='/'>Blog</a>
        <a href='/'>About Us</a>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
