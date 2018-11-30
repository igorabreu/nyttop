import React from "react";
import ArticleHeader from "../../molecules/ArticleHeader";
import Abstract from "../../atoms/Abstract";
import Image from "../../atoms/Image";
import PropTypes from "prop-types";
import "./style.scss";

const Article = ({ content, handleModalMenu }) => {
  return (
    <div className="Article">
      <ArticleHeader handleModalMenu={() => handleModalMenu()} {...content} />
      <div className="article-image">
        {content.multimedia.length > 0 ? (
          <Image imageUrl={content.multimedia[4].url} />
        ) : null}
      </div>
      <Abstract {...content} />
    </div>
  );
};

Article.propTypes = {
  content: PropTypes.array,
  handleSelection: PropTypes.func
};

export default Article;
