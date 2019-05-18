import React from "react";
import { View, Text } from "react-native";
import { ProgressStep } from "react-native-progress-steps";

import Calendar from "../../components/Calendar/Calendar";
import RoomChoiceButton from "../../components/RoomChoiceButton/RoomChoiceButton";
import HoursStep from "./steps/HoursStep/HoursStep";
import SimulationStep from "./steps/SimulationStep/SimulationStep";
import MyProgressSteps from "../Rooms/MyProgressSteps";

import StartSimulationStep from "./steps/StartSimulationStep/StartSimulationStep";
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
      isRealSimulationSelected: false
    };
  }

  handleSetEndingDay = date =>
    this.state.endingDay
      ? this.setState({ startingDay: date.dateString, endingDay: null })
      : this.setState({ endingDay: date.dateString });

  handleSetStartingDay = date =>
    this.setState({ startingDay: date.dateString });

  handleClearState = () => {
    this.setState({
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

  renderCalendarStep = () => (
    <View style={styles.calendarComponentWrapper}>
      <Calendar
        startDate={this.state.startingDay}
        endDate={this.state.endingDay}
        onClearState={this.handleClearState}
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

  onSubmitHelper = () =>
    this.props.postStartSimulation({
      generatedData: this.props.generatedData,
      isRealSimulation: this.state.isRealSimulationSelected
    });

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          {console.log("this.state", this.state)}
          <MyProgressSteps>
            {this.steps.map(({ label, content, isDisabled }, index) => {
              const notFirstStep = index !== 0;
              console.log("isDisabled", !!isDisabled);
              return (
                <ProgressStep
                  key={`${label}__${index}`}
                  label={label}
                  nextBtnDisabled={!!isDisabled && isDisabled()}
                  nextBtnText=">"
                  nextBtnStyle={
                    !!isDisabled && isDisabled()
                      ? styles.disabledNextBtnStyle
                      : styles.nextBtnStyle
                  }
                  nextBtnTextStyle={styles.btnTextStyle}
                  onNext={label === "Rooms" && this.handlePostDataToLearn}
                  previousBtnText={notFirstStep && "<"}
                  previousBtnStyle={notFirstStep && styles.prevBtnStyle}
                  previousBtnTextStyle={notFirstStep && styles.btnTextStyle}
                  onSubmit={index === this.steps.length && this.onSubmitHelper}
                >
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
