import React from "react";
import { ScrollView, Text, View, Image } from "react-native";

import Card from "./Card/Card";
import { cardsImages } from "../../constants/Links";
import { messages } from "./HomeScreenConstants";

import styles from "./HomeScreen.style";

export default class HomeScreen extends React.Component {
  mapCards = () =>
    cardsImages.map((currentImage, index) => (
      <Card
        title={messages.cards[index].title}
        text={messages.cards[index].text}
        index={index}
        key={`${index}__${currentImage.source}`}
      />
    ));

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.fullScreen}>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../../assets/images/lightbulb_other.png")}
              style={{ resizeMode: "center" }}
            />
            <Text style={styles.title}>{messages.title}</Text>
          </View>
        </View>
        {this.mapCards()}
      </ScrollView>
    );
  }
}
