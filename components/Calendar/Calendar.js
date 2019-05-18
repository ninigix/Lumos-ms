import React from "react";
import { CalendarList } from "react-native-calendars";
import moment from "moment";

const Calendar = ({
  startDate,
  endDate,
  onShowAlert,
  onSetEndingDate,
  onSetStartingDate
}) => {
  const mustard = "#ffbf00";
  const createDateRange = () => {
    const localStartDate = moment(startDate).format("YYYY-MM-DD");
    const localEndDate = moment(endDate).format("YYYY-MM-DD");
    const dateRange = {
      [localStartDate]: {
        selected: true,
        startingDay: true,
        color: `${mustard}`
      },
      [localEndDate]: { selected: true, endingDay: true, color: `${mustard}` }
    };
    if (localStartDate && localEndDate) {
      let start = moment(localStartDate)
        .startOf("day")
        .add(1, "days");
      const end = moment(localEndDate).startOf("day");
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
      return onShowAlert();
    }
    if (startDate) {
      onSetEndingDate(date);
    } else {
      onSetStartingDate(date);
    }
  };

  return (
    <CalendarList
      markedDates={createDateRange()}
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
