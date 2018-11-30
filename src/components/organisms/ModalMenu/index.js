import React from "react";
import CloseIcon from "../../atoms/CloseIcon";
import PropTypes from "prop-types";
import "./style.scss";

const ModalMenu = ({ handleSection, closeModal }) => {
  return (
    <div className="ModalMenu">
      <div className="closeIcon">
        <CloseIcon fill={"#fff"} handleModalMenu={() => closeModal()} />
      </div>
      <ul className="menu">
        <li onClick={() => handleSection("science", "Ciência & Tecnologia")}>
          <span>Ciência & Tecnologia</span>
        </li>
        <li onClick={() => handleSection("health", "Saúde")}>
          <span>Saúde</span>
        </li>
        <li onClick={() => handleSection("politics", "Política")}>
          <span>Política</span>
        </li>
        <li onClick={() => handleSection("world", "Mundo")}>
          <span>Mundo</span>
        </li>
      </ul>
    </div>
  );
};

ModalMenu.propTypes = {
  handleSection: PropTypes.func,
  closeModal: PropTypes.func
};

export default ModalMenu;
