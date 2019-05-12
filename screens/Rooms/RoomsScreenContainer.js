import React from "react";
import { connect } from "react-redux";

import RoomsScreenComponent from "./RoomsScreenComponent";
import * as actions from "../../actions/lightActions";
import { getSimulationState } from "../../actions/simulationActions";
import { getStatistics } from "../../actions/statisticActions";
import { getSimulationStatus } from "../../selectors/simulationSelector";
import { getAvailableLights } from "../../selectors/lightSelector";
import * as fromStatistic from "../../selectors/statisticSelector";

const RoomsScreenContainer = props => <RoomsScreenComponent {...props} />;

const mapStateToProps = state => ({
  lightSwitches: getAvailableLights(state),
  simulationStatus: getSimulationStatus(state),
  statistics: fromStatistic.getStatistic(state)
});

const mapDispatchToProps = dispatch => ({
  getLightSwitches: () => dispatch(actions.getLightSwitches.request()),
  switchLight: params => dispatch(actions.switchLights.request(params)),
  getSimulationStatus: () => dispatch(getSimulationState.request()),
  getStatistics: () => dispatch(getStatistics.request())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomsScreenContainer);
