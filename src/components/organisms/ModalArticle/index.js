import React, { Component } from "react";
import Article from "../../molecules/Article";
import "./style.scss";

class ModalArticle extends Component {
  render() {
    const { content, closeModal } = this.props;
    return (
      <div className="ModalArticle">
        <Article content={content} closeModal={() => closeModal()} />
      </div>
    );
  }
}

export default ModalArticle;
