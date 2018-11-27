import React, { Component } from "react";
import Thumbnail from "../../atoms/Thumbnail";
import "./style.scss";

class NewsCard extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className="NewsCard">
        {content.map((article, index) => {
          return (
            <div key={index}>
              <h5>{article.title}</h5>
              <Thumbnail
                imageUrl={
                  article.multimedia[1] ? article.multimedia[1].url : null
                }
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default NewsCard;
