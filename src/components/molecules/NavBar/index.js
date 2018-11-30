import React, { Component } from "react";
import SectionTitle from "../../atoms/SectionTitle";
import MenuIcon from "../../atoms/MenuIcon";
import "./style.scss";

class NavBar extends Component {
  render() {
    const { handleModalMenu, sectionTitle } = this.props;
    return (
      <div className="NavBar">
        <SectionTitle text={sectionTitle} />
        <MenuIcon fill={"#fff"} handleModalMenu={() => handleModalMenu()} />
      </div>
    );
  }
}

export default NavBar;
