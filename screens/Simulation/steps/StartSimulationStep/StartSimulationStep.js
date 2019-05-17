import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

import MyText from "../../../../components/MyText/MyText";

import styles from "./StartSimulationStep.style";

const Card = ({
  title,
  description,
  isRealSimulation,
  isSimulationSelected,
  handleOnPress
}) => (
  <TouchableOpacity
    style={isRealSimulation ? styles.simple : styles.artificial}
    onPress={() => handleOnPress(!!isRealSimulation)}
  >
    <MyText isBold textStyle={styles.title}>
      {title}
    </MyText>
    <Text style={styles.text}>{description}</Text>
    <View style={styles.iconWrapper}>
      {isSimulationSelected && (
        <Image
          source={require("../../../../assets/icons/tick.png")}
          style={{ height: 30, width: 30 }}
        />
      )}
    </View>
  </TouchableOpacity>
);

const StartSimulationStep = ({ isRealSimulationSelected, onSelect }) => (
  <View style={styles.stepWrapper}>
    <MyText isBold textStyle={{ fontSize: 24, color: "#2274a5" }}>
      Choose simulation type
    </MyText>
    <View style={styles.cardsWrapper}>
      <View style={styles.card}>
        <Card
          description="When the simulation is running you can't switch light using Lumos app."
          title="Real"
          isRealSimulation
          isSimulationSelected={isRealSimulationSelected}
          handleOnPress={onSelect}
        />
      </View>
      <View style={styles.card}>
        <Card
          description="This simulation will be run on a doll house - you'll still be able to use Lumos app."
          title="Artificial"
          isSimulationSelected={!isRealSimulationSelected}
          handleOnPress={onSelect}
        />
      </View>
    </View>
  </View>
);

export default StartSimulationStep;
