import React, { Component } from "react";
import Thumbnail from "../../atoms/Thumbnail";
import "./style.scss";

class NavBar extends Component {
  render() {
    const { imageUrl } = this.props;
    return (
      <div className="Thumnail">
        <img src={imageUrl} alt="thumbnews" />
      </div>
    );
  }
}

export default NavBar;
