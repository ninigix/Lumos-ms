import React from "react";

import MyText from "../MyText/MyText";
import CardChoice from "../CardChoice/CardChoice";

import { LABELS } from "./HourChoiceButton.constants";

const HourChoiceButton = ({
  chosenDay,
  chosenHour,
  handleHourSelect,
  isStart
}) => {
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

  const renderCTALabel = () => (isStart ? LABELS.START : LABELS.END);

  return (
    <CardChoice
      leftComponent={chosenHour ? LABELS.EDIT : renderCTALabel()}
      handleOnPress={handleHourSelect}
      rightComponent={renderRightComponent()}
      iconType="clock"
      iconIsActive={chosenHour}
      iconBackgroundColor="#32936f"
    />
  );
};

export default HourChoiceButton;
