import React from "react";
import { StyleSheet, View } from "react-native";

const CardChoice = ({ leftComponent, rightComponent }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.leftWrapper}>{leftComponent}</View>
      <View style={styles.rightWrapper}>{rightComponent}</View>
    </View>
  );
};

export default CardChoice;

const styles = StyleSheet.create({
  leftWrapper: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  rightWrapper: {
    flex: 1,
    display: "flex",
    minWidth: "15%"
  },
  wrapper: {
    display: "flex",
    height: 70,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    flexDirection: "row",
    margin: 15,
  }
});
