import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";

//Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import RegisterPage from "../pages/RegisterPage";
import PageNotFound from "../pages/PageNotFound";
import MultiplesActivities from "../pages/MultiplesActivities/MultiplesActivities";
import Lesson from "../pages/Lesson";
import LoggedLayout from "../layouts/LoggedLayout";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact>
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/question" exact>
          <MultiplesActivities />
        </PrivateRoute>
        <PrivateRoute path="/lesson" exact>
          <Lesson />
        </PrivateRoute>
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

const LoginContainer = () => (
  <div className="container">
    <Route exact path="/" render={() => <Redirect to="/signin" />} />
    <Route path="/signin" component={Login} />
    <Route path="/signup" component={RegisterPage} />
  </div>
);

const DefaultContainer = () => (
  <div className="container">
    <LoggedLayout />
    <PrivateRoute path="/" exact>
      <Home />
    </PrivateRoute>
    <PrivateRoute path="/question" exact>
      <MultiplesActivities />
    </PrivateRoute>
  </div>
);

function PrivateRoute({ children, ...rest }) {
  const location = useLocation();
  let auth = true;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function PublicRoute({ children, ...rest }) {
  const location = useLocation();
  let auth = false;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth &&
        location.pathname !== "/signin" &&
        location.pathname !== "/signup" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
