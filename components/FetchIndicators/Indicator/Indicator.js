import React from "react";
import { View, Image, ScrollView } from "react-native";
import MyText from "../../MyText/MyText";

import styles from "./Indicator.style";

const image = {
  REQUEST: require("../../../assets/gifs/tom.gif"),
  FAILURE: require("../../../assets/icons/danger.png"),
  DEFAULT: require("../../../assets/icons/information.png")
};

const Indicator = ({ title, message, type }) => (
  <ScrollView>
    <View style={styles.imageWrapper}>
      <Image source={image[type]} />
      <MyText isBold textStyle={styles.header}>
        {title}
      </MyText>
      <MyText textStyle={{ padding: 20 }}>{message}</MyText>
    </View>
  </ScrollView>
);

export default Indicator;
