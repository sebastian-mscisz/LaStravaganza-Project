import React from "react";
import { CSSTransition } from "react-transition-group";

const PromoContent = () => {
  return (
    <div className="container">
      <CSSTransition
        in={true}
        appear={true}
        classNames={{
          appear: "appearContentCenter",
          enterDone: "enterContentCenterDone",
        }}
      >
        <div className="text-center">
          <h1>Aktywne promocje</h1>
        </div>
      </CSSTransition>

      <div className="row">
        <CSSTransition
          in={true}
          appear={true}
          classNames={{
            appear: "appearContentLeft",
            appearDone: "appearContentLeftDone",
            enterDone: "enterContentLeftDone",
          }}
        >
          <img className="col-md-6" alt="obrazek z lewej"></img>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          classNames={{
            appear: "appearContentRight",
            appearDone: "appearContentRightDone",
            enterDone: "enterContentRightDone",
          }}
        >
          {() => (
            <div className="col-md-6">
              <h2>Darmowa dostawa na terenie Wrocławia</h2>
              <p>
                W menu jest tylko pizza, kilka sałatek, zupa i deser. Sercem
                jest ceglany piec opalany drewnem. Nie serwujemy sosu
                czosnkowego!!! Wyłącznie włoską oliwę. Menu składa się z pozycji
                stałych oraz sezonowych. Jest sporo propozycji wegetariańskich.
              </p>
            </div>
          )}
        </CSSTransition>
      </div>
      <div className="row">
        <CSSTransition
          in={true}
          appear={true}
          classNames={{
            appear: "appearContentLeft",
            appearDone: "appearContentLeftDone",
            enterDone: "enterContentLeftDone",
          }}
        >
          <div className="col-md-6">
            <h2>Karta lojalnościowa</h2>
            <p>
              W menu jest tylko pizza, kilka sałatek, zupa i deser. Sercem jest
              ceglany piec opalany drewnem. Nie serwujemy sosu czosnkowego!!!
              Wyłącznie włoską oliwę. Menu składa się z pozycji stałych oraz
              sezonowych. Jest sporo propozycji wegetariańskich.
            </p>
          </div>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          classNames={{
            appear: "appearContentRight",
            appearDone: "appearContentRightDone",
            enterDone: "enterContentRightDone",
          }}
        >
          <img className="col-md-6" alt="obrazek z prawej"></img>
        </CSSTransition>
      </div>

      <div className="row">
        <CSSTransition
          in={true}
          appear={true}
          classNames={{
            appear: "appearContentLeft",
            appearDone: "appearContentLeftDone",
            enterDone: "enterContentLeftDone",
          }}
        >
          <img className="col-md-6" alt="obrazek z lewej"></img>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          classNames={{
            appear: "appearContentRight",
            appearDone: "appearContentRightDone",
            enterDone: "enterContentRightDone",
          }}
        >
          <div className="col-md-6">
            <h2>Promocyjna pizza miesiąca</h2>
            <p>
              W menu jest tylko pizza, kilka sałatek, zupa i deser. Sercem jest
              ceglany piec opalany drewnem. Nie serwujemy sosu czosnkowego!!!
              Wyłącznie włoską oliwę. Menu składa się z pozycji stałych oraz
              sezonowych. Jest sporo propozycji wegetariańskich.
            </p>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default PromoContent;
