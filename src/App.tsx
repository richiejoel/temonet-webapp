import React, { useState } from "react";
import "./App.css";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Routes from "./routes/Routes";
import LoggedLayout from "./layouts/LoggedLayout";
import PublicLayout from "./layouts/PublicLayout";
import { Route, useHistory } from "react-router-dom";

function App() {
  let isAuth = true;
  const history = useHistory();
  // var location = useLocation();
  /*const Log = (isAuth: any): JSX.Element => {
    return (
      <>
        {window.location.pathname != "/signin" &&
        window.location.pathname != "/signup" ? (
          <LoggedLayout auth={isAuth} />
        ) : (
         
        )}
      </>
    );
  };*/

  return (
    <Provider store={store}>
      {!isAuth ? <PublicLayout /> : <LoggedLayout auth={isAuth} />}
    </Provider>
  );
}

export default App;
