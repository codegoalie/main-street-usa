import { combineReducers } from "redux";
import setup from "./setup";
import dates from "./dates";
import form from "./form";

export default combineReducers({
  setup,
  dates,
  form
});
