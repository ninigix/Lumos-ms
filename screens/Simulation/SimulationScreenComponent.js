import React from "react";
import { Dimensions, View } from "react-native";
import { ProgressStep } from "react-native-progress-steps";
import moment from "moment";

import Calendar from "../../components/Calendar/Calendar";
import RoomChoiceButton from "../../components/RoomChoiceButton/RoomChoiceButton";
import HoursStep from "./steps/HoursStep/HoursStep";
import MyAlert from "./steps/MyAlert/MyAlert";
import SimulationStep from "./steps/SimulationStep/SimulationStep";
import MyProgressSteps from "../Rooms/MyProgressSteps";

import StartSimulationStep from "./steps/StartSimulationStep/StartSimulationStep";
import styles from "./SimulationScreenComponent.style";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const labels = {
  1: "Bathroom",
  2: "Bedroom1",
  3: "Kitchen"
  // 4: "Hall", //not implemented
  // 5: "Bedroom2" //not implemented
};

// TODO: hide in shame and pretend that somebody else wrote this component
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

  setEndingDay = date => {
    if (this.state.endingDay) {
      this.setState({ startingDay: date.dateString });
      this.setState({ endingDay: null });
    } else {
      this.setState({ endingDay: date.dateString });
    }
  };

  clearState = () => {
    this.setState({
      endingDay: null,
      startingDay: null
    });
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

  handleSelect = label => {
    if (!this.state.selectedRooms.includes(label)) {
      this.setState({ selectedRooms: [...this.state.selectedRooms, label] });
    } else {
      this.setState({
        selectedRooms: this.state.selectedRooms.filter(room => room !== label)
      });
    }
  };

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

  renderCalendarStep = () => {
    const isDisabled = !this.state.startingDay || !this.state.endingDay;
    return (
      <ProgressStep
        label="Date"
        nextBtnDisabled={isDisabled}
        nextBtnText=">"
        nextBtnStyle={
          isDisabled ? styles.disabledNextBtnStyle : styles.nextBtnStyle
        }
        nextBtnTextStyle={styles.btnTextStyle}
      >
        <View
          style={{
            alignItems: "center",
            width: deviceWidth,
            height: deviceHeight,
            flexDirection: "column"
          }}
        >
          <Calendar
            startDate={this.state.startingDay}
            endDate={this.state.endingDay}
            onDateSelect={this.handleOnDateSelect}
          />
        </View>
      </ProgressStep>
    );
  };

  renderHoursStep = () => {
    const isDisabled = !this.state.startingHour || !this.state.endingHour;
    return (
      <ProgressStep
        label="Hours"
        nextBtnDisabled={isDisabled}
        nextBtnText=">"
        previousBtnText="<"
        nextBtnStyle={
          isDisabled ? styles.disabledNextBtnStyle : styles.nextBtnStyle
        }
        nextBtnTextStyle={styles.btnTextStyle}
        previousBtnStyle={styles.prevBtnStyle}
        previousBtnTextStyle={styles.btnTextStyle}
      >
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
      </ProgressStep>
    );
  };

  renderRoomsStep = () => {
    const isDisabled = this.state.selectedRooms.length === 0;
    return (
      <ProgressStep
        label="Rooms"
        onNext={this.handlePostDataToLearn}
        nextBtnDisabled={isDisabled}
        nextBtnText=">"
        previousBtnText="<"
        nextBtnStyle={
          isDisabled ? styles.disabledNextBtnStyle : styles.nextBtnStyle
        }
        nextBtnTextStyle={styles.btnTextStyle}
        previousBtnStyle={styles.prevBtnStyle}
        previousBtnTextStyle={styles.btnTextStyle}
      >
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
      </ProgressStep>
    );
  };

  renderSimulationStep = () => (
    <ProgressStep
      label="See simulation"
      nextBtnText=">"
      previousBtnText="<"
      nextBtnStyle={styles.nextBtnStyle}
      nextBtnTextStyle={styles.btnTextStyle}
      previousBtnStyle={styles.prevBtnStyle}
      previousBtnTextStyle={styles.btnTextStyle}
    >
      <SimulationStep
        generatedData={this.props.generatedData}
        learnStatus={this.props.learnStatus}
      />
    </ProgressStep>
  );

  renderStartSimulationStep = () => (
    <ProgressStep
      label="Start"
      nextBtnText=">"
      previousBtnText="<"
      finishBtnText="Start simulation"
      onSubmit={() =>
        this.props.postStartSimulation({
          generatedData: this.props.generatedData,
          isRealSimulation: this.state.isRealSimulationSelected
        })
      }
      nextBtnStyle={styles.nextBtnStyle}
      nextBtnTextStyle={styles.btnTextStyle}
      previousBtnStyle={styles.prevBtnStyle}
      previousBtnTextStyle={styles.btnTextStyle}
    >
      <StartSimulationStep
        isRealSimulationSelected={this.state.isRealSimulationSelected}
        onSelect={this.handleSimulationTypeSelect}
      />
    </ProgressStep>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <MyProgressSteps>
            {this.renderCalendarStep()}
            {this.renderHoursStep()}
            {this.renderRoomsStep()}
            {this.renderSimulationStep()}
            {this.renderStartSimulationStep()}
          </MyProgressSteps>
        </View>
      </View>
    );
  }
}
