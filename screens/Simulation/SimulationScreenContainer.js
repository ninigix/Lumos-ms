import React from "react";
import { connect } from "react-redux";

import SimulationScreenComponent from "./SimulationScreenComponent";
import * as actions from "../../actions/simulationActions";
import {
  getGeneratedData,
  getLearningStatus,
  getRealSimulationStatus
} from "../../selectors/simulationSelector";

const SimulationScreenContainer = props => (
  <SimulationScreenComponent {...props} />
);

const mapStateToProps = state => ({
  generatedData: getGeneratedData(state),
  learnStatus: getLearningStatus(state),
  realSimulationStatus: getRealSimulationStatus(state)
});

const mapDispatchToProps = dispatch => ({
  postDataToLearn: params => dispatch(actions.postLearnData.request(params)),
  toggleSimulation: params =>
    dispatch(actions.postToggleSimulation.request(params)),
  getRealSimulationStatus: () =>
    dispatch(actions.getRealSimulationState.request())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimulationScreenContainer);
