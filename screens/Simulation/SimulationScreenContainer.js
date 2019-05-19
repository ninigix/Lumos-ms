import React from "react";
import { connect } from "react-redux";

import SimulationScreenComponent from "./SimulationScreenComponent";
import * as actions from "../../actions/simulationActions";
import {
  getGeneratedData,
  getLearningStatus,
  getSimulationStatus
} from "../../selectors/simulationSelector";

const SimulationScreenContainer = props => (
  <SimulationScreenComponent {...props} />
);

const mapStateToProps = state => ({
  generatedData: getGeneratedData(state),
  learnStatus: getLearningStatus(state),
  simulationStatus: getSimulationStatus(state)
});

const mapDispatchToProps = dispatch => ({
  postDataToLearn: params => dispatch(actions.postLearnData.request(params)),
  postStartSimulation: params =>
    dispatch(actions.postStartSimulation.request(params)),
  getSimulationStatus: () => dispatch(actions.getSimulationState.request())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimulationScreenContainer);
