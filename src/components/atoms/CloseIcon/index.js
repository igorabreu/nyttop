import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const CloseIcon = ({ fill, handleModalMenu }) => (
  <svg
    width="24"
    height="24"
    fillRule="evenodd"
    clipRule="evenodd"
    className="CloseIcon"
    onClick={() => handleModalMenu()}
  >
    <path
      fill={fill}
      d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"
    />
  </svg>
);

CloseIcon.propTypes = {
  fill: PropTypes.string
};

CloseIcon.defaultProps = {
  fill: "#fff"
};

export default CloseIcon;
