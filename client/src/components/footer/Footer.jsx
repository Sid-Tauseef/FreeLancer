import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
          </div>
          {/* <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div> */}
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on SSM</span>
            <span>Buying on SSM</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
          </div>
          <div className="item">
            <h2>More From SkillShareMarket</h2>
            <span>SSM Business</span>
            <span>SSM Pro</span>
            <span>SSM Logo Maker</span>
            <span>SSM Guides</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>SSM</h2>
            <span>© SSM International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/icons/twitter.png" alt="" />
              <img src="/icons/facebook.png" alt="" />
              <img src="/icons/linkedin.png" alt="" />
              <img src="/icons/pinterest.png" alt="" />
              <img src="/icons/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/icons/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/icons/rupee1.png" alt="" />
              <span>INR</span>
            </div>
            <img src="/icons/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;