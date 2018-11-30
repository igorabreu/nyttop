import React from "react";
import ReactDOM from "react-dom";
import SectionTitle from "..";

it("SectionTitle component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SectionTitle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
