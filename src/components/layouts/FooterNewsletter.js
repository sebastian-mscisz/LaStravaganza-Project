import React from "react";

const FooterNewsletter = () => {
  return (
    <div className="col-md-3">
      <h4>Zapisz się do newsletter'a!</h4>
      <p>+Nie ominiesz żadnych promocji! +Nie ominą cię żadne wydarzenia!</p>
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
