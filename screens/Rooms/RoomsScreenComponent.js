import React from "react";
import { View, Text } from "react-native";
import { ProgressStep } from "react-native-progress-steps";

import Room from "./Components/Room/Room";
import { messages, ROOMS_NAMES } from "./RoomsScreen.constants";
import {
  FAILURE,
  REQUEST,
  SIMULATION_ON,
  SUCCESS
} from "../../actions/helpers";
import {
  LoadingIndicator,
  FailureIndicator,
  DefaultIndicator
} from "../../components/FetchIndicators/Indicators/Indicators";
import MyModal from "./Components/Modal/Modal";
import Calendar from "../../components/Calendar/Calendar";
import MyAlert from "../../components/MyAlert/MyAlert";
import MyProgressSteps from "./MyProgressSteps";
import SimulationWarning from "./Components/SimulationWarning/SimulationWarning";

import styles from "./RoomsScreenComponent.style";

export default class RoomsScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightsOn: [], // to indicate which switches were changed and are currently on
      changedLightIds: new Set(), // to indicate which light switches were already used either via app or manually
      shouldShowCalendar: false,
      shouldShowAlert: false,
      startingDay: null,
      endingDay: null
    };
  }

  componentDidMount() {
    this.props.getSwitchesInitialState();
    this.props.getRealSimulationStatus();
    this.props.getStatistics();

    this.eventSource = new EventSource(
      "http://localhost:5000/microcontrollers"
    );
    this.eventSource.addEventListener("message", data => {
      const esp_id = data.data[0];
      const status = data.data[2];

      // TODO remove Number()... once backend from Dorota
      if (status === "1") {
        //light on
        return this.state.lightsOn.includes(Number(esp_id))
          ? null // and in the lightOn => do nothing
          : this.setState({
              // not in lightsOn => add to lightsOn and changedLightIds to inform that it's not in its initial state
              lightsOn: [...this.state.lightsOn, Number(esp_id)],
              changedLightIds: this.state.changedLightIds.add(Number(esp_id))
            });
      } else {
        // light off
        this.state.lightsOn.includes(Number(esp_id)) &&
          this.setState({
            // off but in lightsOn => remove from lightsOn and add to changedLightIds to inform that it's not in its initial state
            lightsOn: this.state.lightsOn.filter(
              lightSwitch => lightSwitch !== Number(esp_id)
            ),
            changedLightIds: this.state.changedLightIds.add(Number(esp_id))
          });
      }
    });
  }

  componentWillUnmount() {
    this.eventSource.removeAllListeners();
    this.eventSource.close();
  }

  checkIfSimulationOn = () => this.props.realSimulationStatus === SIMULATION_ON;

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

  handleChangePeriod = () => {
    this.handleToggleCalendar();
    this.props.getStatistics({
      startingDay: this.state.startingDay,
      endingDay: this.state.endingDay
    });
  };

  handleSetStartingDay = date =>
    this.setState({ startingDay: date.dateString });

  checkIfLightOn = id => {
    const mappedId = Number(id);
    const { changedLightIds, lightsOn } = this.state;
    // if not in initial state, check if in state.lightOn. If in initial state, check if in props.initialLightsOn
    return !changedLightIds.has(mappedId)
      ? this.props.initialLightsOn.includes(mappedId)
      : lightsOn.includes(mappedId);
  };

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
            {this.checkIfSimulationOn() && <SimulationWarning />}
            <Room
              isSimulationOn={this.checkIfSimulationOn()}
              isLightOn={this.checkIfLightOn(key)}
              value={value}
              onClick={() => this.props.switchLight({ esp_id: Number(key) })}
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
      onDatesConfirmClick={this.handleChangePeriod}
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

  // add loading indicator for simulation status
  renderContent = () => {
    const { statisticsStatus, switchesInitialStateStatus } = this.props;
    if (
      switchesInitialStateStatus === REQUEST ||
      statisticsStatus === REQUEST
    ) {
      return <LoadingIndicator />;
    } else if (
      switchesInitialStateStatus === FAILURE ||
      statisticsStatus === FAILURE
    ) {
      return <FailureIndicator />;
    } else if (
      switchesInitialStateStatus === SUCCESS &&
      statisticsStatus === SUCCESS
    ) {
      return this.state.shouldShowCalendar
        ? this.renderModal()
        : this.renderProgressStep();
    } else {
      return <DefaultIndicator />;
    }
  };

  render() {
    return <View style={styles.root}>{this.renderContent()}</View>;
  }
}
