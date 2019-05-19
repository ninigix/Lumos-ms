import React from "react";
import { View, Text } from "react-native";
import { ProgressStep } from "react-native-progress-steps";

import Room from "./Components/Room/Room";
import { messages, ROOMS_NAMES } from "./RoomsScreen.constants";
import {FAILURE, REQUEST, SIMULATION_ON, SUCCESS} from "../../actions/helpers";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import MyModal from "./Components/Modal/Modal";
import Calendar from "../../components/Calendar/Calendar";
import MyAlert from "../../components/MyAlert/MyAlert";

import styles from "./RoomsScreenComponent.style";
import MyProgressSteps from "./MyProgressSteps";
import MyText from "../../components/MyText/MyText";

export default class RoomsScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightSwitches: [],
      shouldShowCalendar: false,
      shouldShowAlert: false,
      startingDay: null,
      endingDay: null
    };
  }

  componentDidMount() {
    // const { getSimulationStatus, getLightSwitches, getStatistics } = this.props;
    const { getStatistics, getSimulationStatus } = this.props;
    getSimulationStatus();
    getStatistics();
  }

  checkIfSimulationOn = () => this.props.simulationStatus === SIMULATION_ON;

  handleToggleAlert = () =>
    this.setState({ shouldShowAlert: !this.state.shouldShowAlert });

  handleClearState = () => {
    this.setState({
      shouldShowAlert: false,
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
    this.handleClearState();
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
          previousBtnStyle={Number(key) !== 1 ? styles.prevBtnStyle : {}} // prop can only be object, otherwise huge error in console => debugging more painful
          previousBtnTextStyle={styles.btnTextStyle}
        >
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <MyText>{this.renderHeaderText()}</MyText>
            <Room
              isSimulationOn={this.checkIfSimulationOn()}
              // isLightOn={lightSwitches[key]}
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
      onDatesConfirmClick={this.handleToggleCalendar}
    >
      {this.state.shouldShowAlert ? (
        <MyAlert onPress={this.handleClearState} />
      ) : (
        <Calendar
          startDate={this.state.startingDay}
          endDate={this.state.endingDay}
          onShowAlert={this.handleToggleAlert}
          onSetEndingDate={this.handleSetEndingDay}
          onSetStartingDate={this.handleSetStartingDay}
        />
      )}
    </MyModal>
  );

  renderContent = () => {
    switch (this.props.statisticsState || this.props.simulationStatus) {
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
