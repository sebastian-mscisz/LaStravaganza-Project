import React from "react";

const FooterNewsletter = () => {
  return (
    <div className="col-md-3">
      <h4>Zapisz się do newsletter'a!</h4>
      <p>
        <span class="fas fa-check"></span> Nie ominiesz żadnych promocji!
      </p>
      <p>
        <span class="fas fa-check"></span> Nie ominą cię żadne wydarzenia!
      </p>
      <input
        className="form-control"
        type="text"
        placeholder="Podaj adres email..."
      ></input>
      <br />
      <button className="btn btn-outline-secondary">
        <strong>Wyślij!</strong>
      </button>
    </div>
  );
};

export default FooterNewsletter;
