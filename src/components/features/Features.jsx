import React from 'react'
import './features.css'

const Features = ({title, text}) => {
  return (
    <div className='webscape-features-container-features'>

      <div className='webscape-features-container-features-title'>
      <div />
      <h1>{title}</h1>

    </div>

    <div className='webscape-features-container-features-text'>

      <p>{text}</p>
      </div>
      </div>
  )
}

export default Features