import React from "react";
import { connect } from "react-redux";

import SimulationScreenComponent from "./SimulationScreenComponent";
import * as actions from "../../actions/simulationActions";
import { getGeneratedData, getLearningStatus } from "../../selectors/simulationSelector";

const SimulationScreenContainer = props => (
  <SimulationScreenComponent {...props} />
);

const mapStateToProps = state => ({
  generatedData: getGeneratedData(state),
  learnStatus: getLearningStatus(state)
});

const mapDispatchToProps = dispatch => ({
  postDataToLearn: params => dispatch(actions.postLearnData.request(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimulationScreenContainer);
