import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import MyText from "../MyText/MyText";
import CardChoice from "../CardChoice/CardChoice";

const HourChoiceButton = ({ chosenDay, chosenHour, handleHourSelect }) => {
  const formattedDate = chosenDay && new Date(chosenDay);
  const stringMonth =
    chosenDay && formattedDate.toLocaleString("en-us", { month: "short" });
  const numberDay = chosenDay && formattedDate.getDate();

  const renderRightComponent = () => (
    <React.Fragment>
      <MyText textStyle={{ fontSize: 16 }}>
        {stringMonth} {numberDay}
      </MyText>
      {chosenHour && (
        <MyText isBold textStyle={{ fontSize: 16 }}>
          {chosenHour}
        </MyText>
      )}
    </React.Fragment>
  );

  return (
    <CardChoice
      leftComponent={chosenHour ? "Edit hour" : "Choose hour"}
      handleOnPress={handleHourSelect}
      rightComponent={renderRightComponent()}
      iconType="clock"
      iconIsActive={chosenHour}
      iconBackgroundColor="#32936f"
    />
  );
};

export default HourChoiceButton;
