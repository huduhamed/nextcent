import React from "react";

//internal import
import "./styles.css";
import {
  Header,
  SocialIcon,
  SocialIcon1,
  SocialIcon2,
  SocialIcon3,
  InputIcon,
} from "..";

function Footer() {
  return (
    <>
      <div className="footer">
        <h1 className="next">
          <img src={Header} alt="favicon" />
          Nextcent
        </h1>
      </div>

      <p className="copyright">Copyright © 2020 Landify UI Kit.</p>

      <p className="all-right">All rights reserved</p>

      <div className="socials">
        <img src={SocialIcon} alt="instagram icon" className="insta" />
        <img src={SocialIcon1} alt="social icons" className="social" />
        <img src={SocialIcon2} alt="twitter icon" className="twitter" />
        <img src={SocialIcon3} alt="youtube icon" className="youtube" />
      </div>

      <div className="links">
        <div className="company">
          <h4>Company</h4>

          <p>About us</p>
          <p>Blog</p>
          <p>Contact us</p>
          <p>Pricing</p>
          <p>Testimonials</p>
        </div>

        <div className="support">
          <h4>Support</h4>

          <p>Help center</p>
          <p>Terms of service</p>
          <p>Legal</p>
          <p>Privacy policy</p>
          <p>Status</p>
        </div>

        <div className="stay">
          <h4>Stay up to date</h4>

          <div className="input-container">
            <input
              type="text"
              id="email"
              placeholder="Your email address"
              required
            />
            <img src={InputIcon} alt="input arrow" className="input-icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
