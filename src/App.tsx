import React, { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { ToastContainer } from "react-toastify";
import Auth from "./components/Auth";

function App() {
  sessionStorage.setItem("progressBar", "0");
  return (
    <>
      <Provider store={store}>
        <Auth />
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
