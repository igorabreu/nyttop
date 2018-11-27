import React, { Component } from "react";
import Header from "../../organisms/Header";
import Feed from "../../organisms/Feed";
import "./style.scss";

class Articles extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Feed />
      </div>
    );
  }
}

export default Articles;
