import React from "react";
import { View } from "react-native";

import messages from "./SimulationWarning.constants";
import styles from "./SimulationWarning.style";
import MyText from "../../../../components/MyText/MyText";

const SimulationWarning = () => (
  <View style={styles.cardWrapper}>
    <MyText isBold textStyle={styles.message}>
      {messages.simulationMessage}
    </MyText>
  </View>
);

export default SimulationWarning;
