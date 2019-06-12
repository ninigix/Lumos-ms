import React from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import { RkText, RkCard } from "react-native-ui-kitten";

import MyText from "../../../../components/MyText/MyText";

import { LABELS, messages } from "./Card.constants";
import styles from "./Card.style";

const Card = ({ item, image, onClick, isAvailable }) => {
  const handleOnItemPressed = () => {
    onClick({ esp_id: item.id });
  };

  const translateLightStatus = lightStatus => {
    switch (lightStatus) {
      case 0: {
        return LABELS.OFF;
      }
      case 1: {
        return LABELS.ON;
      }
      default:
        return LABELS.ERROR;
    }
  };

  return (
    <RkCard rkType="credit" style={styles.card}>
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        disabled={isAvailable}
        onPress={handleOnItemPressed}
      >
        <ImageBackground
          source={{ uri: image }}
          style={{ borderRadius: 10 }}
          imageStyle={{ borderRadius: 10 }}
        >
          <View style={styles.cardWrapper}>
            <View rkCardHeader>
              <RkText rkType="header4 inverseColor" />
            </View>
            <View rkCardContent>
              <View>
                <MyText textStyle={styles.title}>{item.description}</MyText>
                <MyText textStyle={styles.text}>
                  {translateLightStatus(item.status)}
                </MyText>
              </View>
            </View>
            <View rkCardFooter>
              <MyText textStyle={styles.text}>{messages.title}</MyText>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </RkCard>
  );
};

export default Card;
