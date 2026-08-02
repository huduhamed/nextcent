import React, { useRef } from "react";
import "./styles.css";

//internal import
import { Illustration, Ellipse5, Ellipse6, Ellipse7, Register } from "..";

function Home({ formRef }) {
  const scrollToForm = () => {
    formRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="hero" id="home">
      <h1 className="section-head">
        Lessons and insights <span className="highlight">from 8 years</span>
      </h1>

      <p className="description">
        Where to grow your business as a photographer: site or social media?
      </p>
      <button className="registered" onClick={scrollToForm}>
        Register
      </button>

      <div className="dot">
        <button className="dot-btn">
          <img src={Ellipse5} alt="dot-one" />
        </button>
        <button className="dot-btn">
          <img src={Ellipse6} />
        </button>
        <button className="dot-btn">
          <img src={Ellipse7} />
        </button>
      </div>
      <div className="hero-image">
        <img src={Illustration} alt="human infront of computer" />
      </div>
    </div>
  );
}

export default Home;
