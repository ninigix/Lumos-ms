import React from "react";
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
