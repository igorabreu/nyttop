import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const SectionTitle = ({ text, handleModalMenu }) => (
  <div className="SectionTitle" onClick={() => handleModalMenu()}>
    <h1>{text}</h1>
  </div>
);

SectionTitle.propTypes = {
  text: PropTypes.string
};

SectionTitle.defaultProps = {
  text: "Politcs"
};

export default SectionTitle;
