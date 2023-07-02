import React from 'react'
import './webscape.css'
import Features from '../../components/features/Features'

const Webscape = () => {
  return (
    <div className='webscape-webscape section-margin' id='webscape'>
      <div className='webscape-webscape-features'>
        <Features />
        </div>
        <div className='webscape-webscape-heading'>
          <h1 className='gradient-text'>One click away from your dreams...</h1>
          <p>Discover out blog</p>
        </div>

        <div className='webscape-webscape-container'>
          <Features />
          <Features />
          <Features />
        </div>
    </div>
  )
}

export default Webscape