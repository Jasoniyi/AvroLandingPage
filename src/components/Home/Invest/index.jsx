import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

class index extends Component {
  render() {
    return (
      <div className="invest-wrapper">
        <MDBContainer>
          <div className="invest-text">INVEST INTO ARVO FINANCE</div>
          <div className="invest-subtext">
            The Best way to invest your money and get quick access to loans.
          </div>

          <div className="arvo-plans">
            <div className="one"></div>
            <div className="two">
              <strong>ARVO LOANS</strong>
            </div>
            <div className="three">
              <strong>P2P INVESTMENT</strong>
            </div>
            <div className="one"></div>
          </div>

          <div className="plans">
            <div className="plan-text">
              <div className="plan-icon"></div>
              <div className="plan-title">
                <strong>ARVO LOAN</strong>
              </div>
              <div className="plan-desc">
                With ArvoFinance, you can get a quick loan within an hour
                without collaterials and delays, you can also invest your money
                through our peer-to-peer platform.
              </div>
              <button className="plan-button">
                <strong>Get Started</strong>
              </button>
            </div>
            <div className="plan-img"></div>
          </div>
        </MDBContainer>
      </div>
    );
  }
}

export default index;
