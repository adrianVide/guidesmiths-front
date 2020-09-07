import React from "react";
import { useSelector } from "react-redux";
import "./FullPageLoader.css";

export const FullPageLoader = () => {
  const loading = useSelector((state) => state.loading);

  return (
    <>
      {loading ? (
        <>
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </>
      ) : null}
    </>
  );
};
