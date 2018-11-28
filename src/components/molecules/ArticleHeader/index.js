import React from "react";
import PropTypes from "prop-types";
import dateConverter from "../../../utils/dateFormat";
import "./style.scss";

const ArticleHeader = ({ title, published_date, byline, kicker }) => (
  <div className="ArticleHeader">
    <h1 className="title">{title}</h1>
    <div className="published-date">{dateConverter(published_date)}</div>
    <div className="byline">{byline}</div>
    <div className="kicker">{kicker}</div>
  </div>
);

ArticleHeader.propTypes = {
  title: PropTypes.string,
  published_date: PropTypes.string,
  byline: PropTypes.string,
  kicker: PropTypes.string
};

ArticleHeader.defaultProps = {
  title: "",
  published_date: "",
  byline: "",
  kicker: ""
};

export default ArticleHeader;
