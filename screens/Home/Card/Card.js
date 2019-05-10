import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { RkCard } from "react-native-ui-kitten";

import MyText from "../../../components/MyText/MyText";

export default (Card = ({ image, title, text }) => (
  <View style={styles.listWrapper}>
    <RkCard rkType="shadowed">
      <Image rkCardImg source={{ uri: image }} />
      <View rkCardHeader>
        <Text style={styles.subtitle}>{title}</Text>
      </View>
      <View rkCardContent>
        <MyText>{text}</MyText>
      </View>
    </RkCard>
  </View>
));

const styles = StyleSheet.create({
  listWrapper: {
    padding: "5%"
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#3B3B39",
    fontFamily: "raleway-regular"
  }
});
