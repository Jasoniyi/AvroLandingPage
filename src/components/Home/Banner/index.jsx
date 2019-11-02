import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import Logo from "../../../img/arvoLogo.png";

class index extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        {/* <Router>
          <MDBNavbar
            color="transparent"
            expand="md"
            className="nav-menu"
            style={{ boxShadow: 0 }}
          >
            <MDBNavbarBrand> */}
        {/* <strong className="white-text">Navbar</strong> */}
        {/* <img src={Logo} alt="logo" className="logo" />
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left className="ml-5">
                <MDBNavItem active>
                  <MDBNavLink to="#!">About Us</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">How it works</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Contact us</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">FAQs</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">FEDPAY</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <button className="button-grey">Sign in</button>
                <button className="button-yellow">Download Now</button>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router> */}
        <div className="header">
          <Router>
            <MDBNavbar
              color="ash"
              dark
              expand="md"
              className="nav-menu"
              style={{ boxShadow: 0 }}
            >
              <MDBNavbarBrand>
                <img src={Logo} alt="logo" className="logo" />
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse}
                className="toggle"
              />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={this.state.isOpen}
                navbar
              >
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink to="#!">About Us</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">How it works</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Contact us</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">FAQs</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">FEDPAY</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <button className="button-grey">Sign in</button>
                    <button className="button-yellow">Download Now</button>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
        </div>

        {/* BAnner view */}
        <MDBContainer>
          <MDBRow>
            <MDBCol md="5">
              <div className="banner-text">
                <div className="text-wrapper mt-3">
                  <h1>
                    The best way to invest your money and get quick access to
                    Loans.
                  </h1>
                  <p>
                    With ArvoFinance, you can get a quick loan within an hour
                    without collaterials and delays, you can also invest your
                    money through our peer-to-peer platform.
                  </p>
                </div>
              </div>
            </MDBCol>
            <MDBCol>
              {/* <img src={Phone} alt="phone" className="banner-img" /> */}
              <div className="banner-img"></div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}

export default index;
