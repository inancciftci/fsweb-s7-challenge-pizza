import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FormPage from "../pages/FormPage";
import ConfirmationPage from "../pages/ConfirmationPage";

export default function PageBody() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/pizza">
          <FormPage />
        </Route>
        <Route path="/siparis-onay/:orderId">
          <ConfirmationPage />
        </Route>
      </Switch>
    </div>
  );
}
