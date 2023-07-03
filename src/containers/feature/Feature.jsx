import React from 'react'
import './feature.css'
import Features from '../../components/features/Features'

const Feature = () => {
  return (
    <div className='webscape-feature section-padding' id='feature'>
          <div className='webscape-feature-heading'>
            <h1 className='gradient-text'>Discover our amazing feature with just one click away. Take the first step today and make it happen</h1>
            <p>Request access to get Started today</p>
            </div>

            <div className='webscape-feature-container'>

              <Features title= "mproving end distrusts instantly" text= "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded." />
              <Features title= "mproving end distrusts instantly" text= "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded." />
              <Features title= "mproving end distrusts instantly" text= "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded." />

            </div>
    </div>
  )
}

export default Feature