import React from "react";
import PropTypes from "prop-types";
import Thumbnail from "../../atoms/Thumbnail";
import CardHeader from "../../atoms/CardHeader";
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
      <CardHeader {...{ title, byline, published_date }} />
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
