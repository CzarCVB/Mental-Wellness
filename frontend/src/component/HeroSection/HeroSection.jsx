import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from '../Button/Button';
import './HeroSection.scss';

const HeroSection=()=>{
  return (
    <div className='hero-container'>
      <video src='/video-1.mp4' autoPlay loop muted />
      <h1>Want some peace of mind?</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <Link to="/register">GET STARTED</Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
