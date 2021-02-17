import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "../pages/Login";
import RegisterPage from "../pages/RegisterPage";
import AccessDenied from "../pages/AccessDenied";

export default function RoutesPublic() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/signin" />} />
        <Route path="/signin" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <RegisterPage />
        </Route>
        <Route path="*" exact>
          <AccessDenied />
        </Route>
      </Switch>
    </Router>
  );
}
