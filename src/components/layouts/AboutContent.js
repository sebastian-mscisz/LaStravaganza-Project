import React from "react";

const AboutContent = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1>La Stravaganza</h1>
        <h2>Smak włoskiej ekstrawagancji we Wrocławiu</h2>
        <img alt="obrazek w tle będzie"></img>
      </div>
      <div className="row">
        <img className="col-md-6" alt="obrazek z lewej"></img>
        <div className="col-md-6">
          <h2>Nasza Pizzeria działa od końca 2014 roku</h2>
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
          <h2>Pizza z pieca opalanego drewnem</h2>
          <p>
            Wpływ na smak naszej pizzy ma wiele czynników. Pizzaiolo musi brać
            pod uwagę między innymi ciśnienie atmosferyczne, rodzaj drzewa, jego
            wilgotność, temperaturę pieca. Nasz rozgrzewamy do 450 stopni
            Celsjusza. Praca z żywym ogniem jest sztuką!
          </p>
        </div>
        <img className="col-md-6" alt="obrazek z prawej"></img>
      </div>
      <div className="row">
        <img className="col-md-6" alt="obrazek z lewej"></img>
        <div className="col-md-6">
          <h2>Dobra pizza wymaga najlepszych składników</h2>
          <p>
            Wytwarzając ciasto na pizzę używamy wyłącznie włoskich mąk. Ciasto i
            sos są niezmienne. Dodatki powodują natomiast, że smaki zaczynają
            się różnić. Każda pizza staje się jakby innym daniem. Za wyjątkowy
            smak odpowiadają również składniki, które w większości przyjeżdżają
            do nas z Włoch, są to np. Mozarella di Buffala, ‘nduja, ser
            Parmigiano Reggiano.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Doceniacie nas - Dziękujemym</h2>
          <p>
            Pizzeria każdego roku swojej działalności otrzymuje certyfikat
            jakości Tripadvisor, liczne nagrody i wyróżnienia. Goście zaczęli
            dopytywać o więcej….a my wiedzieliśmy, że więcej nie może odebrać
            jakości Pizzerii. Że więcej, to druga restauracja… również
            stawiająca na specjalizację.
          </p>
        </div>
        <img className="col-md-6" alt="obrazek z prawej"></img>
      </div>
      <div className="text-center">
        <h2>Zapraszamy do La Stravaganza</h2>
        <p>Poznaj nasze pizze i sprawdź dlaczego są tak wyjątkowe.</p>
        <button className="btn btn-primary">Nasze Menu</button>
      </div>
    </div>
  );
};

export default AboutContent;
