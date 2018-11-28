import React, { Component } from "react";
import Article from "../../organisms/Article";
import "./style.scss";

class ModalArticle extends Component {
  render() {
    const { content, handleModal } = this.props;
    return (
      <div className="ModalArticle" onClick={() => handleModal()}>
        <Article content={content} />
      </div>
    );
  }
}

export default ModalArticle;
