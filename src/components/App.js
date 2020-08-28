import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Page from "./pages/Page";

const App = () => {
  return (
    <Router>
      <Header />
      <Page />
      <Footer />
    </Router>
  );
};

export default App;
