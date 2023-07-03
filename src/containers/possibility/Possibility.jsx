import React from 'react'
import './possibility.css'
import avatar from '../../assets/pos-avatar.png'

const Possibility = () => {
  return (
    <div className='webscape-possibility section-padding' id='possibility'>
      <div className='webscape-possibility-image'>
        <img src={avatar} alt='pos avatar' />
      </div>
      <div className='webscape-possibility-content'>
        <h4>What is the possibility of success?</h4>
        <h1 className='gradient-text'>Discover the possibilities with us Today</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident dolore saepe exercitationem illo, et enim rerum reprehenderit optio doloremque, excepturi illum magnam labore assumenda ducimus ad repellat atque consectetur at!</p>
        <h4>Unlock the pro experience !</h4>
        </div>
    </div>
  )
}

export default Possibility