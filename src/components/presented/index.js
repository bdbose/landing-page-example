import React from 'react';
import './style.scss';
import c1 from '../../assets/c1.png';
import c2 from '../../assets/c2.png';
import c3 from '../../assets/c3.png';

const Presented = () => {
  return (
    <div className='presented-wrapper'>
      <div className='present-title'>Proudly presented by</div>
      <div className='present-des'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className='present-display'>
        <img src={c1} alt='' />
        <img src={c2} alt='' />
        <img src={c3} alt='' />
        <img src={c2} alt='' />
        <img src={c1} alt='' />
      </div>
      <div className='present-span'>
        <span />
        <span
          style={{
            backgroundColor: '#00dbd0',
          }}
        />
        <span />
        <span />
      </div>
    </div>
  );
};

export default Presented;
