import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { saveForm, setEmail } from "../actions";

const EmailForm = ({ saved, email, error, saveForm, setEmail }) => {
  return (
    <div>
      {saved
        ? <div>
            <h4>
              <i className="fa fa-fw fa-check mr-2" />Thanks for signing up!
            </h4>
            <p>Be sure to check our email.</p>
          </div>
        : <div className="form-inline w-100">
            {error !== ""
              ? <div className="alert alert-danger">{error}</div>
              : null}
            <label className="sr-only" htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              id="email"
              placeholder="me@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button className="btn btn-primary mb-2" onClick={saveForm}>
              Get reminders
            </button>
          </div>}
    </div>
  );
};

EmailForm.propTypes = {
  saved: PropTypes.bool,
  email: PropTypes.string
};

const mapStateToProps = state => ({
  saved: state.form.saved,
  email: state.form.email,
  error: state.form.error
});

const mapDispatchToProps = dispatch => ({
  setEmail: email => dispatch(setEmail(email)),
  saveForm: () => dispatch(saveForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailForm);
