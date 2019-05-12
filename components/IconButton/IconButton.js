import React from "react";
import { Image, StyleSheet, View } from "react-native";

const IconButton = ({ type, backgroundColor, wasSelected }) => {
  const helper = {
    clock: require("../../assets/icons/time.png"),
    kitchen: require("../../assets/icons/kitchen.png"),
    bathroom: require("../../assets/icons/bathroom.png"),
    hall: require("../../assets/icons/hall.png"),
    bedroom1: require("../../assets/icons/bedroom.png"),
    bedroom2: require("../../assets/icons/bedroom.png"),
    lightbulb: require("../../assets/icons/lightbulb.png")
  };

  return (
    <View
      style={{
        ...styles.iconButton,
        backgroundColor: wasSelected ? "#ffbf00" : "#EBEBE4"
      }}
    >
      <Image style={styles.icon} source={helper[type]} />
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconButton: {
    height: 40,
    width: 40,
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  icon: {
    width: 30,
    height: 30
  }
});
