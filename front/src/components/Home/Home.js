import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { PhoneList } from "../PhoneList/PhoneList";
import { Phone } from "../Phone/Phone";

export const HomePage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: "PHONE_LIST_START" });
  }, [dispatch]);

  return (
    <>
      <PhoneList />
      <Phone />
    </>
  );
};
