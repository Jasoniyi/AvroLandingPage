import React, { Component } from "react";
import { MDBContainer } from "mdbreact";

class index extends Component {
  render() {
    return (
      <div className="testimonals-wrapper">
        <MDBContainer>
          <div className="testimonal">
            <div className="testi-img"></div>
            <div className="testi-title">
              <strong>Best Investment App Ever!</strong>{" "}
            </div>
            <div className="testi-desc">
              With ArvoFinance, you can get a quick loan within an hour without
              collaterials and delays, you can also invest
            </div>
          </div>

          <div className="clients">
            <div className="client-one"></div>
            <div className="client-two"></div>
            <div className="client-three"></div>
            <div className="client-four"></div>
          </div>
        </MDBContainer>
      </div>
    );
  }
}

export default index;
