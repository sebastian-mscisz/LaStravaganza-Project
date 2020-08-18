import React from "react";

const PromoContent = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Aktywne promocje</h1>
      </div>

      <div className="row">
        <img className="col-md-6" alt="obrazek z lewej"></img>
        <div className="col-md-6">
          <h2>Darmowa dostawa na terenie Wrocławia</h2>
          <p>
            W menu jest tylko pizza, kilka sałatek, zupa i deser. Sercem jest
            ceglany piec opalany drewnem. Nie serwujemy sosu czosnkowego!!!
            Wyłącznie włoską oliwę. Menu składa się z pozycji stałych oraz
            sezonowych. Jest sporo propozycji wegetariańskich.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Karta lojalnościowa</h2>
          <p>
            W menu jest tylko pizza, kilka sałatek, zupa i deser. Sercem jest
            ceglany piec opalany drewnem. Nie serwujemy sosu czosnkowego!!!
            Wyłącznie włoską oliwę. Menu składa się z pozycji stałych oraz
            sezonowych. Jest sporo propozycji wegetariańskich.
          </p>
        </div>
        <img className="col-md-6" alt="obrazek z prawej"></img>
      </div>

      <div className="row">
        <img className="col-md-6" alt="obrazek z lewej"></img>
        <div className="col-md-6">
          <h2>Promocyjna pizza miesiąca</h2>
          <p>
            W menu jest tylko pizza, kilka sałatek, zupa i deser. Sercem jest
            ceglany piec opalany drewnem. Nie serwujemy sosu czosnkowego!!!
            Wyłącznie włoską oliwę. Menu składa się z pozycji stałych oraz
            sezonowych. Jest sporo propozycji wegetariańskich.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoContent;
