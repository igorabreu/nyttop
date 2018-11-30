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
      <div className="thumb-image">
        {multimedia[1] ? <Thumbnail imageUrl={multimedia[1].url} /> : null}
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string,
  byline: PropTypes.string,
  published_date: PropTypes.string,
  multimedia: PropTypes.array,
  index: PropTypes.number,
  handleSelection: PropTypes.func
};

export default ArticleCard;
