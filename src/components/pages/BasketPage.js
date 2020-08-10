import React, { Component } from "react";
import RemoveFromCartButton from "../layouts/RemoveFromCartButton";
import UserInfoForm from "../layouts/UserInfoForm";

class BasketPage extends Component {
  state = {
    userInfo: {
      deliveryType: "",
      name: "",
      city: "",
      address: "",
      nrAddress: "",
      number: "",
      email: "",
      comments: "",
      paymentMethod: "",
    },
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleUserInfoChange = (
    deliveryType,
    name,
    city,
    address,
    nrAddress,
    number,
    email,
    comments,
    paymentMethod
  ) => {
    this.setState({
      userInfo: {
        deliveryType: deliveryType,
        name: name,
        city: city,
        address: address,
        nrAddress: nrAddress,
        number: number,
        email: email,
        comments: comments,
        paymentMethod: paymentMethod,
      },
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
            handleUserInfoChange={this.handleUserInfoChange}
          />
        }
      </div>
    );
  }
}

export default BasketPage;
