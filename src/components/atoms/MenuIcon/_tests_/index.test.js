import React from "react";
import ReactDOM from "react-dom";
import MenuIcon from "..";

it("MenuIcon component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MenuIcon />, div);
  ReactDOM.unmountComponentAtNode(div);
});
