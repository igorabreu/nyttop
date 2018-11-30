import React from "react";
import ReactDOM from "react-dom";
import NavBar from "..";

it("NavBar component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
