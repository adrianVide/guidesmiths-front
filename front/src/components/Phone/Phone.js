import React from "react";
import { useSelector } from "react-redux";
import "./Phone.css";

export const Phone = () => {
  const phone = useSelector((state) => state.phone);
  console.log(phone)

 
  return (
    <div>
      <div className="container center">
        <div className="card">
          <h2>{phone.name}</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.phone_id;
  return { phone: state.phones.find((phone) => phone.id === id) };
};
