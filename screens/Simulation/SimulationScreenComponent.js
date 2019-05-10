import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import DateTimePicker from "react-native-modal-datetime-picker";

import MyText from "../../components/MyText/MyText";
import Calendar from "../../components/Calendar/Calendar";
import HourChoiceButton from "../../components/HourChoiceButton/HourChoiceButton";
import RoomChoiceButton from "../../components/RoomChoiceButton/RoomChoiceButton";
import SimulationComponent from "../../components/SimulationComponent/SimulationComponent";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const labels = {
  1: "Kitchen",
  2: "Bathroom",
  3: "Hall",
  4: "Bedroom1",
  5: "Bedroom2"
};

// TODO: hide in shame and pretend that somebody else wrote this component
// TODO: block choosing past date
// TODO: when for one day block choosing end hour before start hour
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
      areAllRoomsSelected: false
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

  handleOnDateSelect = date => {
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

  // TODO: move color to const
  render() {
    const { generatedData } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <ProgressSteps
            activeStepIconBorderColor="#2274a5"
            completedProgressBarColor="#2274a5"
            activeLabelColor="#2274a5"
            activeStepNumColor="#2274a5"
            completedStepIconColor="#2274a5"
          >
            <ProgressStep
              label="Date"
              nextBtnDisabled={!this.state.startingDay || !this.state.endingDay}
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
                <MyText textStyle={{ textAlign: "justify", fontSize: 16 }}>
                  starting hour: 16 a.m.{" "}
                </MyText>
              </View>
            </ProgressStep>
            <ProgressStep
              label="Hours"
              nextBtnDisabled={
                !this.state.startingHour || !this.state.endingHour
              }
            >
              <View style={{ alignItems: "center" }}>
                <HourChoiceButton
                  chosenDay={this.state.startingDay}
                  chosenHour={this.state.startingHour}
                  handleHourSelect={this.handleStartingHourSelect}
                />
                <HourChoiceButton
                  chosenDay={this.state.endingDay}
                  chosenHour={this.state.endingHour}
                  handleHourSelect={this.handleEndingHourSelect}
                />
                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this.handleTimePicked}
                  onCancel={this.hideDateTimePicker}
                  mode="time"
                />
              </View>
            </ProgressStep>
            <ProgressStep
              label="Rooms"
              onNext={this.handlePostDataToLearn}
              nextBtnDisabled={this.state.selectedRooms.length === 0}
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
            <ProgressStep label="See simulation">
              <View style={{ alignItems: "center" }}>
                {generatedData &&
                  generatedData.map(data => (
                    <SimulationComponent
                      date={data.datetimevalue}
                      isLightOn={data.status}
                      roomName={labels[data.room]}
                    />
                  ))}
              </View>
            </ProgressStep>
            <ProgressStep label="Start">
              <View style={{ alignItems: "center" }}>
                <MyText textStyle={{ textAlign: "justify", fontSize: 16 }}>
                  {" "}
                  Be careful - when the simulation is running you can't switch
                  light via Lumos app.
                </MyText>
                <Button
                  title="Start simulation"
                  onPress={() => this.props.navigation.navigate("Home")}
                />
              </View>
            </ProgressStep>
          </ProgressSteps>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dateComponentGrey: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  dateComponentHour: {
    flex: 5,
    padding: 15
  },
  dateComponentWrapper: {
    display: "flex",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    flexDirection: "row",
    margin: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16
  }
});
