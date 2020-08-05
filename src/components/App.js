import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Footer";

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
