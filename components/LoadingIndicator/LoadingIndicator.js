import React from "react";
import { View, Image, ScrollView } from "react-native";

import MyText from "../MyText/MyText";

import { WAITING_MESSAGE, TITLE } from "./LoadingIndicator.constants";

const LoadingIndicator = () => (
  <ScrollView>
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Image source={require("../../assets/gifs/tom.gif")} />
      <MyText isBold textStyle={{ fontSize: 20, margin: 20, marginBottom: 0 }}>
        {TITLE}
      </MyText>
      <MyText textStyle={{ padding: 20 }}>{WAITING_MESSAGE}</MyText>
    </View>
  </ScrollView>
);

export default LoadingIndicator;
