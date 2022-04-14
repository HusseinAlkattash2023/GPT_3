import React from 'react'
import './features.css'
import {Feature} from '../../component'

const featuresData=[
  {
  title:'improving end distrusts indstantly',
  text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis esse illum cumque deserunt."
  },
  {
    title:'Become the tended active',
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis esse illum cumque deserunt."
    },
    {
      title:'Massage or am nothing',
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis esse illum cumque deserunt."
      },
      {
        title:'Really boy law county',
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis esse illum cumque deserunt."
        }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
            <h1 className='gradient__text'>The Future is Now and You Just Need To Realize it.Step into Future Today & Make it Happen</h1>
            <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item , index)=>(
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features
