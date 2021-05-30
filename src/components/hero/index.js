import React from 'react';
import './style.scss';
import HeroIcon from '../../assets/hero.svg';

const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div className='hero-container'>
        <h3>Healthy life with</h3>
        <h1>Nature Organic</h1>
        <span>
          Vegetables are the edible parts of a plant
          <br /> that is used in cooking or can be eaten now.
        </span>
        <button>Explore</button>
      </div>
      <div className='hero-image'>
        <img src={HeroIcon} alt='' />
      </div>
    </div>
  );
};

export default Hero;
