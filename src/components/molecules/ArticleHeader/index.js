import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const ArticleHeader = ({ content }) => (
  <div className="ArticleHeader">
    <div className="Title">{content.title}</div>
    <div className="Kicker">{content.kicker}</div>
  </div>
);

ArticleHeader.propTypes = {
  text: PropTypes.string
};

ArticleHeader.defaultProps = {
  text: ""
};

export default ArticleHeader;
