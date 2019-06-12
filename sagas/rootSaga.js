import { all } from "redux-saga/effects";

import { watchGetSwitchesInitialState, watchSwitchLights } from "./lightSaga";
import {
  watchGetRealSimulationStatus,
  watchPostDataToLearn,
  watchPostStartSimulation,
  watchGetArtificialSimulationStatus
} from "./simulationSaga";
import { watchGetStatistics } from "./statisticSaga";

export default function* rootSaga() {
  yield all([
    watchGetSwitchesInitialState(),
    watchSwitchLights(),
    watchGetRealSimulationStatus(),
    watchGetArtificialSimulationStatus(),
    watchPostDataToLearn(),
    watchGetStatistics(),
    watchPostStartSimulation()
  ]);
}
