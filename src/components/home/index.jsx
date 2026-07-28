import React from "react";
import "./styles.css";

//internal import
import { Illustration, Ellipse5, Ellipse6, Ellipse7 } from "..";

function Home() {
  return (
    <div className="hero">
      <p className="section-head">
        Lessons and insights <span className="highlight">from 8 years</span>
      </p>

      <p className="description">
        Where to grow your business as a photographer: site or social media?
      </p>
      <button className="registered">Register</button>

      <div className="dot">
        <button className="dot-btn">
          <img src={Ellipse5} alt="dot-one" className="dot-img" />
        </button>
        <button className="dot-btn">
          <img src={Ellipse6} className="dot-img" />
        </button>
        <button className="dot-btn">
          <img src={Ellipse7} className="dot-img" />
        </button>
      </div>
      <div className="hero-image">
        <img src={Illustration} alt="human infront of computer" />
      </div>
    </div>
  );
}

export default Home;
