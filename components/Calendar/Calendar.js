import React from "react";
import { CalendarList } from "react-native-calendars";
import moment from "moment";
import MyText from "../MyText/MyText";

import messages from './Calendar.constants';

const Calendar = ({
  startDate,
  endDate,
  onShowAlert,
  onSetEndingDate,
  onSetStartingDate,
                    shouldShowAlert,
                    allowSelectingPastDates,
                    allowSelectingFutureDates
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
    const isInTheFuture = date.timestamp > today.valueOf();
    const pastCondition = !allowSelectingPastDates && (isToday || isInThePast);
    const futureCondition =!allowSelectingFutureDates && (isToday || isInTheFuture);
    if (pastCondition || futureCondition) {
      return onShowAlert();
    }
    if (startDate) {
      onSetEndingDate(date);
    } else {
      onSetStartingDate(date);
    }
  };

  const renderAlert = () => allowSelectingPastDates ? messages.futureChoiceAlert: messages.pastChoiceAlert;

  return (
      <React.Fragment>
        {shouldShowAlert && <MyText textStyle={{color: "#E83F6F"}} isBold>{renderAlert()}</MyText>}
    <CalendarList
      markedDates={createDateRange()}
      pastScrollRange={12}
      futureScrollRange={12}
      scrollEnabled={true}
      showScrollIndicator={true}
      onDayPress={day => handleDateSelect(day)}
      markingType="period"
    />
      </React.Fragment>
  );
};

export default Calendar;
