import React from "react";
import { View } from "react-native";
import { ProgressStep } from "react-native-progress-steps";

import Calendar from "../../components/Calendar/Calendar";
import RoomChoiceButton from "../../components/RoomChoiceButton/RoomChoiceButton";
import HoursStep from "./steps/HoursStep/HoursStep";
import SimulationStep from "./steps/SimulationStep/SimulationStep";
import MyProgressSteps from "../Rooms/MyProgressSteps";
import StartSimulationStep from "./steps/StartSimulationStep/StartSimulationStep";
import {
  FAILURE,
  REQUEST,
  SIMULATION_OFF,
  SIMULATION_ON,
  SUCCESS
} from "../../actions/helpers";
import {
  LoadingIndicator,
  DefaultIndicator,
  FailureIndicator
} from "../../components/FetchIndicators/Indicators/Indicators";
import MyText from "../../components/MyText/MyText";

import {ROOMS_NAMES} from '../Rooms/RoomsScreen.constants';
import { roomLabels, stepLabels, messages } from "./SimulationScreen.constants";
import styles from "./SimulationScreenComponent.style";

export default class SimulationScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startingDay: null,
      endingDay: null,
      isDateTimePickerVisible: false,
      startingHour: null,
      endingHour: null,
      isChoosingStartingHour: false,
      selectedRooms: [],
      areAllRoomsSelected: false,
      isRealSimulationSelected: true,
      shouldShowAlert: false,
      isSimulationOn: false
    };
  }

  componentDidMount() {
    this.props.getRealSimulationStatus();
    this.props.getArtificialSimulationStatus();
  }

  onSubmitHelper = () => {
    const {
      realSimulationStatus,
      generatedData,
      artificialSimulationStatus
    } = this.props;
    return this.props.toggleSimulation({
      isRealSimulation: this.state.isRealSimulationSelected,
      speed: this.state.simulationSpeed,
      shouldStartRealSimulation:
        realSimulationStatus !== SIMULATION_ON &&
        artificialSimulationStatus === SIMULATION_OFF,
      shouldStartArtificialSimulation:
        artificialSimulationStatus !== SIMULATION_ON &&
        realSimulationStatus === SIMULATION_OFF,
      generatedData
    });
  };

  handleSetEndingDay = date =>
    this.state.endingDay
      ? this.setState({ startingDay: date.dateString, endingDay: null })
      : this.setState({ endingDay: date.dateString });

  handleSetStartingDay = date =>
    this.setState({ startingDay: date.dateString });

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleTimePicked = date => {
    if (this.state.isChoosingStartingHour) {
      this.setState({
        startingHour: `${date.getHours()}:${date.getMinutes()}`
      });
    } else {
      this.setState({ endingHour: `${date.getHours()}:${date.getMinutes()}` });
    }
    this.hideDateTimePicker();
  };

  handleStartingHourSelect = () => {
    this.setState({ isChoosingStartingHour: true });
    this.setState({ isDateTimePickerVisible: true });
  };

  handleEndingHourSelect = () => {
    this.setState({ isChoosingStartingHour: false });
    this.setState({ isDateTimePickerVisible: true });
  };

  handleSelect = label =>
    !this.state.selectedRooms.includes(label)
      ? this.setState({ selectedRooms: [...this.state.selectedRooms, label] })
      : this.setState({
          selectedRooms: this.state.selectedRooms.filter(room => room !== label)
        });

  handlePostDataToLearn = () => {
    this.props.postDataToLearn({
      start: `${this.state.startingDay} ${this.state.startingHour}`,
      stop: `${this.state.endingDay} ${this.state.endingHour}`,
      room_id: this.state.selectedRooms
    });
  };

  handleSimulationTypeSelect = (isRealSimulationSelected, simulationSpeed) =>
    this.setState({
      isRealSimulationSelected: isRealSimulationSelected,
      simulationSpeed: simulationSpeed
    });

  handleShowAlert = () => this.setState({ shouldShowAlert: true, endingDay: null,
    startingDay: null });

  renderCalendarStep = () => (
      <View style={styles.calendarComponentWrapper}>
        <Calendar
            startDate={this.state.startingDay}
            endDate={this.state.endingDay}
            onShowAlert={this.handleShowAlert}
            onSetEndingDate={this.handleSetEndingDay}
            onSetStartingDate={this.handleSetStartingDay}
            shouldShowAlert={this.state.shouldShowAlert}
        />
      </View>
  );

  renderHoursStep = () => (
    <HoursStep
      startingHour={this.state.startingHour}
      endingHour={this.state.endingHour}
      startingDay={this.state.startingDay}
      endingDay={this.state.endingDay}
      onEndingHourSelect={this.handleEndingHourSelect}
      onStartingHourSelect={this.handleStartingHourSelect}
      onTimePicked={this.handleTimePicked}
      hideDateTimePicker={this.hideDateTimePicker}
      isDateTimePickerVisible={this.state.isDateTimePickerVisible}
    />
  );

  renderRoomsStep = () => (
    <View style={{ alignItems: "center" }}>
      {Object.entries(ROOMS_NAMES).map(([key, value]) => (
        <RoomChoiceButton
          label={value}
          onSelect={this.handleSelect}
          key={`${key}__${value}`}
          isSelected={this.state.selectedRooms.includes(key)}
          roomId={key}
        />
      ))}
    </View>
  );

  renderSimulationStep = () => (
    <SimulationStep
      generatedData={this.props.generatedData}
      learnStatus={this.props.learnStatus}
    />
  );

  renderStartSimulationStep = () => (
    <StartSimulationStep
      isRealSimulationSelected={this.state.isRealSimulationSelected}
      onSelect={this.handleSimulationTypeSelect}
    />
  );

  steps = [
    {
      label: stepLabels.DATE,
      content: this.renderCalendarStep,
      isDisabled: () => !this.state.startingDay || !this.state.endingDay
    },
    {
      label: stepLabels.HOURS,
      content: this.renderHoursStep,
      isDisabled: () => !this.state.startingHour || !this.state.endingHour
    },
    {
      label: stepLabels.ROOMS,
      content: this.renderRoomsStep,
      isDisabled: () => this.state.selectedRooms.length === 0
    },
    {
      label: stepLabels.SEE_SIMULATION,
      content: this.renderSimulationStep
    },
    {
      label: stepLabels.START,
      content: this.renderStartSimulationStep
    }
  ];

  renderSimulationOverlay = () => {
    const {
      realSimulationStatus,
      artificialSimulationStatus,
      toggleSimulationStatus
    } = this.props;
    if (
      realSimulationStatus === SIMULATION_ON ||
      artificialSimulationStatus === SIMULATION_ON
    ) {
      return (
        <React.Fragment>
          <View style={styles.screenOverlay}>
            <MyText isBold textStyle={styles.message}>
              {realSimulationStatus === SIMULATION_ON
                ? messages.realSimulationRunning
                : messages.artificialSimulationRunning}
            </MyText>
          </View>
        </React.Fragment>
      );
    } else if (
      realSimulationStatus === SIMULATION_OFF ||
      artificialSimulationStatus === SIMULATION_OFF
    ) {
      return <React.Fragment />;
    } else if (
      realSimulationStatus === FAILURE ||
      artificialSimulationStatus === FAILURE
    ) {
      return <FailureIndicator />;
    } else if (
      realSimulationStatus === REQUEST ||
      artificialSimulationStatus === REQUEST
    ) {
      return <LoadingIndicator />;
    } else {
      return <DefaultIndicator />;
    }
  };

  handleOnNext = (label, isSimulationOn) => {
    if (label === stepLabels.ROOMS && !isSimulationOn) {
      this.handlePostDataToLearn();
    }
  };

  render() {
    const isSimulationOn =
      this.props.realSimulationStatus === SIMULATION_ON ||
      this.props.artificialSimulationStatus === SIMULATION_ON;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <MyProgressSteps>
            {this.steps.map(({ label, content, isDisabled }, index) => {
              const notFirstStep = index !== 0;
              return (
                <ProgressStep
                  key={`${label}__${index}`}
                  label={label}
                  nextBtnDisabled={
                    !!isDisabled && !isSimulationOn && isDisabled()
                  }
                  nextBtnText=">"
                  nextBtnStyle={
                    !!isDisabled && !isSimulationOn && isDisabled()
                      ? styles.disabledNextBtnStyle
                      : styles.nextBtnStyle
                  }
                  nextBtnTextStyle={styles.btnTextStyle}
                  onNext={() => this.handleOnNext(label, isSimulationOn)}
                  previousBtnText={notFirstStep ? "<" : ""} // otherwise huge warnings in console => makes debugging difficult
                  previousBtnStyle={notFirstStep ? styles.prevBtnStyle : {}} // otherwise huge warnings in console => makes debugging difficult
                  previousBtnTextStyle={notFirstStep ? styles.btnTextStyle : {}} // otherwise huge warnings in console => makes debugging difficult
                  onSubmit={this.onSubmitHelper}
                  finishBtnText={
                    isSimulationOn
                      ? messages.simulationOn
                      : messages.simulationOff
                  }
                >
                  {this.renderSimulationOverlay()}
                  {content()}
                </ProgressStep>
              );
            })}
          </MyProgressSteps>
        </View>
      </View>
    );
  }
}
