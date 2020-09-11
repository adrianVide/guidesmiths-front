import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Home.css";
import { PhoneList } from "../PhoneList/PhoneList";
import { Phone } from "../Phone/Phone";
import { Loading } from "../Loading/Loading";

export const HomePage = () => {
  const dispatch = useDispatch();
  
  //Trigger the data fetch on first load
  useEffect(() => {
    dispatch({ type: "PHONE_LIST_START" });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="flexcont">
        <Loading />
        <PhoneList />
        <Phone />
      </div>
    </div>
  );
};
