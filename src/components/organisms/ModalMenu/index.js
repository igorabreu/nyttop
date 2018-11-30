import React, { Component } from "react";
import CloseIcon from "../../atoms/CloseIcon";
import "./style.scss";

class ModalMenu extends Component {
  render() {
    const { handleSection, closeModal } = this.props;
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
  }
}

export default ModalMenu;
