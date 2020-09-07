import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider, useDispatch } from "react-redux";
import { PhoneList } from "./components/PhoneList/PhoneList";
import { Phone } from "./components/Phone/Phone";
import store from "./storeConfig";
import {useEffect} from 'react'


let dispatch = useDispatch()
useEffect(() => {
  dispatch({ type: "PHONE_LIST_START" });
}, [dispatch]);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store} className="container">
        <div className="flexcont">
          <PhoneList  />
          <Phone />
        </div>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
