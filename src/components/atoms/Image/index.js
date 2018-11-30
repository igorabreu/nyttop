import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Image = ({ imageUrl }) => (
  <div className="Image">
    <img src={imageUrl} alt="thumbnail" />
  </div>
);

Image.propTypes = {
  imageUrl: PropTypes.string
};

export default Image;
