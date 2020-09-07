import axios from "axios";
export const PHONE_SELECTED = "PHONE_SELECTED";
export const PHONE_LIST = "PHONE_LIST";

export const phoneSelected = (phone) => {
  return {
    type: "PHONE_SELECTED",
    phone: phone,
  };
};

export const phoneListStart = () => {
  return {
    type: "PHONE_LIST_START",
  };
};
export const phoneListSuccess = (phones) => {
  return {
    type: "PHONE_LIST_SUCCESS",
    phones: phones,
  };
};
export const phoneListError = (error) => {
  return {
    type: "PHONE_LIST_ERROR",
    error: error,
  };
};

export const phoneListFetchAsync = () => async (dispatch) => {
  dispatch(phoneListStart());
  try {
    const resp = await axios.get("http://localhost:3001/phones");
    dispatch(phoneListSuccess(resp.data));
  } catch (e) {
    dispatch(phoneListError(e.message));
  }
};
