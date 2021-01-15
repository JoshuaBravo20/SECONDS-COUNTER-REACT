import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function SecondsCounter(props) {
  return (
    <>
      <div className="container-fluid">
        <div
          className="row text-white p-3 d-flex justify-content-center"
          id="parentRow"
        >
          <div className="col-1">
            <i className="fas fa-clock"></i>
          </div>
          <div className="col-1 fourth">{props.fourth % 10}</div>
          <div className="col-1 third">{props.third % 10}</div>
          <div className="col-1 second">{props.second % 10}</div>
          <div className="col-1 first animate__animated animate__bounce">
            {props.first % 10}
          </div>
        </div>
      </div>
    </>
  );
}

SecondsCounter.propTypes = {
  fourth: PropTypes.number,
  third: PropTypes.number,
  second: PropTypes.number,
  first: PropTypes.number,
};

export default SecondsCounter;
