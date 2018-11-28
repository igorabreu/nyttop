import React, { Component } from "react";
import "./style.scss";

class ModalMenu extends Component {
  render() {
    const { handleSection } = this.props;
    return (
      <div className="ModalMenu">
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
