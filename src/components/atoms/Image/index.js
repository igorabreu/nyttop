import React, { Component } from "react";
import "./style.scss";

class Image extends Component {
  render() {
    const { imageUrl } = this.props;
    return (
      <div className="Image">
        <img src={imageUrl} alt="thumbnail" />
      </div>
    );
  }
}

export default Image;
