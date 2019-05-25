import { all } from "redux-saga/effects";

import { watchGetSwitchesInitialState, watchSwitchLights } from "./lightSaga";
import {
  watchGetrealSimulationStatus,
  watchPostDataToLearn,
  watchPostStartSimulation
} from "./simulationSaga";
import { watchGetStatistics } from "./statisticSaga";

export default function* rootSaga() {
  yield all([
    watchGetSwitchesInitialState(),
    watchSwitchLights(),
    watchGetrealSimulationStatus(),
    watchPostDataToLearn(),
    watchGetStatistics(),
    watchPostStartSimulation()
  ]);
}
