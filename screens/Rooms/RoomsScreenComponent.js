import React from "react";
import { View, Text } from "react-native";
import { ProgressStep } from "react-native-progress-steps";

import Room from "./Components/Room/Room";
import { messages, ROOMS_NAMES } from "./RoomsScreen.constants";
import { FAILURE, REQUEST, SUCCESS } from "../../actions/helpers";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import MyModal from "./Components/Modal/Modal";
import Calendar from "../../components/Calendar/Calendar";

import styles from "./RoomsScreenComponent.style";
import MyProgressSteps from "./MyProgressSteps";

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

  clearState = () => {
    this.setState({
      endingDay: null,
      startingDay: null
    });
  };

  handleToggleCalendar = () =>
    this.setState({
      shouldShowCalendar: !this.state.shouldShowCalendar
    });

  handleCloseEmptyModal = () => {
    this.handleToggleCalendar();
    this.clearState();
  };

  handleSetEndingDay = date => {
    if (this.state.endingDay) {
      this.setState({ startingDay: date.dateString, endingDay: null });
    } else {
      this.setState({ endingDay: date.dateString });
    }
  };

  handleSetStartingDay = date =>
    this.setState({ startingDay: date.dateString });

  renderHeaderText = () =>
    this.checkIfSimulationOn() ? messages.simulationOn : messages.simulationOff;

  renderProgressStep = () => (
    <MyProgressSteps>
      {Object.entries(this.props.statistics).map(([key, value]) => (
        <ProgressStep
          label={ROOMS_NAMES[key]}
          key={key}
          nextBtnText=">"
          previousBtnText="<"
          finishBtnText={messages.goBack}
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
              onChangeDatesClick={this.handleToggleCalendar}
            />
          </View>
        </ProgressStep>
      ))}
    </MyProgressSteps>
  );

  renderModal = () => (
    <MyModal
      onCloseModal={this.handleCloseEmptyModal}
      areDatesSelected={this.state.endingDay && this.state.startingDay}
      onDatesConfirmClick={this.handleToggleCalendar()}
    >
      <Calendar
        startDate={this.state.startingDay}
        endDate={this.state.endingDay}
        onClearState={this.clearState}
        onSetEndingDate={this.handleSetEndingDay}
        onSetStartingDate={this.handleSetStartingDay}
      />
    </MyModal>
  );

  renderContent = () => {
    switch (this.props.statisticsState) {
      case SUCCESS: {
        return this.state.shouldShowCalendar
          ? this.renderModal()
          : this.renderProgressStep();
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
