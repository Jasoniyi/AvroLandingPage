import React, { Component } from "react";
import { MDBContainer } from "mdbreact";

class index extends Component {
  render() {
    return (
      <>
        <MDBContainer>
          <div className="divider"></div>
          <footer>
            <div className="footer-main">
              <div className="footer-img">
                <h5>Download Our Mobile App</h5>
                <div className="footer-logo">
                  <div className="playstore"></div>
                  <div className="appstore"></div>
                </div>
              </div>
              <div className="footer-text">Arvo Finance 2019</div>
            </div>
          </footer>
        </MDBContainer>
      </>
    );
  }
}

export default index;
