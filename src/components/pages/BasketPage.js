import React, { Component } from "react";
import RemoveFromCartButton from "../layouts/RemoveFromCartButton";
import UserInfoForm from "../layouts/UserInfoForm";
import OrderLoadingScreen from "../layouts/OrderLoadingScreen";
import MenuButton from "../layouts/MenuButton";
import { CSSTransition } from "react-transition-group";

class BasketPage extends Component {
  state = {
    userInfo: {
      name: "",
      city: "",
      address: "",
      nrAddress: "",
      number: "",
      email: "",
      comments: "",
      paymentMethod: "",
      deliveryMethod: "",
      termsAccept: false,
      newsletterAccept: false,
      accept: false,
    },
    errors: {
      name: false,
      address: false,
      nrAddress: false,
      email: false,
      wrongEmail: false,
      number: false,
      wrongNumber: false,
      paymentMethod: false,
      deliveryMethod: false,
      termsAccept: false,
      accept: false,
    },
    loadingScreen: null,
  };
  errorMessages = {
    requiredMessage: (
      <p>
        <em>To pole jest wymagane.</em>
      </p>
    ),
    emailMessage: (
      <p>
        <em>Niepoprawny adres email.</em>
      </p>
    ),
    numberMessage: (
      <p>
        <em>Numer musi mieć 9 cyfr.</em>
      </p>
    ),
    deliveryMessage: (
      <p>
        <em>Prosimy wybrać opcję dostawy.</em>
      </p>
    ),
    paymentMessage: (
      <p>
        <em>Prosimy wybrać formę płatności.</em>
      </p>
    ),
    termsMessage: (
      <span>
        <em>Prosimy wyrazić zgodę na przetwarzanie danych.</em>
      </span>
    ),
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const validation = this.formValidation();
    if (validation.correct) {
      this.orderLoadingScreen("show");
      setTimeout(() => {
        this.orderLoadingScreen();
        this.setState({
          userInfo: {
            name: "",
            city: "",
            address: "",
            nrAddress: "",
            number: "",
            email: "",
            comments: "",
            paymentMethod: "",
            deliveryMethod: "",
            termsAccept: false,
            newsletterAccept: false,
            accept: false,
          },
          errors: {
            name: false,
            address: false,
            nrAddress: false,
            email: false,
            number: false,
            paymentMethod: false,
            deliveryMethod: false,
            termsAccept: false,
          },
        });
      }, 6000);
    } else {
      this.setState({
        errors: {
          name: !validation.name,
          address: !validation.address,
          nrAddress: !validation.nrAddress,
          email: !validation.email,
          number: !validation.number,
          paymentMethod: !validation.paymentMethod,
          deliveryMethod: !validation.deliveryMethod,
          termsAccept: !validation.termsAccept,
        },
      });
    }
  };
  formValidation = () => {
    let name = false;
    let address = false;
    let nrAddress = false;
    let email = false;
    let number = false;
    let paymentMethod = false;
    let deliveryMethod = false;
    let termsAccept = false;
    let correct = false;
    if (this.state.userInfo.name.length != 0) {
      name = true;
    }
    if (this.state.userInfo.address.length != 0) {
      address = true;
    }
    if (this.state.userInfo.nrAddress.length != 0) {
      nrAddress = true;
    }
    if (this.state.userInfo.paymentMethod.length != 0) {
      paymentMethod = true;
    }
    if (this.state.userInfo.deliveryMethod.length != 0) {
      deliveryMethod = true;
    }
    if (
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i.test(
        this.state.userInfo.email
      ) ||
      this.state.userInfo.email == ""
    ) {
      email = true;
    }

    if (this.state.userInfo.number.length != 0) {
      if (
        /^[0-9\s]*$/i.test(this.state.userInfo.number) &&
        this.state.userInfo.number.replace(/ /g, "").length === 9
      ) {
        number = true;
      }
      this.errorMessages.numberMessage = "Niepoprawny numer telefonu.";
    } else {
      this.errorMessages.numberMessage = this.errorMessages.requiredMessage;
    }
    if (this.state.userInfo.termsAccept === true) {
      termsAccept = true;
    }
    if (
      name &&
      address &&
      nrAddress &&
      email &&
      number &&
      deliveryMethod &&
      paymentMethod &&
      termsAccept
    ) {
      correct = true;
    }
    return {
      correct,
      name,
      address,
      nrAddress,
      email,
      number,
      deliveryMethod,
      paymentMethod,
      termsAccept,
    };
  };
  handleUserInfoChange = (e) => {
    const name = e.target.name;
    let value;
    if (e.target.type == "checkbox") {
      value = e.target.checked;
    } else {
      value = e.target.value;
    }
    let userInfo = { ...this.state.userInfo };
    userInfo[name] = value;
    this.setState({
      userInfo,
    });
  };
  orderList = () =>
    this.props.orderList.map((item) => (
      <>
        <div className="row">
          <div className="col-9 m-auto">
            <p className="basketOrder">
              {item.id}. {item.name}
            </p>
          </div>
          <div className="col-3 text-right m-auto">
            <p className="text-secondary m-auto">
              <strong>{item.price}</strong>
            </p>
          </div>
        </div>
        <div className="row border-bottom border-secondary mb-3">
          <div className="col">
            <p className="m-auto pt-3 pb-3">
              <em>{item.ingredients}</em>
            </p>
          </div>
          <div className="pb-3 pt-3 col text-right">
            <RemoveFromCartButton
              handleRemoveItem={this.props.handleRemoveItem}
              itemId={item.id}
            />
          </div>
        </div>
      </>
    ));

