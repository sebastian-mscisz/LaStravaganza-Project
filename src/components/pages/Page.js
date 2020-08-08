import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import PromoPage from "./PromoPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import BasketPage from "./BasketPage";
import ErrorPage from "./ErrorPage";

class Page extends Component {
  state = {
    orderList: [],
  };
  handleAddItem = (item) => {
    const orderList = [...this.state.orderList];
    orderList.push({
      id: item.id,
      name: item.name,
      price: item.price,
      ingredients: item.ingredients,
    });
    this.setState({
      orderList: orderList,
    });
  };
  handleRemoveItem = (id) => {
    const orderList = [...this.state.orderList];
    const index = orderList.findIndex((order) => order.id === id);
    orderList.splice(index, 1);
    this.setState({
      orderList,
    });
  };
  getOrderListLength() {
    return this.state.orderList.length;
  }
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/menu"
          render={(props) => (
            <MenuPage {...props} handleAddItem={this.handleAddItem} />
          )}
        />
        <Route path="/promo-deals" component={PromoPage} />
        <Route path="/about-us" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route
          path="/basket"
          render={(props) => (
            <BasketPage
              {...props}
              handleRemoveItem={this.handleRemoveItem}
              orderList={this.state.orderList}
            />
          )}
        />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default Page;
