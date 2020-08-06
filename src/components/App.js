import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}

export default App;
