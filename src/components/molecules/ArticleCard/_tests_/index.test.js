import React from "react";
import ReactDOM from "react-dom";
import ArticleCard from "..";

it("ArticleCard component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ArticleCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
