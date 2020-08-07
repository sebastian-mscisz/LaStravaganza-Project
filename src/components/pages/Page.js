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
      name: item.name,
      price: item.price,
      ingredients: item.ingredients,
    });
    console.log(this.state.orderList);
    this.setState({
      orderList: orderList,
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
              orderLength={() => this.getOrderListLength()}
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
