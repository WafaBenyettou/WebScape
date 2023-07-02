import React from "react";
import "./header.css";
import avatar from "../../assets/home-avatar.png";
import people from "../../assets/people.png";


const Header = () => (
  <div className="webscape-header section-padding" id="home">
    <div className="webscape-header-content">
      <h1 className="gradient-text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="webscape-header-content-input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="webscape-header-content-social">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="webscape-header-image">
      <img src={avatar} />
    </div>
  </div>
);

export default Header;