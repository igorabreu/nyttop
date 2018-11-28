import React, { Component } from "react";
import ArticleHeader from "../../molecules/ArticleHeader";
import Abstract from "../../molecules/Abstract";
import "./style.scss";

class Article extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className="Feed">
        <ArticleHeader content={content} />
        <Abstract content={content} />
      </div>
    );
  }
}

export default Article;
