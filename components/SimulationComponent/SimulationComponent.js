import React from "react";
import { StyleSheet, View } from "react-native";
import MyText from "../MyText/MyText";

import CardChoice from "../../components/CardChoice/CardChoice";

const SimulationComponent = ({ date, roomName, isLightOn }) => {
  const formattedDate = date && new Date(date);
  const stringMonth =
    date && formattedDate.toLocaleString("en-us", { month: "short" });
  const numberDay = date && formattedDate.getDate();

  const renderRightComponent = () => (
    <React.Fragment>
      <MyText textStyle={{ fontSize: 16 }}>
        {stringMonth} {numberDay}
      </MyText>
      {date && (
        <MyText isBold textStyle={{ fontSize: 16 }}>
          {formattedDate.getHours()}:{formattedDate.getMinutes()}
        </MyText>
      )}
    </React.Fragment>
  );

  return (
    <CardChoice
      leftComponent={roomName}
      leftComponentAdditionalLine={isLightOn ? "Light on" : "Light off"}
      rightComponent={renderRightComponent()}
      iconType="lightbulb"
      iconIsActive={isLightOn}
      iconBackgroundColor="#ffbf00"
    />
  );
};

export default SimulationComponent;

const styles = StyleSheet.create({
  dateComponentGrey: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  dateComponentSideButton: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "grey",
    minWidth: "15%"
  },
  dateComponentWrapper: {
    display: "flex",
    height: 50,
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
  }
});
