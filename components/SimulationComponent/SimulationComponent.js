import React from "react";
import MyText from "../MyText/MyText";

import CardChoice from "../../components/CardChoice/CardChoice";

import { LABELS } from "./SimulationComponent.constants";

const SimulationComponent = ({ date, roomName, isLightOn }) => {
  const formattedDate = date && new Date(date);
  const stringMonth =
    date && formattedDate.toLocaleString("en-us", { month: "short" });
  const numberDay = date && formattedDate.getDate();

  const renderRightComponent = () => (
    <React.Fragment>
      {/*<MyText textStyle={{ fontSize: 16 }}>*/}
      {/*  {stringMonth} {numberDay}*/}
      {/*</MyText>*/}
      {date && (
        <MyText isBold textStyle={{ fontSize: 16 }}>
          {date}
          {/*{formattedDate.getHours()}:{formattedDate.getMinutes()}:{formattedDate.getSeconds()}*/}
        </MyText>
      )}
    </React.Fragment>
  );

  return (
    <CardChoice
      leftComponent={roomName}
      leftComponentAdditionalLine={isLightOn ? LABELS.ON : LABELS.OFF}
      rightComponent={renderRightComponent()}
      iconType="lightbulb"
      iconIsActive={isLightOn}
      iconBackgroundColor="#ffbf00"
    />
  );
};

export default SimulationComponent;
