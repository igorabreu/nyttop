import React from "react";
import ArticleCard from "../../molecules/ArticleCard";
import PropTypes from "prop-types";
import "./style.scss";

const Feed = ({ content, handleSelection }) => {
  return (
    <div className="Feed">
      {content.map((article, index) => {
        return (
          <ArticleCard
            key={index}
            handleSelection={() => handleSelection(index)}
            {...article}
          />
        );
      })}
    </div>
  );
};

Feed.propTypes = {
  content: PropTypes.array,
  handleSelection: PropTypes.func
};

Feed.defaultProps = {
  content: []
};

export default Feed;
