import React, { useEffect } from "react";
import HomeContent from "../content/HomeContent";

const HomePage = (props) => {
  useEffect(() => {
    document.title = props.title;
  });
  return <HomeContent />;
};

export default HomePage;
