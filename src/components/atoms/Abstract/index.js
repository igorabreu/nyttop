import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Abstract = ({ abstract }) => <p className="Abstract">{abstract}</p>;

Abstract.propTypes = {
  abstract: PropTypes.string
};

export default Abstract;
