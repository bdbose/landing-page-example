import React from 'react';
import './style.scss';
import NatureLogo from '../../assets/nature.png';
import Food from '../../assets/food.png';
import Food1 from '../../assets/food1.png';

const Nature = () => {
  return (
    <div className='nature-wrapper'>
      <img src={NatureLogo} alt='nature' />
      <div className='nature-title'>Welcome to Nature</div>
      <div className='nature-des'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className='nature-display'>
        <img src={Food} alt='' />
        <img src={Food1} alt='' />
        <img src={Food} alt='' />
        <img src={Food} alt='' />
      </div>
    </div>
  );
};

export default Nature;
