import React, { useEffect } from "react";

const ErrorPage = (props) => {
  useEffect(() => {
    document.title = props.title;
  });
  return (
    <div className="container flex-grow-1 text-center">
      <h4 className="pt-5">Błąd 404 - Strona nie istnieje.</h4>
    </div>
  );
};

export default ErrorPage;
