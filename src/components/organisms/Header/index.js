import React from "react";
import NavBar from "../../molecules/NavBar";
import PropTypes from "prop-types";
import "./style.scss";

const Header = ({ handleModalMenu, sectionTitle }) => {
  return (
    <div className="Header">
      <NavBar
        handleModalMenu={() => handleModalMenu()}
        sectionTitle={sectionTitle}
      />
    </div>
  );
};

Header.propTypes = {
  sectionTitle: PropTypes.string,
  handleModalMenu: PropTypes.func
};

export default Header;
