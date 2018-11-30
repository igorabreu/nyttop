import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const MenuIcon = ({ fill, handleModalMenu }) => (
  <svg
    width="24"
    height="24"
    fillRule="evenodd"
    clipRule="evenodd"
    fill={fill}
    className="MenuIcon"
    onClick={() => handleModalMenu()}
  >
    <path
      d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
      fill={fill}
    />
    <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
  </svg>
);

MenuIcon.propTypes = {
  fill: PropTypes.string,
  handleModalMenu: PropTypes.func
};

MenuIcon.defaultProps = {
  fill: "#fff"
};

export default MenuIcon;
