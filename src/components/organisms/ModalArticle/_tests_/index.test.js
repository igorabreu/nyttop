import React from "react";
import ReactDOM from "react-dom";
import ModalArticle from "..";

it("ModalArticle component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ModalArticle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
