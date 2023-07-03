import React from 'react'
import './webscape.css'
import Features from '../../components/features/Features'

const Webscape = () => {
  return (
    <div className='webscape-webscape section-margin' id='webscape'>
      <div className='webscape-webscape-features'>
        <Features title="What is WebScape" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ipsum nec ligula consectetur tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras at lectus massa. Integer convallis mauris id tortor efficitur, et volutpat eros accumsan."/>
        </div>
        <div className='webscape-webscape-heading'>
          <h1 className='gradient-text'>One click away from your dreams...</h1>
          <p>Discover out blog</p>
        </div>

        <div className='webscape-webscape-container'>
          <Features title="High preformance" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ipsum nec ligula consectetur tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras at lectus massa. Integer convallis mauris id tortor efficitur, et volutpat eros accumsan."/>
          <Features title="Compatible" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ipsum nec ligula consectetur tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras at lectus massa. Integer convallis mauris id tortor efficitur, et volutpat eros accumsan." />
          <Features title="Flexible" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ipsum nec ligula consectetur tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras at lectus massa. Integer convallis mauris id tortor efficitur, et volutpat eros accumsan." />
        </div>
    </div>
  )
}

export default Webscape