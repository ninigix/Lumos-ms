import React from "react";
import { View, Text } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import isempty from "lodash.isempty";
import { RkStyleSheet } from "react-native-ui-kitten";
import moment from "moment";

import Room from "./Components/Room";
import { messages, ROOMS_NAMES } from "./RoomsScreenConstants";
import { FAILURE, REQUEST, SUCCESS } from "../../actions/helpers";
import SimulationComponent from "../../components/SimulationComponent/SimulationComponent";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import MyModal from "./Components/Modal";
import Calendar from "../../components/Calendar/Calendar";
import MyAlert from "../Simulation/steps/MyAlert";

export default class RoomsScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightSwitches: [],
      shouldShowCalendar: false,
      startingDay: null,
      endingDay: null
    };
  }

  componentDidMount() {
    // const { getSimulationStatus, getLightSwitches, getStatistics } = this.props;
    const { getStatistics } = this.props;
    // getSimulationStatus();
    getStatistics();
  }

  checkIfSimulationOn = () => {
    console.log("this.props.simulationStatus", this.props.simulationStatus);
    return false;
    // return this.props.simulationStatus === "on";
  };

  handleOnChangeDatesClick = dates =>
    this.setState({
      shouldShowCalendar: true
    });

  handleCloseEmptyModal = () =>
    this.setState({
      shouldShowCalendar: false,
      startingDay: null,
      endingDay: null
    });

  setEndingDay = date => {
    if (this.state.endingDay) {
      this.setState({ startingDay: date.dateString });
      this.setState({ endingDay: null });
    } else {
      this.setState({ endingDay: date.dateString });
    }
  };

  handleOnDateSelect = date => {
    const today = new moment();
    const isToday = date.dateString === today.format("YYYY-MM-DD");
    const isInThePast = date.timestamp < today.valueOf();

    if (isToday || isInThePast) {
      return <MyAlert onPress={this.clearState} />;
    }

    if (this.state.startingDay) {
      this.setEndingDay(date);
    } else {
      this.setState({});
      this.setState({ startingDay: date.dateString });
    }
  };

  handleDatesConfirmClick = () => {
    this.setState({
      shouldShowCalendar: false,
    });
  };

  renderHeaderText = () =>
    this.checkIfSimulationOn() ? messages.simulationOn : messages.simulationOff;

  renderProgressStep = () => (
    <ProgressSteps
      activeStepIconBorderColor="#2274a5"
      completedProgressBarColor="#2274a5"
      activeLabelColor="#2274a5"
      activeStepNumColor="#2274a5"
      completedStepIconColor="#2274a5"
    >
      {Object.entries(this.props.statistics).map(([key, value]) => (
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
              // isSimulationOn={this.checkIfSimulationOn()}
              // isLightOn={lightSwitches[key]}
              key={key}
              value={value}
              onClick={this.props.switchLight}
              onChangeDatesClick={this.handleOnChangeDatesClick}
            />
          </View>
        </ProgressStep>
      ))}
    </ProgressSteps>
  );

  renderContent = () => {
    switch (this.props.statisticsState) {
      case SUCCESS: {
        return this.state.shouldShowCalendar ? (
          <MyModal
            onCloseModal={this.handleCloseEmptyModal}
            areDatesSelected={this.state.endingDay && this.state.startingDay}
            onDatesConfirmClick={this.handleDatesConfirmClick}
            content={
              <Calendar
                startDate={this.state.startingDay}
                endDate={this.state.endingDay}
                onDateSelect={this.handleOnDateSelect}
              />
            }
          />
        ) : (
          this.renderProgressStep()
        );
      }

      case FAILURE: {
        return <Text>failure</Text>;
      }

      case REQUEST: {
        return <LoadingIndicator />;
      }

      default:
        return <Text>empty</Text>;
    }
  };

  render() {
    return <View style={styles.root}>{this.renderContent()}</View>;
  }
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
