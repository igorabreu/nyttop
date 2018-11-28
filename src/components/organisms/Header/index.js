import React, { Component } from "react";
import NavBar from "../../molecules/NavBar";
import "./style.scss";

class Header extends Component {
  render() {
    const { handleSection } = this.props;
    return (
      <div className="Header">
        <NavBar handleSection={section => handleSection(section)} />
      </div>
    );
  }
}

export default Header;
