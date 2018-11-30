import React from "react";
import ReactDOM from "react-dom";
import Article from "..";

it("Article component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Article />, div);
  ReactDOM.unmountComponentAtNode(div);
});
