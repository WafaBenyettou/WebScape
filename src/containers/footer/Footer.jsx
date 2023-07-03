import React from "react";
import "./footer.css";
import logo from "../../assets/WebScape_white-logo.png";

const Footer = () => {
  return (
    <div className="webscape-footer section-padding">
      <div className="webscape-footer-heading">
        <h1 className="gradient-text">
          Subscribe today for unlimited access of Development
        </h1>
      </div>
      <div className="webscape-footer-btn">
        <p> Subscribe here </p>
      </div>

      <div className="webscape-footer-links">
        <div className="webscape-footer-links-logo">
          <img src={logo} alt="webscape logo" />
          <p>WNB.RAR Products.Inc @ 2023</p>
        </div>

        <div className="webscape-footer-links-div">
          <h4>Company</h4>
          <p>About</p>
          <p>Blog</p>
          <p>Press</p>
          <p>Terms of use</p>
          <p>Privacy policy</p>
        </div>

        <div className="webscape-footer-links-div">
          <h4>Products</h4>
          <p>WebScape</p>
          <p>WebScape Pro</p>
          <p>WebScape Enterprise</p>
          <p>WebScape for Developers</p>
          <p>WebScape for Education</p>
        </div>
        <div className="webscape-footer-links-div">
          <h4>Support</h4>
          <p>Help center</p>
          <p>FAQ</p>
          <p>Community</p>
          <p>System status</p>
          <p>Contact us</p>
        </div>
        <div className="webscape-footer-copyright">
          <p>@ 2023 webscape. All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
