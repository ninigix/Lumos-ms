import renderer from "react-test-renderer";
import React from "react";

import CardChoice from "./CardChoice";

it("renders correctly", () => {
  const tree = renderer.create(<CardChoice />).toJSON();
  expect(tree).toMatchSnapshot();
});
