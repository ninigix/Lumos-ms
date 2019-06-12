import { RkStyleSheet } from "react-native-ui-kitten";

export default RkStyleSheet.create(theme => ({
  row: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "space-between"
  },
  wrapper: {
    backgroundColor: "#42a0d8",
    height: 150,
    display: "flex",
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  priceWrapper: {
    flex: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "white",
    borderBottomWidth: 1
  },
  detailsWrapper: {
    flex: 3,
    display: "flex",
    justifyContent: "space-around",
    marginTop: 5,
    marginBottom: 5
  }
}));
