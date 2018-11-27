import React, { Component } from "react";
import NewsCard from "../../molecules/NewsCard";
import "./style.scss";

class Feed extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className="Feed">
        <NewsCard content={content} />
      </div>
    );
  }
}

export default Feed;
