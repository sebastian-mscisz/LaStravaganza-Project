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
            className="col-md-6 p-2 promoImage"
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
                Z racji rozpoczęcia działalności we Wrocławiu, oferujemy darmową
                dostawę do każdej dzielnicy we Wrocławiu.
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
            className="col-md-6 p-2 promoImage"
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
            <p className="text-justify">Lojalność nagradzamy :)</p>
            <p className="text-justify">
              Dlatego przy pierwszym zamówieniu otrzymasz specjalną kartę, na
              którą możesz zbierać pieczątki pizz. Za 10 pieczątek możesz
              odebrać darmową wybraną pizzę w naszej restauracji na miejscu :)
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
            className="col-md-6 p-2 promoImage"
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
              Co miesiąc będzie wybierana pizza, na którą będzie nakładany rabat
              w wysokości 33% ceny, a na naszej grupie na facebooku to WY
              będziecie mogli zdecydować, która pizza go otrzyma :)
            </p>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default PromoContent;
