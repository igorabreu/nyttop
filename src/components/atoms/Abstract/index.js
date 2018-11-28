import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Abstract = ({ abstract }) => <p className="abstract-text">{abstract}</p>;

Abstract.propTypes = {
  abstract: PropTypes.string
};

Abstract.defaultProps = {
  abstract: ""
};

export default Abstract;