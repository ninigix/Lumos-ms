import React from "react";
import { FAILURE, REQUEST, SUCCESS } from "../../../../actions/helpers";
import { Text, View } from "react-native";
import SimulationComponent from "../../../../components/SimulationComponent/SimulationComponent";
import LoadingIndicator from "../../../../components/LoadingIndicator/LoadingIndicator";

import { labels } from "../../SimulationScreenComponent";

const SimulationStep = ({ learnStatus, generatedData }) => {
  switch (learnStatus) {
    case SUCCESS: {
      return (
        <View style={{ alignItems: "center" }}>
          {generatedData &&
            generatedData.map(data => (
              <SimulationComponent
                date={data.datetimevalue}
                isLightOn={data.status.includes(1)}
                roomName={labels[data.room]}
              />
            ))}
        </View>
      );
    }

    case FAILURE: {
      return <Text>failure</Text>;
    }

    case REQUEST: {
      return <LoadingIndicator />;
    }

    default:
      return <React.Fragment />;
  }
};

export default SimulationStep;
