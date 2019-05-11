import { all } from "redux-saga/effects";

import { watchGetLightSwitches, watchSwitchLights } from "./lightSaga";
import {
  watchGetSimulationStatus,
  watchPostDataToLearn
} from "./simulationSaga";
import { watchGetStatistics } from "./statisticSaga";

export default function* rootSaga() {
  yield all([
    watchGetLightSwitches(),
    watchSwitchLights(),
    watchGetSimulationStatus(),
    watchPostDataToLearn(),
    watchGetStatistics()
  ]);
}
