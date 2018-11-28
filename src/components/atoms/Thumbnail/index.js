import React, { Component } from "react";
import "./style.scss";

class Thumbnail extends Component {
  render() {
    const { imageUrl } = this.props;
    return (
      <div className="Thumbnail">
        <img src={imageUrl} alt="thumb_news" />
      </div>
    );
  }
}

export default Thumbnail;
