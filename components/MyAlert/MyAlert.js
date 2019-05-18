import React from "react";
import { Alert } from "react-native";

import messages from "./MyAlert.constants";

const MyAlert = ({ onPress }) => {
  Alert.alert(
    `${messages.title}`,
    `${messages.message}`,
    [
      {
        text: `${messages.buttonText}`,
        onPress: () => onPress()
      }
    ],
    { cancelable: false }
  );
  return <React.Fragment />;
};

export default MyAlert;