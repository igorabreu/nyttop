import React from "react";
import ReactDOM from "react-dom";
import CloseIcon from "..";

it("CloseIcon component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CloseIcon />, div);
  ReactDOM.unmountComponentAtNode(div);
});
