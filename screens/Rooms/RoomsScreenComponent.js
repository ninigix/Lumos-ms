import React from "react";
import { View, Text } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import isempty from "lodash.isempty";
import { PieChart } from "react-native-svg-charts";
import { RkText, RkCard } from "react-native-ui-kitten";

import { roomImages } from "../../constants/Links";
import Card from "./Card/Card";
import Room from "./Room/Room";
import { messages } from "./RoomsScreenConstants";

export default class RoomsScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightSwitches: []
    };
  }

  componentDidMount() {
    const { getSimulationStatus, getLightSwitches } = this.props;
    getLightSwitches();
    getSimulationStatus();
  }

  checkIfSimulationOn = () => {
    console.log("this.props.simulationStatus", this.props.simulationStatus);
    return this.props.simulationStatus === "on";
  };

  renderHeaderText = () =>
    this.checkIfSimulationOn() ? messages.simulationOn : messages.simulationOff;

  data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  randomColor = () =>
    ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(
      0,
      7
    );

  pieData = this.data
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: this.randomColor(),
        onPress: () => console.log("press", index)
      },
      key: `pie-${index}`
    }));

  getIndex = (currentIndex, shouldIncrement) =>
    shouldIncrement ? currentIndex + 1 : currentIndex - 1;

  render() {
    const { lightSwitches } = this.props;

    return (
      <View style={styles.root}>
        {!isempty(lightSwitches) && (
          <ProgressSteps
            activeStepIconBorderColor="#2274a5"
            completedProgressBarColor="#2274a5"
            activeLabelColor="#2274a5"
            activeStepNumColor="#2274a5"
            completedStepIconColor="#2274a5"
          >
            {lightSwitches.map((item, index) => (
              <ProgressStep
                label={item.description}
                key={`${item.id}_${item.status}`}
                nextBtnText=">"
                previousBtnText="<"
                finishBtnText="Go back"
                nextBtnStyle={styles.nextBtnStyle}
                nextBtnTextStyle={styles.btnTextStyle}
                previousBtnStyle={index !== 0 && styles.prevBtnStyle}
                previousBtnTextStyle={styles.btnTextStyle}
              >
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                  <Room
                    isSimulationOn={this.checkIfSimulationOn()}
                    item={item}
                    onClick={this.props.switchLight}
                  />
                  <RkCard>
                    <PieChart style={{ height: 200 }} data={this.pieData} />
                  </RkCard>
                  <RkCard>
                    <PieChart style={{ height: 200 }} data={this.pieData} />
                  </RkCard>
                  <RkCard>
                    <PieChart style={{ height: 200 }} data={this.pieData} />
                  </RkCard>
                </View>
              </ProgressStep>
            ))}
          </ProgressSteps>
        )}
      </View>
    );
  }
}

import { RkStyleSheet } from "react-native-ui-kitten";

const styles = RkStyleSheet.create(theme => ({
  root: {
    flex: 1,
    justifyContent: "center"
  },
  nextBtnStyle: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2274a5",
    borderRadius: 8,
    marginRight: -50,
    marginBottom: -30
  },
  prevBtnStyle: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2274a5",
    borderRadius: 8,
    marginLeft: -50,
    marginBottom: -30
  },
  btnTextStyle: {
    color: "#2274a5",
    fontFamily: "raleway-bold",
    textAlign: "center",
    padding: 8,
    fontSize: 18
  }
}));
