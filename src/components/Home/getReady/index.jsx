import React, { Component } from "react";
import { MDBContainer } from "mdbreact";

class index extends Component {
  render() {
    return (
      <div className="getReady-wrapper">
        <MDBContainer>
          <div className="getReady-info">
            <div className="getReady-title">Ready to get started?</div>
            <div className="getReady-desc">
              With ArvoFinance, you can get a quick loan within an hour without
              collaterials and delays, you can also invest
            </div>
            <div className="getReady-button">
              <button className="getReady-btn">CREATE AN ACCOUNT</button>
            </div>
          </div>
        </MDBContainer>
        <div className="join-us">
          <div className="logo">
            <div className="logo-img" />
          </div>
          <div className="solutions">
            <h4 className="soln-title">Solutions</h4>
            <ul>
              <li>FEDPAY</li>
              <li>Online Application</li>
              <li>Finanacial planning</li>
              <li>Collaterial Free Loan</li>
              <li>Affordable Interest rates</li>
            </ul>
          </div>
          <div className="resources">
            <h4 className="soln-title">Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Privacy policy</li>
              <li>Terms of Service</li>
              <li>Press</li>
              <li>Contact Us</li>
              <li>Fraud Alert</li>
            </ul>
          </div>
          <div className="support">
            <h4 className="soln-title">Support</h4>
            <ul>
              <li>+2348021810034</li>
              <li>hello@arvofinance.com</li>
              <li>ombudsman</li>
              <li>
                <div className="social-media">
                  <div className="tweet" />
                  <div className="fb"></div>
                  <div className="instagram" />
                  <div className="linkedin" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
