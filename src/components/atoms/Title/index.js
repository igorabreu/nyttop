import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Title = ({ text }) => (
  <div className="Title">
    <div>{text}</div>
  </div>
);

Title.propTypes = {
  text: PropTypes.string
};

Title.defaultProps = {
  text: "Politcs"
};

export default Title;
