import React from "react";
import { View } from "react-native";

import { FAILURE, REQUEST, SUCCESS } from "../../../../actions/helpers";
import SimulationComponent from "../../../../components/SimulationComponent/SimulationComponent";
import {
  LoadingIndicator,
  FailureIndicator
} from "../../../../components/FetchIndicators/Indicators/Indicators";

import { ROOMS_NAMES } from "../../../Rooms/RoomsScreen.constants";

const SimulationStep = ({ learnStatus, generatedData }) => {
  switch (learnStatus) {
    case SUCCESS: {
      return (
        <View style={{ alignItems: "center" }}>
          {generatedData &&
            generatedData.map(({ room, status, datetimevalue }) => (
              <SimulationComponent
                key={`${room}__${status}`}
                date={datetimevalue}
                isLightOn={status.includes(1)}
                roomName={ROOMS_NAMES[room]}
              />
            ))}
        </View>
      );
    }

    case FAILURE: {
      return <FailureIndicator />;
    }

    case REQUEST: {
      return <LoadingIndicator />;
    }

    default:
      return <React.Fragment />;
  }
};

export default SimulationStep;
