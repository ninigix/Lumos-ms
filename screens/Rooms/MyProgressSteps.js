import React from "react";
import { ProgressSteps } from "react-native-progress-steps";

const MyProgressSteps = ({ children }) => (
  <ProgressSteps
    activeStepIconBorderColor="#2274a5"
    completedProgressBarColor="#2274a5"
    activeLabelColor="#2274a5"
    activeStepNumColor="#2274a5"
    completedStepIconColor="#2274a5"
  >
    {children}
  </ProgressSteps>
);

export default MyProgressSteps;
