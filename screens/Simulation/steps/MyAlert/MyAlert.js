import React from "react";
import { Alert } from "react-native";

const MyAlert = ({ onPress }) =>
  Alert.alert(
    "Incorrect date",
    "You cannot choose today or any date in the past.",
    [
      {
        text: "OK",
        onPress: () => onPress()
      }
    ],
    { cancelable: false }
  );

export default MyAlert;
