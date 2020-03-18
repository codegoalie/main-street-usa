import * as serviceWorker from "./serviceWorker";
import "@babel/polyfill";
import "react-dates/initialize";

import React from "react";
import { render } from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import moment from "moment";

import App from "./App";
import rootReducer from "./reducers";
import { setDates, setFocusedDateInput } from "./actions";

const setup = document.getElementById("setup");

const middleware = [thunkMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

const startDate = setup.dataset.startdate;
const endDate = setup.dataset.enddate;
console.log(startDate, endDate);
if (startDate && !endDate) {
  store.dispatch(setDates({ startDate: moment(startDate), endDate: null }));
  store.dispatch(setFocusedDateInput(null));
}
if (startDate && endDate) {
  store.dispatch(
    setDates({ startDate: moment(startDate), endDate: moment(endDate) })
  );
  store.dispatch(setFocusedDateInput(null));
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  setup
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
