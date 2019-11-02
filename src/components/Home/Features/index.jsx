import React, { Component } from "react";
import { MDBCol, MDBRow, MDBContainer } from "mdbreact";

import Cash from "../../../img/cash.png";

class index extends Component {
  render() {
    return (
      <div>
        <MDBContainer>
          <div className="feature-wrapper">
            <div className="wrapper1 feature">
              <div className="feature-img"></div>
              <div className="feature-title">
                <h5>
                  <strong>Quick Loans</strong>
                </h5>
              </div>
              <div className="feature-detail">
                <p>
                  At Arvo, we have developed our application to be straight
                  forward and convenient as much as possible. Therer is no need
                  to take the time and travel to a location.
                </p>
              </div>
            </div>
            <div className="wrapper1 feature">
              <div className="feature-img-collaterial"></div>
              <div className="feature-title">
                <h5>
                  <strong>No Collaterials</strong>
                </h5>
              </div>
              <div className="feature-detail">
                <p>
                  Through a novelly structured loan we are ablr to minimize the
                  risk associated with consumer loans in Nigeria. Making loans
                  available for.
                </p>
              </div>
            </div>
            <div className="wrapper1 feature">
              <div className="feature-img-interest"></div>
              <div className="feature-title">
                <h5>
                  <strong>Guaranted Lowest Interest Rate</strong>{" "}
                </h5>
              </div>
              <div className="feature-detail">
                <p>
                  As a responsible fintech company, we design our products to
                  ensure our customers get the lowest interest rate in the
                  market.
                </p>
              </div>
            </div>
          </div>
        </MDBContainer>
      </div>
    );
  }
}

export default index;
