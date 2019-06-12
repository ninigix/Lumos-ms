import { RkStyleSheet } from "react-native-ui-kitten";

export default RkStyleSheet.create(theme => ({
  title: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    color: "#2274A5"
  },
  root: {
    flex: 1,
    justifyContent: "center"
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#EBEBE4"
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
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
}));
