import React from "react";
import { useSelector } from "react-redux";
import "./Phone.css";

export const Phone = () => {
  const phone = useSelector((state) => state.phone);

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
              {phone.ram} MB RAM
            </div>
          </div>
        </div>
      ) : (
        <h1>Choose your phone</h1>
      )}
    </>
    // <div>
    //   <div className="container center">
    //     <div className="card">
    //       <h2>{phone.name}</h2>
    //       <hr />
    //       <p>
    //         {phone.description}
    //       </p>
    //       <button>Next</button>
    //     </div>
    //   </div>
    // </div>
  );
};
