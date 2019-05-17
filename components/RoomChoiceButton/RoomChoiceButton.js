import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import MyText from "../MyText/MyText";
import CardChoice from "../CardChoice/CardChoice";

import { LABELS } from "./RoomChoiceButton.constants";

const HourChoiceButton = ({ label, isSelected, onSelect, roomId }) => {
  const renderLeftComponent = () => (
    <MyText isBold> {`Choose ${label.toLowerCase()}`} </MyText>
  );

  const renderRightComponent = () => (
    <MyText>{isSelected ? LABELS.SELECTED : LABELS.NOT_SELECTED}</MyText>
  );

  return (
    <CardChoice
      leftComponent={renderLeftComponent()}
      rightComponent={renderRightComponent()}
      handleOnPress={() => onSelect(roomId)}
      iconType={label.toLowerCase()}
      iconIsActive={isSelected}
      iconBackgroundColor="#32936f"
    />
  );
};

export default HourChoiceButton;
