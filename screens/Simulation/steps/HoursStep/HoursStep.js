import React from "react";
import { View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

import HourChoiceButton from "../../../../components/HourChoiceButton/HourChoiceButton";

const HoursStep = ({
  startingHour,
  endingHour,
  startingDay,
  endingDay,
  onEndingHourSelect,
  onTimePicked,
  hideDateTimePicker,
  onStartingHourSelect,
  isDateTimePickerVisible
}) => {
  return (
    <View style={{ alignItems: "center" }}>
      <HourChoiceButton
        chosenDay={startingDay}
        chosenHour={startingHour}
        handleHourSelect={onStartingHourSelect}
        isStart
      />
      <HourChoiceButton
        chosenDay={endingDay}
        chosenHour={endingHour}
        handleHourSelect={onEndingHourSelect}
      />
      <DateTimePicker
        isVisible={isDateTimePickerVisible}
        onConfirm={onTimePicked}
        onCancel={hideDateTimePicker}
        mode="time"
      />
    </View>
  );
};
export default HoursStep;
