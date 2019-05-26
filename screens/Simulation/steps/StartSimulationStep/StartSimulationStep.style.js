import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

export default StyleSheet.create({
  cardsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  stepWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10
  },
  title: {
    fontSize: 18,
    color: "white",
    paddingBottom: 10,
    flex: 1,
    textAlign: "center"
  },
  text: {
    color: "white",
    flex: 5,
    padding: 10,
    textAlign: "center",
    fontFamily: "raleway-regular",
    fontSize: 16
  },
  card: {
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 20,
    maxWidth: width / 2.3
  },
  simple: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#FFBF00",
    backgroundColor: "#ffd044",
    height: 250,
    padding: 10
  },
  artificial: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#2274a5",
    backgroundColor: "#42a0d8",
    height: 250,
    padding: 10
  },
  iconWrapper: {
    flex: 2,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 4,
    margin: 10,
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  choiceGroupWrapper: {
    borderWidth: 1,
    borderColor: "#2274a5",
    borderRadius: 4,
    padding: 20,
    width: "100%",
    marginTop: 20
  },
  choiceTitle: {
    fontSize: 16,
    marginBottom: 10,
    color: "#2274a5"
  },
  choiceLabel: {
    fontSize: 16,
    marginBottom: 5
  }
});
