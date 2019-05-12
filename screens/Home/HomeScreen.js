import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View, Image} from "react-native";
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
          <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require("../../assets/images/lightbulb_other.png")} style={{resizeMode: "center"}}/>
            <Text style={styles.title}>{messages.title}</Text>

          </View>
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
    fontSize: 145,
    color: "#2274a5",
    fontFamily: "arkipelago",
    marginTop: -70
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
