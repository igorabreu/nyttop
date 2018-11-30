import React from "react";
import ReactDOM from "react-dom";
import ArticleHeader from "..";

it("ArticleHeader component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ArticleHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
