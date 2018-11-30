import React from "react";
import PropTypes from "prop-types";
import dateConverter from "../../../utils/dateFormat";
import "./style.scss";

const CardHeader = ({ title, byline, published_date }) => (
  <div className="CardHeader">
    <h4 className="title">{title}</h4>
    <div className="byline">{byline}</div>
    <div className="publish-date">{dateConverter(published_date)}</div>
  </div>
);

CardHeader.propTypes = {
  title: PropTypes.string,
  byline: PropTypes.string,
  published_date: PropTypes.string
};

export default CardHeader;
