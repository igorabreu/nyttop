import React from "react";
import PropTypes from "prop-types";

const Thumbnail = ({ imageUrl }) => (
  <div className="Thumbnail">
    <img src={imageUrl} alt="thumb_news" />
  </div>
);

Thumbnail.propTypes = {
  imageUrl: PropTypes.string
};

export default Thumbnail;
