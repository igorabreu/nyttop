import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Thumbnail = ({ imageUrl }) => (
  <div className="Thumbnail">
    <img src={imageUrl} alt="thumb_news" />
  </div>
);

Thumbnail.propTypes = {
  text: PropTypes.string
};

export default Thumbnail;
