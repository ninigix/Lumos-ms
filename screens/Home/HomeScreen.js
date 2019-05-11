import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";

import Card from "./Card/Card";
import { cardsImages } from "../../constants/Links";
import { messages } from "./HomeScreenConstants";

export default class HomeScreen extends React.Component {
  mapCards = () =>
    cardsImages.map((currentImage, index) => (
      <Card
        title={messages.cards[index].title}
        text={messages.cards[index].text}
        image={currentImage.source}
        key={`${index}__${currentImage.source}`}
      />
    ));

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.fullScreen}>
          <FullWidthImage
            source={require("../../assets/images/bulb-wire.jpg")}
            width={1000}
            height={1200}
          />
          <Text style={styles.title}>{messages.title}</Text>
        </View>
        {this.mapCards()}
      </ScrollView>
    );
  }
}

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  title: {
    fontSize: 100,
    color: "#2274a5",
    fontFamily: "arkipelago",
    textAlign: "center"
  },
  scrollView: {
    flex: 1,
    flexDirection: "column"
  },
  fullScreen: {
    width: deviceWidth,
    height: deviceHeight,
    flexDirection: "column"
  }
});
