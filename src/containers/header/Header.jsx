import React from "react";
import "./header.css";
import avatar from "../../assets/home-avatar.png";
import icon from "../../assets/icon.png";


const Header = () => (
  <div className="webscape-header section-padding" id="home">
    <div className="webscape-header-content">
      <h1 className="gradient-text">Explore our latest inventions with &apos; WebScape &apos; !</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident dolore saepe exercitationem illo, et enim rerum reprehenderit optio doloremque, excepturi illum magnam labore assumenda ducimus ad repellat atque consectetur at!</p>

      <div className="webscape-header-content-input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="webscape-header-content-social">
        <img src={icon} />
        <p>Together, with one click we can change the future !</p>
      </div>
    </div>

    <div className="webscape-header-image">
      <img src={avatar} />
    </div>
  </div>
);

export default Header;