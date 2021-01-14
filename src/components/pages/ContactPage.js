import React, { useEffect } from "react";
import ContactContent from "../content/ContactContent";

const ContactPage = (props) => {
  useEffect(() => {
    document.title = props.title;
  });
  return <ContactContent />;
};

export default ContactPage;
