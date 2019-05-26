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
        onPress: () => console.log('was pressed')
      }
    ],
    { cancelable: true }
  );
  return <React.Fragment />;
};

export default MyAlert;
