import React from "react";
import { CSSTransition } from "react-transition-group";
import homeImage1 from "../../assets/images/home-1-image.jpg";
import homeImage2 from "../../assets/images/home-2-image.jpg";
import homeImage3 from "../../assets/images/home-3-image.jpg";

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
          <h1 className="border-secondary border-bottom">
            Pizzeria La Stravaganza
          </h1>
        </div>
        <div className="row">
          <div className="text-center p-2">
            <h2>Działamy na terenie Wrocławia</h2>
            <p>
              Nasza restauracja znajduje się w sercu Wrocławia - na rynku.
              Lokalizacja umożliwia łatwe dotarcie z niemal każdej części
              miasta, a dla tych co woleliby delektować się pizza w domu,
              oferujemy dowóz.
            </p>
            <img
              className="promoImage p-2"
              src={homeImage1}
              alt="obrazek w tle będzie"
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="text-center p-2">
            <h2>Zapraszamy do menu</h2>
            <p>
              W menu jest tylko pizza. Sercem jest ceglany piec opalany drewnem.
              Nie serwujemy sosu czosnkowego, ani keczupów, tylko wyłącznie
              włoską oliwę. Menu składa się z pozycji stałych oraz sezonowych.
              Jest sporo propozycji wegetariańskich.
            </p>
            <img
              className="promoImage p-2"
              src={homeImage2}
              alt="obrazek w tle będzie"
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="text-center p-2">
            <h2>Dowóz</h2>
            <p>
              Oferujemy dowóz do wszystkich dzielnic Wrocławia, a także
              możliwość własnego odebrania zamówienia. Jedzenie przewozimy w
              specjalnych kartonowych pudełkach zapewniających najwyższy poziom
              utrzymania wysokiej temperatury, przez co pizza zawsze dociera do
              celu podróży najgorętsza i najsmaczniejsza.
            </p>
            <img
              className="promoImage p-2"
              src={homeImage3}
              alt="obrazek w tle będzie"
            ></img>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default HomeContent;
