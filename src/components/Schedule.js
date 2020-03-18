import React from "react";
import PropTypes from "prop-types";
import momentPropTypes from "react-moment-proptypes";
import moment from "moment";
import { DateRangePicker } from "react-dates";
import { START_DATE, END_DATE } from "react-dates/constants";

import Timeline from "./Timeline";
import EmailForm from "./EmailForm";

const Schedule = ({
  startDate,
  endDate,
  setDates,
  focusedDateInput,
  setFocusedDateInput,
  durationAsDays
}) => (
  <div className="pt-3">
    <DateRangePicker
      startDate={startDate} // momentPropTypes.momentObj or null,
      startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
      endDate={endDate} // momentPropTypes.momentObj or null,
      endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
      onDatesChange={setDates} // PropTypes.func.isRequired,
      focusedInput={focusedDateInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={setFocusedDateInput} // PropTypes.func.isRequired,
      numberOfMonths={1}
      initialVisibleMonth={() => {
        const defaultDate = moment().add(6, "months");
        if (focusedDateInput === START_DATE) {
          return startDate || defaultDate;
        }
        if (focusedDateInput === END_DATE) {
          return endDate || defaultDate;
        }
        return defaultDate;
      }}
    />

    <div className="row mt-3">
      <div className="col-sm-12 col-lg-6">
        <Timeline
          startDate={startDate}
          showPlaceholder={!startDate || !!focusedDateInput}
        />
      </div>
      {startDate && !focusedDateInput
        ? <div className="col-sm-12 col-lg-6 mt-3">
            <h3>{startDate.diff(moment(), "days") + 1} days from now!</h3>
            <div className="mt-3">
              <EmailForm />
            </div>
            <p className="mt-1">
              {durationAsDays + 1} days / {durationAsDays} nights
            </p>
          </div>
        : null}
    </div>

  </div>
);

Schedule.propTypes = {
  startDate: momentPropTypes.momentObj,
  endDate: momentPropTypes.momentObj,
  focusedDateInput: PropTypes.string,
  setDates: PropTypes.func,
  durationAsDays: PropTypes.number
};

Schedule.defaultProps = {};

export default Schedule;
