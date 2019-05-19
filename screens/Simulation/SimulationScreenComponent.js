import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { ProgressStep } from "react-native-progress-steps";
import isequal from "lodash.isequal";

import Calendar from "../../components/Calendar/Calendar";
import RoomChoiceButton from "../../components/RoomChoiceButton/RoomChoiceButton";
import HoursStep from "./steps/HoursStep/HoursStep";
import SimulationStep from "./steps/SimulationStep/SimulationStep";
import MyProgressSteps from "../Rooms/MyProgressSteps";
import MyAlert from "../../components/MyAlert/MyAlert";
import StartSimulationStep from "./steps/StartSimulationStep/StartSimulationStep";
import {
  FAILURE,
  REQUEST,
  SIMULATION_OFF,
  SIMULATION_ON,
  SUCCESS
} from "../../actions/helpers";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import MyText from "../../components/MyText/MyText";

import styles from "./SimulationScreenComponent.style";

export const labels = {
  1: "Bathroom",
  2: "Bedroom1",
  3: "Kitchen"
};

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
    this.props.getSimulationStatus();
  }

  handleSetEndingDay = date =>
    this.state.endingDay
      ? this.setState({ startingDay: date.dateString, endingDay: null })
      : this.setState({ endingDay: date.dateString });

  handleSetStartingDay = date =>
    this.setState({ startingDay: date.dateString });

  handleClearState = () => {
    this.setState({
      shouldShowAlert: false,
      endingDay: null,
      startingDay: null
    });
  };

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

  handleSimulationTypeSelect = isRealSimulationSelected =>
    this.setState({
      isRealSimulationSelected: isRealSimulationSelected
    });

  handleShowAlert = () => this.setState({ shouldShowAlert: true });

  renderCalendarStep = () =>
    this.state.shouldShowAlert ? (
      <MyAlert onPress={this.handleClearState} />
    ) : (
      <View style={styles.calendarComponentWrapper}>
        <Calendar
          startDate={this.state.startingDay}
          endDate={this.state.endingDay}
          onShowAlert={this.handleShowAlert}
          onSetEndingDate={this.handleSetEndingDay}
          onSetStartingDate={this.handleSetStartingDay}
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
      {Object.entries(labels).map(([key, value]) => (
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
      label: "Date",
      content: this.renderCalendarStep,
      isDisabled: () => !this.state.startingDay || !this.state.endingDay
    },
    {
      label: "Hours",
      content: this.renderHoursStep,
      isDisabled: () => !this.state.startingHour || !this.state.endingHour
    },
    {
      label: "Rooms",
      content: this.renderRoomsStep,
      isDisabled: () => this.state.selectedRooms.length === 0
    },
    {
      label: "See simulation",
      content: this.renderSimulationStep
    },
    {
      label: "Start",
      content: this.renderStartSimulationStep
    }
  ];

  onSubmitHelper = () => {
    return this.props.toggleSimulation({
      isRealSimulation: this.state.isRealSimulationSelected,
      shouldStartSimulation: this.props.simulationStatus !== SIMULATION_ON,
      generatedData: this.props.generatedData
    });
  };

  renderSimulationOverlay = () => {
    switch (this.props.simulationStatus) {
      case SIMULATION_ON: {
        return (
          <React.Fragment>
            <View
              style={{
                alignItems: "center",
                height: "100%",
                width: "100%",
                display: "flex",
                position: "absolute",
                zIndex: 100,
                backgroundColor: "rgba(214, 215, 218, 0.8)",
                minHeight: 600
                // padding: 20
              }}
            >
              <MyText
                isBold
                textStyle={{
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: "55%",
                  color: "#2274a5",
                  textAlign: "center",
                  fontSize: 22,
                  lineHeight: 30
                }}
              >
                Simulation running, in order to make changes go to the last step
                and stop simulation.
              </MyText>
            </View>
          </React.Fragment>
        );
      }

      case SIMULATION_OFF:
        return <React.Fragment />;

      case FAILURE:
        return <Text>failure</Text>;

      case REQUEST: {
        return (
          <View
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ActivityIndicator size="large" color="#2274a5k" />
          </View>
        );
      }

      default:
        return <Text>Something went wrong. Please try once again.</Text>;
    }
  };

  render() {
    const isSimulationOn = this.props.simulationStatus === SIMULATION_ON;
    // || this.state.isSimulationOn;
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
                  onNext={
                    label === "Rooms" &&
                    !isSimulationOn &&
                    this.handlePostDataToLearn
                  }
                  previousBtnText={notFirstStep ? "<" : ""} // otherwise huge warnings in console => makes debugging difficult
                  previousBtnStyle={notFirstStep ? styles.prevBtnStyle : {}} // otherwise huge warnings in console => makes debugging difficult
                  previousBtnTextStyle={notFirstStep ? styles.btnTextStyle : {}} // otherwise huge warnings in console => makes debugging difficult
                  onSubmit={this.onSubmitHelper}
                  finishBtnText={
                    isSimulationOn ? "Stop simulation" : "Start simulation"
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
