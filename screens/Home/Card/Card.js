import React from "react";
import { Text, View, Image } from "react-native";
import { RkCard } from "react-native-ui-kitten";

import MyText from "../../../components/MyText/MyText";

import styles from "./Card.style";

const IMAGES = [
  require("../../../assets/images/home_light.png"),
  require("../../../assets/images/home_calendar.png"),
  require("../../../assets/images/home_future.png")
];

export default (Card = ({ index, title, text }) => (
  <View style={styles.listWrapper}>
    <RkCard rkType="shadowed">
      <Image rkCardImg source={IMAGES[index]} />
      <View rkCardHeader>
        <Text style={styles.subtitle}>{title}</Text>
      </View>
      <View rkCardContent>
        <MyText>{text}</MyText>
      </View>
    </RkCard>
  </View>
));
