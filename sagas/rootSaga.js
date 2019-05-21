import { all } from "redux-saga/effects";

import { watchGetSwitchesInitialState, watchSwitchLights } from "./lightSaga";
import {
  watchGetSimulationStatus,
  watchPostDataToLearn,
  watchPostStartSimulation
} from "./simulationSaga";
import { watchGetStatistics } from "./statisticSaga";

export default function* rootSaga() {
  yield all([
    watchGetSwitchesInitialState(),
    watchSwitchLights(),
    watchGetSimulationStatus(),
    watchPostDataToLearn(),
    watchGetStatistics(),
    watchPostStartSimulation()
  ]);
}
