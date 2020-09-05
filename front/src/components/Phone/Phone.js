import React from "react";
import { useSelector } from "react-redux";
import "./Phone.css";

export const Phone = () => {
  const phone = useSelector((state) => state.phone);



  return (
    <div class="container">
      <div class="images">
        <img src={"http://localhost:3001/images/" + phone.imageFileName} />
      </div>

      <div class="product">
        <p>{phone.manufacturer}</p>
        <h1>{phone.name}</h1>
        <h2>{phone.price} €</h2>
        <p class="desc">
          {phone.description}
        </p>
        <div class="buttons">
          <button class="add">Add to Cart</button>
          <button class="like">
            <span>♥</span>
          </button>
        </div>
      </div>
    </div>

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

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.phone_id;
  return { phone: state.phones.find((phone) => phone.id === id) };
};
