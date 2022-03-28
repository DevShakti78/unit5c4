import { LOGIN } from "./action";
const initialState = {
  user: JSON.parse(localStorage.getItem("userLoginDetails")) || false,
};

export const loginReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    // add your login reducer functionalities here
    case LOGIN:
      localStorage.setItem("userLoginDetails", payload);
      console.log("changed");
      return {
        ...store,
        user: payload,
      };
    default:
      return store;
  }
};
