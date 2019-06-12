import React from "react";
import { connect } from "react-redux";

import RoomsScreenComponent from "./RoomsScreenComponent";
import * as actions from "../../actions/lightActions";
import { getRealSimulationState } from "../../actions/simulationActions";
import { getStatistics } from "../../actions/statisticActions";
import { getRealSimulationStatus } from "../../selectors/simulationSelector";
import {
  getSwitchesInitialStateStatus,
  getInitialLightsOn
} from "../../selectors/lightSelector";
import * as fromStatistic from "../../selectors/statisticSelector";

const RoomsScreenContainer = props => <RoomsScreenComponent {...props} />;

const mapStateToProps = state => ({
  switchesInitialStateStatus: getSwitchesInitialStateStatus(state),
  initialLightsOn: getInitialLightsOn(state),
  realSimulationStatus: getRealSimulationStatus(state),
  statistics: fromStatistic.getStatistic(state),
  statisticsStatus: fromStatistic.getStatisticStatus(state)
});

const mapDispatchToProps = dispatch => ({
  getSwitchesInitialState: () =>
    dispatch(actions.getSwitchesInitialState.request()),
  switchLight: params => dispatch(actions.switchLights.request(params)),
  getRealSimulationStatus: () => dispatch(getRealSimulationState.request()),
  getStatistics: params => dispatch(getStatistics.request(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomsScreenContainer);