  content = () => {
    if (this.orderList().length != 0) {
      return (
        <>
          <CSSTransition
            in={true}
            appear={true}
            classNames={{
              appear: "appearContentCenter",
              appearDone: "appearContentCenterDone",
              enterDone: "enterContentCenterDone",
            }}
          >
            <h1 className="pt-3 pb-3 text-center">Twoje zamówienie:</h1>
          </CSSTransition>
          <CSSTransition
            in={true}
            appear={true}
            classNames={{
              appear: "appearContentCenter",
              appearDone: "appearContentCenterDone",
              enterDone: "enterContentCenterDone",
            }}
          >
            <div>{this.orderList()}</div>
          </CSSTransition>
        </>
      );
    } else {
      return (
        <>
          <CSSTransition
            in={true}
            appear={true}
            classNames={{
              appear: "appearContentCenter",
              appearDone: "appearContentCenterDone",
              enterDone: "enterContentCenterDone",
            }}
          >
            <p className="text-center emptyCart">
              Twój <span className="btnIcon fas fa-shopping-cart"></span> jest
              pusty ! <span className="far fa-frown"></span>
            </p>
          </CSSTransition>
          <CSSTransition
            in={true}
            appear={true}
            classNames={{
              appear: "appearContentCenter",
              appearDone: "appearContentCenterDone",
              enterDone: "enterContentCenterDone",
            }}
          >
            <p className="text-center">
              <MenuButton />
            </p>
          </CSSTransition>
        </>
      );
    }
  };

  orderLoadingScreen = (condition) => {
    if (condition === "show" && this.state.loadingScreen === null) {
      this.setState({
        loadingScreen: <OrderLoadingScreen type="spin" />,
      });
      setTimeout(() => {
        this.setState({
          loadingScreen: <OrderLoadingScreen type="confirm" />,
        });
      }, 3000);
    } else
      this.setState({
        loadingScreen: null,
      });
  };
  summaryCost = () => {
    let totalCost = 0;
    let deliveryCost = 0;
    let orderCost = 0;
    this.props.orderList.forEach((item) => {
      orderCost += parseInt(item.price);
    });
    if (this.state.userInfo.deliveryMethod === "delivery") {
      deliveryCost = 5;
    }
    totalCost = orderCost + deliveryCost;
    return (
      <div className="col-md-3">
        <div className="orderSummary pl-3 pb-1">
          <h4 className="text-center">Podsumowanie</h4>
          <p>Jedzenie: {orderCost} zł</p>
          <p>Dostawa: +{deliveryCost} zł</p>
          <p>
            <span className="border-bottom border-secondary">
              Razem: <strong>{totalCost} zł</strong>
            </span>
          </p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="container flex-grow-1">
        {this.content()}
        {this.state.loadingScreen}
        {this.orderList().length != 0 ? (
          <CSSTransition
            in={true}
            appear={true}
            classNames={{
              appear: "appearContentCenter",
              appearDone: "appearContentCenterDone",
              enterDone: "enterContentCenterDone",
            }}
          >
            <div className="row flex-md-row-reverse">
              {this.summaryCost()}
              <UserInfoForm
                userInfo={this.state.userInfo}
                errors={this.state.errors}
                messages={this.errorMessages}
                handleSubmit={this.handleSubmit}
                handleUserInfoChange={this.handleUserInfoChange}
              />
            </div>
          </CSSTransition>
        ) : null}
      </div>
    );
  }
}

export default BasketPage;
