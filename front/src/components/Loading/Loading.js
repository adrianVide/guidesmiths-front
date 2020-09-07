import React from "react";
import { useSelector } from "react-redux";
import './Loading.css'

export const Loading = () => {
  const loading = useSelector((state) => state.loading);

  return <>{loading ? <div class="lds-ripple"><div></div><div></div></div> : null}</>;
};
