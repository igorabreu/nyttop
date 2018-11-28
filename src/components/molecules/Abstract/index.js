import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Abstract = ({ text }) => <p className="abstract-text">{text}</p>;

Abstract.propTypes = {
  text: PropTypes.string
};

Abstract.defaultProps = {
  text: ""
};

export default Abstract;
