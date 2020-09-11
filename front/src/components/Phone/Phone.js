import React from "react";
import { useSelector } from "react-redux";
import "./Phone.css";

export const Phone = () => {
  //Get phone from state depending on button from PhoneList
  const phone = useSelector((state) => state.phone);
  //Get loading state for showing spinner or not
  const loading = useSelector((state) => state.loading);

  return (
    <>
      {Object.keys(phone).length !== 0 ? (
        <div className="card">
          <img
            src={"http://localhost:3001/images/" + phone.imageFileName}
            alt={phone.name}
          />
          <p className="brand">{phone.manufacturer}</p>
          <h1>{phone.name}</h1>
          <p className="price">{phone.price} €</p>
          <p className="desc">{phone.description}</p>
          <div className="specs-container">
            <div className="specs">
              <i className="material-icons md-18">smartphone</i>
              {phone.screen}
            </div>
            <div className="specs">
              <i className="material-icons md-18">memory</i>
              {phone.processor}
            </div>
            <div className="specs">
              <i className="material-icons md-18">power_input</i>
              {phone.ram} GB RAM
            </div>
          </div>
        </div>
      ) : loading ? (
        <h1 className="choose">Loading phones...</h1>
      ) : (
        <h1 className="choose">Choose your phone</h1>
      )}
    </>
  );
};
