import { RkStyleSheet } from "react-native-ui-kitten";

export default RkStyleSheet.create(theme => ({
  cardWrapper: {
    backgroundColor: "#ffbf00",
    display: "flex",
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    padding: 20,
    marginBottom: 20
  },
  message: { fontSize: 16, color: "white", textAlign: "center" }
}));
