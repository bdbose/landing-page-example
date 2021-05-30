import React from 'react';
import './style.scss';
import NatureLogo from '../../assets/nature.png';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';

const data = [img1, img2, img3];
const Blog = () => {
  return (
    <div className='blog-wrapper'>
      <img src={NatureLogo} alt='nature' />
      <div className='nature-title'>Read Our Blog</div>
      <div className='nature-des'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className='blog-display'>
        {data.map((i, indx) => {
          return (
            <div key={indx} className='post'>
              <img src={i} alt='' />
              <div className='post-title'>Blog Post One</div>
              <div className='post-des'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </div>
              <span className='post-des'>Read More</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
