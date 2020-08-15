import React from "react";
import FooterContact from "./FooterContact";
import FooterOpenInfo from "./FooterOpenInfo";
import FooterSocial from "./FooterSocial";
import FooterNewsletter from "./FooterNewsletter";

const Footer = () => {
  return (
    <footer>
      <div className="bg-tertiary">
        <div className="container">
          <div className="row">
            <FooterContact />
            <FooterSocial />
            <FooterOpenInfo />
            <FooterNewsletter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
