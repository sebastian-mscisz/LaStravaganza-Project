import React from "react";
import { CSSTransition } from "react-transition-group";
import promoImage1 from "../../assets/images/promo-1-image.jpg";
import promoImage2 from "../../assets/images/promo-2-image.jpg";
import promoImage3 from "../../assets/images/promo-3-image.jpg";

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

      <hr className="border-secondary" />
      <div className="row p-2">
        <CSSTransition
          in={true}
          appear={true}
          classNames={{
            appear: "appearContentLeft",
            appearDone: "appearContentLeftDone",
            enterDone: "enterContentLeftDone",
          }}
        >
          <img
            className="col-md-6 p-2 rounded promoImage"
            src={promoImage1}
            alt="obrazek z lewej"
          ></img>
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
            <div className="col-md-6 p-2 mt-auto mb-auto">
              <h2>Darmowa dostawa na terenie Wrocławia</h2>
              <p className="text-justify">
                W menu jest tylko pizza, kilka sałatek, zupa i deser. Sercem
                jest ceglany piec opalany drewnem. Nie serwujemy sosu
                czosnkowego!!! Wyłącznie włoską oliwę. Menu składa się z pozycji
                stałych oraz sezonowych. Jest sporo propozycji wegetariańskich.
              </p>
            </div>
          )}
        </CSSTransition>
      </div>
      <div className="row p-2 flex-md-row-reverse">
        <CSSTransition
          in={true}
          appear={true}
          classNames={{
            appear: "appearContentRight",
            appearDone: "appearContentRightDone",
            enterDone: "enterContentRightDone",
          }}
        >
          <img
            className="col-md-6 p-2 rounded promoImage"
            src={promoImage2}
            alt="obrazek z prawej"
          ></img>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          classNames={{
            appear: "appearContentLeft",
            appearDone: "appearContentLeftDone",
            enterDone: "enterContentLeftDone",
          }}
        >
          <div className="col-md-6 p-2 mt-auto mb-auto">
            <h2>Karta lojalnościowa</h2>
            <p className="text-justify">
              W menu jest tylko pizza, kilka sałatek, zupa i deser. Sercem jest
              ceglany piec opalany drewnem. Nie serwujemy sosu czosnkowego!!!
              Wyłącznie włoską oliwę. Menu składa się z pozycji stałych oraz
              sezonowych. Jest sporo propozycji wegetariańskich.
            </p>
          </div>
        </CSSTransition>
      </div>

      <div className="row p-2">
        <CSSTransition
          in={true}
          appear={true}
          classNames={{
            appear: "appearContentLeft",
            appearDone: "appearContentLeftDone",
            enterDone: "enterContentLeftDone",
          }}
        >
          <img
            className="col-md-6 p-2 rounded promoImage"
            src={promoImage3}
            alt="obrazek z lewej"
          ></img>
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
          <div className="col-md-6 p-2 mt-auto mb-auto">
            <h2>Promocyjna pizza miesiąca</h2>
            <p className="text-justify">
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
