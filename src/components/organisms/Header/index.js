import React, { Component } from "react";
import NavBar from "../../molecules/NavBar";
import "./style.scss";

class Header extends Component {
  render() {
    const { handleModalMenu, sectionTitle } = this.props;
    return (
      <div className="Header">
        <NavBar
          handleModalMenu={() => handleModalMenu()}
          sectionTitle={sectionTitle}
        />
      </div>
    );
  }
}

export default Header;
