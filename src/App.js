import React, { Component } from "react";

import "./index.css";
import Home from "./components/Home";
import Invest from "./components/Home/Invest";
import Testimonals from "./components/Home/Testimonals";
import GetReady from "./components/Home/getReady";
import Footer from "./components/Home/Footer";

class App extends Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <Home />
        </div>
        <Invest />
        <Testimonals />
        <GetReady />
        <Footer />
      </>
    );
  }
}

export default App;
