import React, { useEffect } from "react";
import PromoContent from "../content/PromoContent";

const PromoPage = (props) => {
  useEffect(() => {
    document.title = props.title;
  });
  return <PromoContent />;
};

export default PromoPage;
