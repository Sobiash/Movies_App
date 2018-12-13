import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import Router from "./components/Router";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
