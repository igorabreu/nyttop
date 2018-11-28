import React, { Component } from "react";
import Thumbnail from "../../atoms/Thumbnail";
import "./style.scss";

class NewsCard extends Component {
  render() {
    const { content, handleSelection } = this.props;
    return (
      <div className="NewsCard">
        {content.map((article, index) => {
          return (
            <div key={index} onClick={() => handleSelection(index)}>
              <h5>{article.title}</h5>
              <div>{article.published_date}</div>
              <div>{article.byline}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NewsCard;
