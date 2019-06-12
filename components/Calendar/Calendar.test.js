import renderer from "react-test-renderer";
import React from "react";

import Calendar from "./Calendar";

it("renders correctly", () => {
  const tree = renderer.create(<Calendar />).toJSON();
  expect(tree).toMatchSnapshot();
});
