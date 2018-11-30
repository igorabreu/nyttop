import React from "react";
import Article from "../../molecules/Article";
import PropTypes from "prop-types";
import "./style.scss";

const ModalArticle = ({ content, closeModal }) => {
  return (
    <div className="ModalArticle">
      <Article content={content} handleModalMenu={() => closeModal()} />
    </div>
  );
};

ModalArticle.propTypes = {
  content: PropTypes.object,
  closeModal: PropTypes.func
};

export default ModalArticle;
