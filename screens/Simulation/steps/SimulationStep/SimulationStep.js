import React from "react";
import { View } from "react-native";

import { FAILURE, REQUEST, SUCCESS } from "../../../../actions/helpers";
import SimulationComponent from "../../../../components/SimulationComponent/SimulationComponent";
import {
  LoadingIndicator,
  FailureIndicator
} from "../../../../components/FetchIndicators/Indicators/Indicators";

import { roomLabels } from "../../SimulationScreen.constants";

const SimulationStep = ({ learnStatus, generatedData }) => {
  switch (learnStatus) {
    case SUCCESS: {
      return (
        <View style={{ alignItems: "center" }}>
          {console.log('GENERATED DATA', generatedData)}
          {generatedData &&
            generatedData.map(({ room, status, datetimevalue }) => (
              <SimulationComponent
                key={`${room}__${status}`}
                date={datetimevalue}
                isLightOn={status.includes(1)}
                roomName={roomLabels[room]}
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
