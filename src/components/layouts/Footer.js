import React from "react";
import FooterContact from "./FooterContact";
import FooterOpenInfo from "./FooterOpenInfo";
import FooterSocial from "./FooterSocial";
import FooterNewsletter from "./FooterNewsletter";

const Footer = () => {
  return (
    <footer className="bg-tertiary mt-5 pt-3 text-center text-md-left">
      <div className="container">
        <div className="row">
          <FooterContact />
          <FooterSocial />
          <FooterOpenInfo />
          <FooterNewsletter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
