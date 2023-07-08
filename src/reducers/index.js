import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import common from "./common";

export default combineReducers({
  auth,
  message,
  common,
});
