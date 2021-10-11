import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../containers/HomePage";
import ProductPage from "../containers/ProductPage";
import ShoppingCartPage from "../containers/ShoppingCartPage";

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cart" component={ShoppingCartPage} />
        <Route path="/products/:id" component={ProductPage} />
      </Switch>
  );
};

export default Routes;
