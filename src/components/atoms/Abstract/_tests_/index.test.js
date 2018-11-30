import React from "react";
import ReactDOM from "react-dom";
import Abstract from "..";

it("Abstract component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Abstract />, div);
  ReactDOM.unmountComponentAtNode(div);
});
