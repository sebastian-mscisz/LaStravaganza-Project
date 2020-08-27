import React from "react";
import { CSSTransition } from "react-transition-group";

const ContactContent = () => {
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
          <h1>Kontakt</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>+48 777 222 333</h3>
            <p>
              <em>
                Zamówienia przyjmowane są zarówno telefonicznie jak i poprzez
                stronę internetową.
              </em>
            </p>
            <p>
              <em>Rezerwacje przyjmowane są wyłącznie telefonicznie.</em>
            </p>
            <h4>Spotkaj się z nami na:</h4>
            <p>
              <a href="#">
                <span className="fab fa-facebook"></span>&nbsp;Facebook
              </a>
            </p>
            <p>
              <a href="#">
                <span className="fab fa-instagram"></span>&nbsp;Instagram
              </a>
            </p>
            <p>
              <a href="#">
                <span className="fab fa-tripadvisor"></span>&nbsp;Tripadvisor
              </a>
            </p>
          </div>
          <div className="col-md-6">
            <h4>Godziny otwarcia:</h4>
            <p>
              <strong>13:00 - 21:00</strong>
            </p>
            <p>od niedzieli do czwartku</p>
            <p>
              <strong>13:00 - 22:00</strong>
            </p>
            <p>od piątku do soboty</p>
            <h4>Lokalizacja:</h4>
            <p>Wrocław, ul. Igielna 11/12</p>
          </div>
        </div>
        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7085.043214541929!2d17.032648062109736!3d51.109547783366594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2757bb681bf%3A0xf54824cfd9973609!2sIgielna%2011%2F12%2C%2050-155%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1597753884283!5m2!1spl!2spl"
            width="100%"
            height="500"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ContactContent;
