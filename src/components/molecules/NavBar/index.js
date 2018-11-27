import React, { Component } from "react";
import "./style.scss";

class NavBar extends Component {
  render() {
    const { handleSelection } = this.props;
    return (
      <div className="NavBar">
        <ul>
          <li onClick={() => handleSelection("science")}>
            Ciência & Tecnologia
          </li>
          <li onClick={() => handleSelection("health")}>Saúde</li>
          <li onClick={() => handleSelection("politics")}>Política</li>
          <li onClick={() => handleSelection("world")}>Mundo</li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
