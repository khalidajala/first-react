import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access To Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed for any travelling assistance indulge unplesing. Not thought all excersice blessing. Indulgence way everything alteration boisterious blessing  the attachment. Party we yet to allowed asked of </p>
        <h4>Request for early access</h4>
      </div>
    </div>
  )
}

export default Possibility
