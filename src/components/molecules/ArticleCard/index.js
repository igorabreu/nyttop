import React from "react";
import PropTypes from "prop-types";
import Thumbnail from "../../atoms/Thumbnail";
import dateConverter from "../../../utils/dateFormat";
import "./style.scss";

const ArticleCard = ({
  title,
  byline,
  published_date,
  multimedia,
  index,
  handleSelection
}) => {
  return (
    <div
      className={`ArticleCard ${multimedia[1] ? "" : "centered"}`}
      onClick={() => handleSelection(index)}
    >
      <h4 className="title">{title}</h4>
      <div className="byline">{byline}</div>
      <div className="publish-date">{dateConverter(published_date)}</div>
      {multimedia[1] ? <Thumbnail imageUrl={multimedia[1].url} /> : null}
    </div>
  );
};
ArticleCard.propTypes = {
  abstract: PropTypes.string
};

ArticleCard.defaultProps = {
  abstract: ""
};

export default ArticleCard;
