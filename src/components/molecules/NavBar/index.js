import React from "react";
import SectionTitle from "../../atoms/SectionTitle";
import MenuIcon from "../../atoms/MenuIcon";
import PropTypes from "prop-types";
import "./style.scss";

const NavBar = ({ handleModalMenu, sectionTitle }) => (
  <div className="NavBar">
    <SectionTitle text={sectionTitle} />
    <MenuIcon fill={"#fff"} handleModalMenu={() => handleModalMenu()} />
  </div>
);

NavBar.propTypes = {
  sectionTitle: PropTypes.string,
  handleModalMenu: PropTypes.func
};

NavBar.defaultProps = {
  sectionTitle: "Política"
};

export default NavBar;
