import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { phoneSelected } from "../../actions/actions";
import "./PhoneList.css";

export const PhoneList = () => {
  const dispatch = useDispatch();
  //Get data from state and store in const
  const phones = useSelector((state) => state.phones);

  //dispatch the selected phone to state to be fetched on Phone component
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
