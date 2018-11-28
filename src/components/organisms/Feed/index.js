import React, { Component } from "react";
import ArticleCard from "../../molecules/ArticleCard";
import "./style.scss";

class Feed extends Component {
  render() {
    const { content, handleSelection } = this.props;
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
  }
}

export default Feed;
