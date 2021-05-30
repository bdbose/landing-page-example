import React from 'react';
import './style.scss';
import Logo from '../../assets/footerlogo.png';

import Fb from '../../assets/fb.png';
import Insta from '../../assets/insta.png';
import Linkedin from '../../assets/linkedin.png';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-1'>
        <img src={Logo} alt='' />
        <div className='des'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </div>
        <hr color='#00dbd0' />
        <div className='copyright'>© Copyright 2020 Nature</div>
      </div>
      <div className='footer-2'>
        <div className='footer-title'>Information</div>
        <hr color='#00dbd0' />
        <a href='/'>About Us</a>
        <a href='/'>Products</a>
        <a href='/'>Contact Us</a>
        <a href='/'>Terms of Service</a>
      </div>
      <div className='footer-3'>
        <div className='footer-title'>Follow Us</div>
        <hr color='#00dbd0' />
        <img src={Fb} alt='' />
        <img src={Insta} alt='' />
        <img src={Linkedin} alt='' />
      </div>
    </div>
  );
};

export default Footer;
