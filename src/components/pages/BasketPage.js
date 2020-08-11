import React, { Component } from "react";
import RemoveFromCartButton from "../layouts/RemoveFromCartButton";
import UserInfoForm from "../layouts/UserInfoForm";

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
  };
  errorMessages = {
    requiredMessage: <p className="text-primary">To pole jest wymagane.</p>,
    emailMessage: <p className="text-primary">Niepoprawny adres email.</p>,
    numberMessage: <p className="text-primary">Numer musi mieć 9 cyfr.</p>,
    deliveryMessage: (
      <p className="text-primary">Prosimy wybrać opcję dostawy.</p>
    ),
    paymentMessage: (
      <p className="text-primary">Prosimy wybrać formę płatności.</p>
    ),
    termsMessage: (
      <span className="text-primary pl-1">
        Prosimy wyrazić zgodę na przetwarzanie danych.
      </span>
    ),
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const validation = this.formValidation();
    if (validation.correct) {
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
  componentDidUpdate() {
    // console.log(this.state.userInfo);
  }
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

    if (/^\d{9}$/i.test(this.state.userInfo.number)) {
      number = true;
    }
    if (this.state.userInfo.number.length != 0) {
      if (/^\d{9}$/i.test(this.state.userInfo.number)) {
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
      <p>
        {item.name} - {item.price} - {item.ingredients} -{" "}
        <RemoveFromCartButton
          handleRemoveItem={this.props.handleRemoveItem}
          itemId={item.id}
        />
      </p>
    ));

  content = () => {
    if (this.orderList().length != 0) {
      return (
        <>
          <p>Twoje zamówienie: </p> {this.orderList()}
        </>
      );
    } else {
      return <p>Twój koszyk jest pusty ! :(</p>;
    }
  };

  render() {
    return (
      <div className="container">
        {this.content()}
        {
          <UserInfoForm
            userInfo={this.state.userInfo}
            errors={this.state.errors}
            messages={this.errorMessages}
            handleSubmit={this.handleSubmit}
            handleUserInfoChange={this.handleUserInfoChange}
          />
        }
      </div>
    );
  }
}

export default BasketPage;
