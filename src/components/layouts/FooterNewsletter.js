import React from "react";

const FooterNewsletter = () => {
  return (
    <div className="col-md-3">
      <h3>Zapisz się do newsletter'a!</h3>
      <p>
        +Nie ominiesz żadnych promocji! +Otrzymasz unikalne oferty promocyjne
      </p>
      <input
        className="form-control"
        type="text"
        placeholder="Podaj adres email..."
      ></input>
      <br />
      <button className="btn">Wyślij!</button>
    </div>
  );
};

export default FooterNewsletter;
