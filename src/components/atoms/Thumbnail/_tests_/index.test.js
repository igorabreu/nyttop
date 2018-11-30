import React from "react";
import ReactDOM from "react-dom";
import Thumbnail from "..";

it("Thumbnail component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Thumbnail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
