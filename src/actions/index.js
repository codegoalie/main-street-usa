export const UPDATE_VALUE = "UPDATE_VALUE";
export const updateValue = (field, value) => ({
  type: UPDATE_VALUE,
  field,
  value
});

export const SET_DATES = "SET_DATES";
export const setDates = dates => ({
  type: SET_DATES,
  dates
});

export const SET_FOCUSED_DATE_INPUT = "SET_FOCUSED_DATE_INPUT";
export const setFocusedDateInput = input => ({
  type: SET_FOCUSED_DATE_INPUT,
  input
});

export const SET_SAVED = "SET_SAVED";
export const setSaved = () => ({
  type: SET_SAVED
});

export const SET_EMAIL = "SET_EMAIL";
export const setEmail = email => ({
  type: SET_EMAIL,
  email
});

export const SET_ERROR = "SET_ERROR";
export const setError = error => ({
  type: SET_ERROR,
  error
});

export function saveForm() {
  return function(dispatch, getState) {
    const state = getState();
    let content = {
      email: state.form.email,
      start_date: state.dates.startDate.format("YYYY-MM-DD"),
      end_date: state.dates.endDate.format("YYYY-MM-DD")
    };
    return fetch("/setup", {
      method: "POST",
      body: JSON.stringify(content),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => {
        if (res.status === 500) {
          throw new Error(
            "Server error. Please refresh this page and try again."
          );
        }
        return res.json();
      })
      .then(json => {
        if (json.errors) {
          let msg = "";
          for (var key in json.errors) {
            if (json.errors.hasOwnProperty(key)) {
              msg += json.errors[key] + "\n";
            }
          }
          dispatch(setError(msg));
          return;
        }
        dispatch(setSaved());
      })
      .catch(err => {
        dispatch(setError(`${err}`));
      });
  };
}
