import { SET_DATES, SET_FOCUSED_DATE_INPUT } from "../actions";

const setup = (
  state = {
    startDate: null,
    endDate: null,
    focusedDateInput: null
  },
  action
) => {
  switch (action.type) {
    case SET_DATES:
      return Object.assign({}, state, {
        startDate: action.dates.startDate,
        endDate: action.dates.endDate
      });
    case SET_FOCUSED_DATE_INPUT:
      return Object.assign({}, state, {
        focusedDateInput: action.input
      });
    default:
      return state;
  }
};

export default setup;
