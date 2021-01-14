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
        <Route
          path="/"
          exact
          render={(props) => (
            <HomePage
              {...props}
              title="La Stravaganza - Restauracja Włoska Wrocław"
            />
          )}
        />
        <Route
          path="/menu"
          render={(props) => (
            <MenuPage
              {...props}
              handleAddItem={this.handleAddItem}
              title="Menu - Restauracja La Stravaganza"
            />
          )}
        />
        <Route
          path="/promo-deals"
          render={(props) => (
            <PromoPage
              {...props}
              title="Promocje - Restauracja La Stravaganza"
            />
          )}
        />
        <Route
          path="/about-us"
          render={(props) => (
            <AboutPage {...props} title="O nas - Restauracja La Stravaganza" />
          )}
        />
        <Route
          path="/contact"
          render={(props) => (
            <ContactPage
              {...props}
              title="Kontakt - Restauracja La Stravaganza"
            />
          )}
        />
        <Route
          path="/basket"
          render={(props) => (
            <BasketPage
              {...props}
              handleRemoveItem={this.handleRemoveItem}
              orderList={this.state.orderList}
              title="Koszyk - Restauracja La Stravaganza"
            />
          )}
        />
        <Route
          render={(props) => (
            <ErrorPage
              {...props}
              title="Nie znaleziono strony - Restauracja La Stravaganza"
            />
          )}
        />
      </Switch>
    );
  }
}

export default Page;
