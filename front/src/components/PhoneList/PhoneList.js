import React from "react";
import { useEffect } from "react";
import {
  watchFetchPhones,
  workerFetchPhones,
} from "../../middlewares/watchFetchPhones.saga";
import { useSelector, useDispatch } from "react-redux";
import { phoneSelected, phoneListStart, phoneListFetchAsync } from "../../actions/actions";
import "./PhoneList.css";

export const PhoneList = () => {
  const dispatch = useDispatch();
  const phones = useSelector((state) => state.phones);
  console.log(phones)


  
  

  function singlePhone(id) {
    const phone = phones.find((phone) => phone.id === id);
    dispatch(phoneSelected(phone));
  }

  return (
    <div className="list">
      {phones.map((phone) => {
        return (
          <div key={phone.id}>
            <button
              onClick={() => singlePhone(phone.id)}
              className="list-button"
            >
              <h2>{phone.name}</h2>
            </button>
          </div>
        );
      })}
    </div>
  );
};
