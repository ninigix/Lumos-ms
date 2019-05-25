import React from "react";
import { ScrollView, Text, View, Image } from "react-native";

import Card from "./Card/Card";
import { messages } from "./HomeScreen.constants";

import styles from "./HomeScreen.style";

export default class HomeScreen extends React.Component {
  mapCards = () =>
    messages.cards.map((message, index) => (
      <Card
        title={message.title}
        text={message.text}
        index={index}
        key={`${index}__${message.title}`}
      />
    ));

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.fullScreen}>
          <View style={styles.imageWrapper}>
            <Image
              source={require("../../assets/images/home_lightbulb.png")}
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
