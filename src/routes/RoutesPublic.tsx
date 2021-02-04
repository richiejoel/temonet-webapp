import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";

import Login from "../pages/Login";
import RegisterPage from "../pages/RegisterPage";
import PageNotFound from "../pages/PageNotFound";

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
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}
