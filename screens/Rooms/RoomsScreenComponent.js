import React from "react";
import { View, Text } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import isempty from "lodash.isempty";
import { Dimensions } from 'react-native';

import { RkText, RkCard } from "react-native-ui-kitten";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

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


  data = [
    { name: 'Seoul', population: 215, color: '#FFBF00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Toronto', population: 280, color: '#E83F6F', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Beijing', population: 527, color: '#2274A5', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'New York', population: 853, color: '#32936F', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Moscow', population: 119, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
  ];

  screenWidth = Dimensions.get('window').width

  chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2 // optional, default 3
  };

  capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

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
                label={this.capitalize(item.description.toLowerCase())}
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
                  <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <RkCard rkType="shadowed">
                      <MyText>Some title</MyText>
                    <PieChart
                        data={this.data}
                        width={this.screenWidth}
                        height={220}
                        chartConfig={this.chartConfig}
                        accessor="population"
                        backgroundColor="transparent"
                        paddingLeft="15"
                        absolute
                    />
                    </RkCard>
                  </View>
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
import MyText from "../../components/MyText/MyText";

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
