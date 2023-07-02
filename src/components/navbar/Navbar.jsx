import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/WebScape_white-logo.png';
import './navbar.css';

const Navbar = () => {
  const [Menu, setMenu] = useState(false);

  return (
    <div className="webscape-navbar">
      <div className="webscape-navbar-links">
        <div className="webscape-navbar-links-logo">
          <img src={logo} />
        </div>
        <div className="webscape-navbar-links-container">
          <p><a href="#home">Home</a></p>
          <p><a href="#webscape">About</a></p>
          <p><a href="#possibility">Services</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#blog">Blog</a></p>
        </div>
      </div>
      <div className="webscape-navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="webscape-navbar-menu">
        {Menu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setMenu(true)} />}
        {Menu && (
        <div className="webscape-navbar-menu-container scale-up-center">
          <div className="webscape-navbar-menu-container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#webscape">About</a></p>
            <p><a href="#possibility">Services</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#blog">Blog</a></p>
          </div>
          <div className="webscape-navbar-menu-container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;