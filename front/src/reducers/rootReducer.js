//Empty initial redux state
const initialState = {
  phones: [],
  phone: {},
  loading: true,
  error: undefined,
};

//Reducers
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PHONE_SELECTED":
      return {
        ...state,
        phone: action.phone,
        loading: false,
      };
    case "PHONE_LIST_START":
      return {
        ...state,
        loading: true,
      };
    case "PHONE_LIST_SUCCESS":
      return {
        ...state,
        phones: action.payload.phones,
        loading: false,
      };
    case "PHONE_LIST_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
