import React from 'react';
import './style.scss';
import Leaf from '../../assets/leaf1.png';
import QuoteIcon from '../../assets/quote.png';
import Jane from '../../assets/jane.png';
import { ReactComponent as Star } from '../../assets/star.svg';

const Quote = () => {
  return (
    <div className='quote-wrapper'>
      <img src={QuoteIcon} alt='' />
      <img className='profile' src={Jane} alt='' />
      <div className='profile-name'>Jane Doe</div>
      <div className='star-wrapper'>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <div className='profile-des'>
        Thank you for all the amazing produce and products you deliver each
        week…
        <br />
        you make my life so easy an bring goodness into our family eating.
        <br />
        I’ve been roasting a lot of brussel sprouts and
      </div>
      <div className='quote-span'>
        <span
          style={{
            background: '#00dbd0',
          }}
        />
        <span />
        <span />
        <span />
      </div>
      <img src={Leaf} className='leaf' alt='' />
      <div className='letter'>
        <div className='letter-title'>Subscribe to Our Newsletter</div>
        <div className='letter-des'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className='letter-input'>
          <input placeholder='Enter your email address' />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
