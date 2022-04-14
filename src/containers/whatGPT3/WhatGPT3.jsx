import React from 'react';
import './whatGPT3.css';
import {Feature} from '../../component'
const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin .shadow-pop-tr' id='whpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="what is GPT-3" text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis reiciendis voluptatem consectetur error! Aspernatur explicabo labore soluta ipsam consequuntur? Laborum?s'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quod.'/> 
        <Feature title="Knowledgebase" text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quod.'/> 
        <Feature title="Education" text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quod.'/> 
      </div>
      <p></p>
    </div>
  )
}

export default WhatGPT3
