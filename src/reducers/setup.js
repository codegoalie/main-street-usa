import { UPDATE_VALUE } from "../actions";

const setup = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_VALUE:
      return Object.assign({}, state, {
        [action.field]: action.value
      });
    default:
      return state;
  }
};

export default setup;
