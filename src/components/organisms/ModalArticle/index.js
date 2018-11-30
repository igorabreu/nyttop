import React, { Component } from "react";
import Article from "../../molecules/Article";
import CloseIcon from "../../atoms/CloseIcon";
import "./style.scss";

class ModalArticle extends Component {
  render() {
    const { content, closeModal } = this.props;
    return (
      <div className="ModalArticle">
        <div className="closeIcon">
          <CloseIcon fill={"#fff"} handleModalMenu={() => closeModal()} />
        </div>
        <Article content={content} closeModal={() => closeModal()} />
      </div>
    );
  }
}

export default ModalArticle;
