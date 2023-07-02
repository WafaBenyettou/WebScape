import React from "react";
import "./brand.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";

const Brand = () => {
  return (
    <div className="webscape-brand section-padding">
      <div>
        <img src={logo1} />
      </div>
      <div>
        <img src={logo2} />
      </div>
      <div>
        <img src={logo5} />
      </div>
      <div>
        <img src={logo3} />
      </div>
      <div>
        <img src={logo4} />
      </div>
     
    </div>
  );
};

export default Brand;
