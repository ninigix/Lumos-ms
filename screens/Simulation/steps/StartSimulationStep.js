import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Text
} from "react-native";
import MyText from "../../../components/MyText/MyText";

const width = Dimensions.get("window").width;

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
          source={require("../../../assets/icons/tick.png")}
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

export const styles = StyleSheet.create({
  cardsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  stepWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10
  },
  title: {
    fontSize: 18,
    color: "white",
    paddingBottom: 10,
    flex: 1,
    textAlign: "center"
  },
  text: {
    color: "white",
    flex: 5,
    padding: 10,
    textAlign: "center",
    fontFamily: "raleway-regular",
    fontSize: 16
  },
  card: {
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 20,
    maxWidth: width / 2.3
  },
  simple: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#FFBF00",
    backgroundColor: "#ffd044",
    height: 250,
    padding: 10
  },
  artificial: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#2274a5",
    backgroundColor: "#42a0d8",
    height: 250,
    padding: 10
  },
  iconWrapper: {
    flex: 2,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 4,
    margin: 10,
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
