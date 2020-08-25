import React from "react";
import { CSSTransition } from "react-transition-group";

const HomeContent = () => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames={{
        appear: "appearContentCenter",
        enterDone: "enterContentCenterDone",
      }}
    >
      <div className="container flex-grow-1">
        <div className="text-center">
          <h1>Pizzeria La Stravaganza</h1>
        </div>
        <div className="row">
          <div className="text-center">
            <h2>Działamy na terenie Wrocławia</h2>
            <p>
              W menu jest tylko pizza, kilka sałatek, zupa i deser. Sercem jest
              ceglany piec opalany drewnem. Nie serwujemy sosu czosnkowego!!!
              Wyłącznie włoską oliwę. Menu składa się z pozycji stałych oraz
              sezonowych. Jest sporo propozycji wegetariańskich.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <h2>Zapraszamy do menu</h2>
            <p>
              W menu jest tylko pizza, kilka sałatek, zupa i deser. Sercem jest
              ceglany piec opalany drewnem. Nie serwujemy sosu czosnkowego!!!
              Wyłącznie włoską oliwę. Menu składa się z pozycji stałych oraz
              sezonowych. Jest sporo propozycji wegetariańskich.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <h2>Dowóz</h2>
            <p>
              Oferujemy dowóz do wszystkich dzielnic Wrocławia, a także
              możliwość własnego odebrania zamówienia. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Perspiciatis blanditiis dolorem
              quidem ducimus ipsa dolores alias placeat unde modi, esse ad,
              delectus nihil quasi beatae voluptas tempora nemo sed voluptatum!
            </p>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default HomeContent;
