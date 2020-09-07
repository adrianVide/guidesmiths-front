import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
// import { PhoneList } from "./components/PhoneList/PhoneList";
// import { Phone } from "./components/Phone/Phone";
import { HomePage } from "./components/Home/Home";
import store from "./storeConfig";
// import {useEffect} from 'react'




ReactDOM.render(
  <React.StrictMode>
      <Provider store={store} className="container">
        <div className="flexcont">
          <HomePage />
        </div>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
