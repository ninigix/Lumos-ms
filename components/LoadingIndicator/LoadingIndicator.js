import React from "react";
import { View, Image, ScrollView } from "react-native";
import MyText from "../MyText/MyText";

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
        Wait a sec!
      </MyText>
      <MyText textStyle={{ padding: 20 }}>
        We know it's taking a while. There is a lot of data to process. But it's
        worth the wait, we promise! Please, grab a cup of coffee and watch our
        awesome gif while waiting.
      </MyText>
    </View>
  </ScrollView>
);

export default LoadingIndicator;
