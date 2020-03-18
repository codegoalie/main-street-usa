import { connect } from "react-redux";
import moment from "moment";

import { setDates, setFocusedDateInput } from "../actions";

import Schedule from "../components/Schedule";

const mapStateToProps = state => ({
  startDate: state.dates.startDate,
  endDate: state.dates.endDate,
  focusedDateInput: state.dates.focusedDateInput,
  durationAsDays: state.dates.endDate && state.dates.startDate
    ? moment.duration(state.dates.endDate.diff(state.dates.startDate)).asDays()
    : null
});

const mapDispatchToProps = dispatch => ({
  setDates: dates => dispatch(setDates(dates)),
  setFocusedDateInput: focusedInput =>
    dispatch(setFocusedDateInput(focusedInput))
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
