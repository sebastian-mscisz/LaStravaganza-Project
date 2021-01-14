import React, { useEffect } from "react";
import AboutContent from "../content/AboutContent";

const AboutPage = (props) => {
  useEffect(() => {
    document.title = props.title;
  });
  return <AboutContent />;
};

export default AboutPage;
