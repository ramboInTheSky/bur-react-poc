import "react-app-polyfill/ie11";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import AppContainer from "./app/app-container";

import { GlobalStyle } from "./global-styles";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <AppContainer />
  </Fragment>,
  document.getElementById("auth_spa")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
