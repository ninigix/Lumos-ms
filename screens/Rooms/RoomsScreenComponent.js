import React from "react";
import { View, Text } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import isempty from "lodash.isempty";
import { Dimensions } from "react-native";
import { RkStyleSheet } from "react-native-ui-kitten";

import Room from "./Room/Room";
import { messages, ROOMS_NAMES } from "./RoomsScreenConstants";

export default class RoomsScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightSwitches: []
    };
  }

  componentDidMount() {
    const { getSimulationStatus, getLightSwitches, getStatistics } = this.props;
    getSimulationStatus();
    getStatistics();
  }

  checkIfSimulationOn = () => {
    console.log("this.props.simulationStatus", this.props.simulationStatus);
    return this.props.simulationStatus === "on";
  };

  renderHeaderText = () =>
    this.checkIfSimulationOn() ? messages.simulationOn : messages.simulationOff;

  screenWidth = Dimensions.get("window").width;

  chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientTo: "#08130D",
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2 // optional, default 3
  };

  capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

  render() {
    const { lightSwitches, statistics } = this.props;

    return (
      <View style={styles.root}>
        {!isempty(statistics) && (
          <ProgressSteps
            activeStepIconBorderColor="#2274a5"
            completedProgressBarColor="#2274a5"
            activeLabelColor="#2274a5"
            activeStepNumColor="#2274a5"
            completedStepIconColor="#2274a5"
          >
            {Object.entries(statistics).map(([key, value]) => (
              <ProgressStep
                label={ROOMS_NAMES[key]}
                key={key}
                nextBtnText=">"
                previousBtnText="<"
                finishBtnText="Go back"
                nextBtnStyle={styles.nextBtnStyle}
                nextBtnTextStyle={styles.btnTextStyle}
                previousBtnStyle={Number(key) !== 1 && styles.prevBtnStyle}
                previousBtnTextStyle={styles.btnTextStyle}
              >
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                  <Room
                    isSimulationOn={this.checkIfSimulationOn()}
                    isLightOn={lightSwitches[key]}
                    key={key}
                    value={value}
                    onClick={this.props.switchLight}
                  />
                </View>
              </ProgressStep>
            ))}
          </ProgressSteps>
        )}
      </View>
    );
  }
}

{
  /*<View style={{ marginTop: 10, marginBottom: 10 }}>*/
}
{
  /*  <RkCard rkType="shadowed">*/
}
{
  /*    <MyText>Some title</MyText>*/
}
{
  /*    <PieChart*/
}
{
  /*        data={this.data}*/
}
{
  /*        width={this.screenWidth}*/
}
{
  /*        height={220}*/
}
{
  /*        chartConfig={this.chartConfig}*/
}
{
  /*        accessor="population"*/
}
{
  /*        backgroundColor="transparent"*/
}
{
  /*        paddingLeft="15"*/
}
{
  /*        absolute*/
}
{
  /*    />*/
}
{
  /*  </RkCard>*/
}
{
  /*</View>*/
}

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
