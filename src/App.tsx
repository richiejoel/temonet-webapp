import React from "react";
import "./App.css";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Routes from "./routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
