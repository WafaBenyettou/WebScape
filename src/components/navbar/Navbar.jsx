import React from 'react'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/WebScape_white-logo.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='webscape-navbar'>
        <div className='webscape-navbar-links'>
            <div className='webscape-navbar-links-logo'>
               <img src={logo} alt='logo'/>
            </div>
            <div className='webscape-navbar-links-container'>
                <p><a href='#home'>Home</a></p>
                <p><a href='#webscape'>About</a></p>
                <p><a href='#possibility'>Possibility</a></p>
                <p><a href='#features'>Features</a></p>
                <p><a href='#blog'>Blog</a></p>
            </div>
        </div>

    </div>
  )
}

export default Navbar