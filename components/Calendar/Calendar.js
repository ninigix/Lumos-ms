import React, { Component } from "react";
import { CalendarList } from "react-native-calendars";
import moment from "moment";
import MyAlert from "../../screens/Simulation/steps/MyAlert/MyAlert";

const Calendar = ({
  startDate,
  endDate,
  onDateSelect,
  onClearState,
  onSetEndingDate,
  onSetStartingDate
}) => {
  const mustard = "#ffbf00";
  const createDateRange = () => {
    startDate = moment(startDate).format("YYYY-MM-DD");
    endDate = moment(endDate).format("YYYY-MM-DD");
    const dateRange = {
      [startDate]: { selected: true, startingDay: true, color: `${mustard}` },
      [endDate]: { selected: true, endingDay: true, color: `${mustard}` }
    };
    if (startDate && endDate) {
      let start = moment(startDate)
        .startOf("day")
        .add(1, "days");
      const end = moment(endDate).startOf("day");
      while (end.isAfter(start)) {
        Object.assign(dateRange, {
          [start.format("YYYY-MM-DD")]: { selected: true, color: `${mustard}` }
        });
        start = start.add(1, "days");
      }
    }
    return dateRange;
  };

  const handleDateSelect = date => {
    const today = new moment();
    const isToday = date.dateString === today.format("YYYY-MM-DD");
    const isInThePast = date.timestamp < today.valueOf();

    if (isToday || isInThePast) {
      return <MyAlert onPress={onClearState} />;
    }

    if (startDate) {
      onSetEndingDate(date);
      // this.setEndingDay(date);
    } else {
      onSetStartingDate(date);
      // this.setState({startingDay: date.dateString});
    }
  };

  return (
    <CalendarList
      // Callback which gets executed when visible months change in scroll view. Default = undefined
      markedDates={createDateRange()}
      // onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
      pastScrollRange={12}
      futureScrollRange={12}
      scrollEnabled={true}
      showScrollIndicator={true}
      onDayPress={day => handleDateSelect(day)}
      markingType="period"
    />
  );
};

export default Calendar;
