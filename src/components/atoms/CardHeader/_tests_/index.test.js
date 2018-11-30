import React from "react";
import ReactDOM from "react-dom";
import CardHeader from "..";

it("Cardheader component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CardHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
