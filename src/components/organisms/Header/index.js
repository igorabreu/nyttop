import React, { Component } from "react";
import NavBar from "../../molecules/NavBar";
import "./style.scss";

class Header extends Component {
  render() {
    const { handleSelection } = this.props;
    return (
      <div className="Header">
        <NavBar handleSelection={type => handleSelection(type)} />
      </div>
    );
  }
}

export default Header;
