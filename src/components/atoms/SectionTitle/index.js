import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const SectionTitle = ({ text }) => (
  <div className="SectionTitle">
    <h1>{text}</h1>
  </div>
);

SectionTitle.propTypes = {
  text: PropTypes.string
};

SectionTitle.defaultProps = {
  text: "Polítca"
};

export default SectionTitle;
