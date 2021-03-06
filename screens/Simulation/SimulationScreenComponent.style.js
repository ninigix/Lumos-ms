import { Dimensions, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  dateComponentGrey: {
    flex: 1,
    backgroundColor: "#EBEBE4",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  calendarComponentWrapper: {
    alignItems: "center",
    width: deviceWidth,
    height: deviceHeight,
    flexDirection: "column"
  },
  dateComponentHour: {
    flex: 5,
    padding: 15
  },
  dateComponentWrapper: {
    display: "flex",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    flexDirection: "row",
    margin: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16
  },
  nextBtnStyle: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2274a5",
    borderRadius: 8,
    marginRight: -50,
    marginBottom: -30
  },
  disabledNextBtnStyle: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#EBEBE4",
    borderRadius: 8,
    marginRight: -50,
    marginBottom: -30
  },
  prevBtnStyle: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2274a5",
    borderRadius: 8,
    marginLeft: -50,
    marginBottom: -30
  },
  btnTextStyle: {
    color: "#2274a5",
    fontFamily: "raleway-bold",
    textAlign: "center",
    padding: 8,
    fontSize: 18
  },
  fancyFont: {
    fontSize: 50,
    color: "#ffbf00",
    textAlign: "center",
    padding: 20
  },
  message: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: "55%",
    color: "#2274a5",
    textAlign: "center",
    fontSize: 22,
    lineHeight: 30
  },
  screenOverlay: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    display: "flex",
    position: "absolute",
    zIndex: 100,
    backgroundColor: "rgba(214, 215, 218, 0.8)",
    minHeight: 600
  }
});
