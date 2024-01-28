import React from 'react'
import './features.css';
import { Feature } from '../../components';

const  featuresData = [
  {
    title: 'Improving end distructs instantly',
    text: 'dSLVvhwra;kjsdvherufvjkhaeruvhuvrhjrvh ruhv.vhuervr;hvjh'
  },
  {
    title: 'Become the tendered active',
    text: 'dSLVvhwra;kjsdvherufvjkhaeruvhuvrhjrvh ruhv.vhuervr;hvjh'
  },
  {
    title: 'Message or am nothing',
    text: 'dSLVvhwra;kjsdvherufvjkhaeruvhuvrhjrvh ruhv.vhuervr;hvjh'
  },
  {
    title: 'Really boyle law country',
    text: 'dSLVvhwra;kjsdvherufvjkhaeruvhuvrhjrvh ruhv.vhuervr;hvjh'
  },
]
const Features = () => {
  return (
    <div className='gpt3__features ' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future Is Now And You Just Need To Realize It. Step Into Future Today And Make It Happen</h1>
        <p>Request Early Access TO Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((items, index) => 
          <Feature title={items.title} text={items.text} key={items.title + index}/>
        )}
      </div>
    </div>
  )
}

export default Features
