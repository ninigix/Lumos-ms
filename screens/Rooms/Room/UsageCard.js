import React from "react";
import { View } from "react-native";
import { RkStyleSheet } from "react-native-ui-kitten";
import MyText from "../../../components/MyText/MyText";

const UsageCard = ({ price, kwh, time_on }) => (
  <View style={styles.wrapper}>
    <View style={styles.priceWrapper}>
      <MyText textStyle={{ color: "white" }}> Total price</MyText>
      <MyText textStyle={{ color: "white", fontSize: 20 }} isBold>
        {price} PLN
      </MyText>
    </View>
    <View style={styles.detailsWrapper}>
      <MyText isBold textStyle={{ color: "white" }}>
        {kwh} kwh
      </MyText>
      <MyText isBold textStyle={{ color: "white" }}>
        {time_on}
      </MyText>
    </View>
  </View>
);

export default UsageCard;

const styles = RkStyleSheet.create(theme => ({
  wrapper: {
    backgroundColor: "#42a0d8",
    // backgroundColor: "#ffbf00",
    // backgroundColor: "#32936f",
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
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  }
}));
