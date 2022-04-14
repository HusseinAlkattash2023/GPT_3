import React from 'react'
import './feature.css'
import gpt3logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
          <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
            <img src={gpt3logo} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='gpt3__footer-link_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Socail media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-link_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privcy & Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-link_div'>
          <h4>Get in Touch</h4>
          <p>Crechterwoord K12 182 DK Syria</p>
          <p>085-123345</p>
          <p>info@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>Develped and designed &copy; 2022 by <span>Hussein alkattash</span></p>
        </div>
    </div>
  )
}

export default Footer
