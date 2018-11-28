import React, { Component } from "react";
import NewsCard from "../../molecules/NewsCard";
import "./style.scss";

class Feed extends Component {
  render() {
    const { content, handleSelection } = this.props;
    return (
      <div className="Feed">
        <NewsCard
          content={content}
          handleSelection={articleIndex => handleSelection(articleIndex)}
        />
      </div>
    );
  }
}

export default Feed;
