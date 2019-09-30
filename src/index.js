import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
