import React from "react";
import ReactDOM from "react-dom";
import Image from "..";

it("Image component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Image />, div);
  ReactDOM.unmountComponentAtNode(div);
});
