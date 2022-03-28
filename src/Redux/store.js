import { loginReducer } from "./Login/loginReducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  login: loginReducer,
});
export const store = createStore(rootReducer); // add your reducers here
