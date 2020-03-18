import React from "react";
import PropTypes from "prop-types";
import momentPropTypes from "react-moment-proptypes";
import moment from "moment";
import classnames from "classnames";
import { Collapse } from "react-collapse";

import EmailForm from "./EmailForm";

class TimelineItem extends React.Component {
  state = { shown: this.props.expand };
  toggleBody = () => {
    this.setState({ shown: !this.state.shown });
  };
  render() {
    const { startDate, title, body, icon } = this.props;
    return (
      <div className="timeline-wrapper">
        <div
          onClick={this.toggleBody}
          className={classnames("timeline-toggle", { shown: this.state.shown })}
        >
          <div
            className={classnames("row", {
              "text-muted": moment().isAfter(startDate)
            })}
          >
            <div className="col-6 col-lg-8">
              <i className={`fa fa-${icon} fa-fw mr-1`} />
              {title}
            </div>
            <div className="col-6 col-lg-4 text-right font-weight-bold">
              {startDate.format("M/DD/YYYY")}
              <i
                className={classnames("fa", "fa-fw", "fa-angle-left ml-2", {
                  shown: this.state.shown
                })}
              />
            </div>
          </div>
        </div>
        <Collapse isOpened={this.state.shown} className="timeline-body">
          {body}
          <h4>Don't forget!</h4>
          <p className="mb-2">
            Enter your email address to get reminders for this timeline
          </p>
          <EmailForm />
        </Collapse>
      </div>
    );
  }
}

TimelineItem.propTypes = {
  expand: PropTypes.bool,
  startDate: momentPropTypes.momentObj,
  title: PropTypes.string,
  body: PropTypes.element,
  icon: PropTypes.string
};

TimelineItem.defaultProps = {
  expand: false,
  startDate: moment()
};

export default TimelineItem;
