import React from "react";
import { View, TouchableOpacity } from "react-native";
import { RkStyleSheet } from "react-native-ui-kitten";
import MyText from "../../../components/MyText/MyText";

const Row = ({label, data}) => (
    <View style={styles.row}>
      <MyText textStyle={{ color: "white" }}>
        {label}
      </MyText>
      <MyText isBold textStyle={{ color: "white" }}>
        {data}
      </MyText>
    </View>
);

const UsageCard = ({ price, kwh, bulb_consumption, data }) => (
  <TouchableOpacity style={styles.wrapper}>
    <View style={styles.priceWrapper}>
      <MyText textStyle={{ color: "white", fontSize: 20 }} isBold>
        Data for {data ? data : "the last week"}
      </MyText>
      <MyText textStyle={{color: 'white'}}>Tap to change dates</MyText>
    </View>
    <View style={styles.detailsWrapper}>
      <Row label="Total price" data={`${price.toFixed(4)} PLN`}/>
      <Row label="Electric energy consumption" data={`${kwh.toFixed(4)} kwh`}/>
      <Row label="Bulb consumption" data={`${bulb_consumption.toFixed(2)} %`}/>
    </View>
  </TouchableOpacity>
);

export default UsageCard;

const styles = RkStyleSheet.create(theme => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-between'
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
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5
  }
}));
