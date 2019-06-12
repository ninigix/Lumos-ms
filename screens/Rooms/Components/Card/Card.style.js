import { RkStyleSheet } from "react-native-ui-kitten";

export default (styles = RkStyleSheet.create(theme => ({
  cardWrapper: {
    width: "50%",
    marginLeft: "auto"
  },
  title: {
    fontSize: 20,
    color: "pink",
    fontFamily: "raleway-bold"
  },
  text: {
    color: "pink",
    fontFamily: "raleway-regular"
  },
  root: {
    backgroundColor: theme.colors.screen.base
  },
  list: {
    marginHorizontal: 16
  },
  card: {
    marginVertical: 8,
    borderColor: "white"
  }
})));
