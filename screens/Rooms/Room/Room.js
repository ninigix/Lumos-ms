import React from "react";
import { RkButton, RkStyleSheet } from "react-native-ui-kitten";
import { View } from "react-native";

const SWITCH_ON = "Switch light on";
const SWITCH_OFF = "Switch_light_off";

const Room = ({ isSimulationOn, item, onClick }) => (
  <View style={styles.root}>
    <RkButton
      onPress={onClick}
      rkType={!isSimulationOn && "outline"}
      style={styles.button}
      contentStyle={
        isSimulationOn ? styles.outlinedButtonContent : styles.buttonContent
      }
    >
      {isSimulationOn ? SWITCH_OFF : SWITCH_ON}
    </RkButton>
  </View>
);

export default Room;

const styles = RkStyleSheet.create(theme => ({
  root: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    borderColor: "#2274a5",
    width: "100%",
    marginTop: 5,
    marginBottom: 15
  },
  buttonContent: {
    color: "#2274a5",
    fontSize: 18,
    fontFamily: "raleway-bold"
  },
  outlinedButtonContent: {
    fontSize: 18,
    fontFamily: "raleway-bold",
    color: "white"
  }
}));
