import React from "react";
import { CSSTransition } from "react-transition-group";
import aboutImage1 from "../../assets/images/about-1-image.jpg";
import aboutImage2 from "../../assets/images/about-2-image.jpg";
import aboutImage3 from "../../assets/images/about-3-image.jpg";
import aboutImage4 from "../../assets/images/about-4-image.jpg";
import aboutImage5 from "../../assets/images/about-5-image.jpg";

const AboutContent = () => {
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
        <div className="text-center p-2">
          <h1>La Stravaganza</h1>
          <h2>Smak włoskiej ekstrawagancji we Wrocławiu</h2>
          <img
            className="promoImage"
            src={aboutImage1}
            alt="obrazek w tle będzie"
          ></img>
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
            className="col-md-6 p-2 promoImage"
            src={aboutImage2}
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
            <h2>Nasza Pizzeria działa od końca 2014 roku</h2>
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
          <div className="col-md-6 p-2 mt-auto mb-auto">
            <h2>Pizza z pieca opalanego drewnem</h2>
            <p className="text-justify">
              Wpływ na smak naszej pizzy ma wiele czynników. Pizzaiolo musi brać
              pod uwagę między innymi ciśnienie atmosferyczne, rodzaj drzewa,
              jego wilgotność, temperaturę pieca. Nasz rozgrzewamy do 450 stopni
              Celsjusza. Praca z żywym ogniem jest sztuką!
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
          <img
            className="col-md-6 p-2 promoImage"
            src={aboutImage3}
            alt="obrazek z prawej"
          ></img>
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
            className="col-md-6 p-2 promoImage"
            src={aboutImage4}
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
            <h2>Dobra pizza wymaga najlepszych składników</h2>
            <p className="text-justify">
              Wytwarzając ciasto na pizzę używamy wyłącznie włoskich mąk. Ciasto
              i sos są niezmienne. Dodatki powodują natomiast, że smaki
              zaczynają się różnić. Każda pizza staje się jakby innym daniem. Za
              wyjątkowy smak odpowiadają również składniki, które w większości
              przyjeżdżają do nas z Włoch, są to np. Mozarella di Buffala,
              ‘nduja, ser Parmigiano Reggiano.
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
          <div className="col-md-6 p-2 mt-auto mb-auto">
            <h2>Doceniacie nas - Dziękujemy</h2>
            <p className="text-justify">
              Pizzeria każdego roku swojej działalności otrzymuje certyfikat
              jakości Tripadvisor, liczne nagrody i wyróżnienia. Goście zaczęli
              dopytywać o więcej….a my wiedzieliśmy, że więcej nie może odebrać
              jakości Pizzerii. Że więcej, to druga restauracja… również
              stawiająca na specjalizację.
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
          <img
            className="col-md-6 p-2 promoImage"
            src={aboutImage5}
            alt="obrazek z prawej"
          ></img>
        </CSSTransition>
      </div>
      <CSSTransition
        in={true}
        appear={true}
        classNames={{
          appear: "appearContentCenter",
          enterDone: "enterContentCenterDone",
        }}
      >
        <div className="text-center p-2">
          <h2>Zapraszamy do La Stravaganza</h2>
          <p>Poznaj nasze pizze i sprawdź dlaczego są tak wyjątkowe.</p>
          <button className="btn btn-outline-secondary">
            <strong>Nasze Menu</strong>
          </button>
        </div>
      </CSSTransition>
    </div>
  );
};

export default AboutContent;
