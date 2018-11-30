import React, { Component } from "react";
import ArticleHeader from "../../molecules/ArticleHeader";
import Abstract from "../../atoms/Abstract";
import Image from "../../atoms/Image";
import "./style.scss";

class Article extends Component {
  render() {
    const { content, handleModalMenu } = this.props;
    return (
      <div className="Article">
        <ArticleHeader handleModalMenu={() => handleModalMenu()} {...content} />
        <div className="article-image">
          <Image
            imageUrl={content.multimedia[2] ? content.multimedia[4].url : null}
          />
        </div>
        <Abstract {...content} />
      </div>
    );
  }
}

export default Article;
