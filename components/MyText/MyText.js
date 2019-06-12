import React from "react";
import { Text } from "react-native";

const MyText = ({ textStyle, isBold, children }) => (
  <Text
    style={{
      fontFamily: isBold ? "raleway-bold" : "raleway-light",
      fontSize: 16,
      ...textStyle
    }}
  >
    {children}
  </Text>
);

export default MyText;
