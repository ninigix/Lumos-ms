import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

import MyText from "../../../../components/MyText/MyText";

import messages, { AVAILABLE_SPEEDS } from "./StartSimulationStep.constants";
import styles from "./StartSimulationStep.style";

class StartSimulationStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSpeed: AVAILABLE_SPEEDS[0]
    };
  }

  handleSelectSpeed = speed => this.setState({ selectedSpeed: speed });

  render() {
    const { isRealSimulationSelected, onSelect } = this.props;
    return (
      <View style={styles.stepWrapper}>
        <MyText isBold textStyle={{ fontSize: 24, color: "#2274a5" }}>
          {messages.header}
        </MyText>
        <View style={styles.cardsWrapper}>
          <View style={styles.card}>
            <Card
              description={messages.real.description}
              title={messages.real.title}
              isRealSimulation
              isSimulationSelected={isRealSimulationSelected}
              handleOnPress={() => onSelect(true)}
            />
          </View>
          <View style={styles.card}>
            <Card
              description={messages.artificial.description}
              title={messages.artificial.title}
              isSimulationSelected={!isRealSimulationSelected}
              handleOnPress={() => onSelect(false, this.state.selectedSpeed)}
            />
          </View>
        </View>
        {!isRealSimulationSelected && (
          <SimulationSpeed
            onSelect={this.handleSelectSpeed}
            selectedSpeed={this.state.selectedSpeed}
          />
        )}
      </View>
    );
  }
}

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

const SimulationSpeed = ({ onSelect, selectedSpeed }) => (
  <View style={styles.choiceGroupWrapper}>
    <MyText isBold textStyle={styles.choiceTitle}>
      {messages.choiceTitle}
    </MyText>
    {AVAILABLE_SPEEDS.map((speed, index) => (
      <TouchableOpacity
        key={`${index}__${speed}`}
        onPress={() => onSelect(speed)}
      >
        <MyText
          textStyle={{
            ...styles.choiceLabel,
            color: speed === selectedSpeed ? "#2274a5" : "grey"
          }}
        >
          {speed}
        </MyText>
      </TouchableOpacity>
    ))}
  </View>
);

export default StartSimulationStep;
