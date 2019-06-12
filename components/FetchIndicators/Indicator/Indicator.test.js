import renderer from "react-test-renderer";
import React from "react";

import Indicator from "./Indicator";

it("renders correctly", () => {
  const tree = renderer.create(<Indicator />).toJSON();
  expect(tree).toMatchSnapshot();
});
