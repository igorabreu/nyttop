import React from "react";
import ReactDOM from "react-dom";
import ModalMenu from "..";

it("ModalMenu component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ModalMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
