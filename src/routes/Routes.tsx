import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import RegisterPage from "../pages/RegisterPage";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signin" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}
