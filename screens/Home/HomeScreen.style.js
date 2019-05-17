import { Dimensions, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  title: {
    fontSize: 145,
    color: "#2274a5",
    fontFamily: "arkipelago",
    marginTop: -(deviceHeight / 7.5)
  },
  scrollView: {
    flex: 1,
    flexDirection: "column"
  },
  fullScreen: {
    width: deviceWidth,
    height: deviceHeight,
    flexDirection: "column"
  }
});
