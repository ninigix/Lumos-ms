import React from "react";
import { View, TouchableOpacity } from "react-native";
import MyText from "../../../../components/MyText/MyText";

import messages, { LABELS } from "./UsageCard.constants";
import styles from "./UsageCard.style";

const Row = ({ label, data }) => (
  <View style={styles.row}>
    <MyText textStyle={{ color: "white" }}>{label}</MyText>
    <MyText isBold textStyle={{ color: "white" }}>
      {data}
    </MyText>
  </View>
);

const UsageCard = ({
  price,
  kwh,
  bulb_consumption,
  data,
  onChangeDatesClick
}) => (
  <TouchableOpacity style={styles.wrapper} onPress={onChangeDatesClick}>
    <View style={styles.priceWrapper}>
      <MyText textStyle={{ color: "white", fontSize: 20 }} isBold>
        {messages.data_label} {data ? data : "20th March"}
      </MyText>
      <MyText textStyle={{ color: "white" }}>{messages.cta}</MyText>
    </View>
    <View style={styles.detailsWrapper}>
      <Row label={LABELS.PRICE} data={`${price.toFixed(4)} PLN`} />
      <Row label={LABELS.ENERGY_CONSUMPTION} data={`${kwh.toFixed(4)} kwh`} />
      <Row
        label={LABELS.BULB_CONSUMPTION}
        data={`${bulb_consumption.toFixed(2)} %`}
      />
    </View>
  </TouchableOpacity>
);

export default UsageCard;
