import { SET_SAVED, SET_EMAIL, SET_ERROR } from "../actions";

const form = (state = { saved: false, email: "", error: "" }, action) => {
  switch (action.type) {
    case SET_SAVED:
      return Object.assign({}, state, {
        saved: true
      });
    case SET_EMAIL:
      return Object.assign({}, state, {
        email: action.email
      });
    case SET_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
};

export default form;
