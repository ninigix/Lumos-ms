import {all} from 'redux-saga/effects'

import {watchGetLightSwitches, watchSwitchLights} from './lightSaga';
import {watchGetSimulationStatus, watchPostDataToLearn} from './simulationSaga'

export default function* rootSaga() {
    yield all([
        watchGetLightSwitches(),
        watchSwitchLights(),
        watchGetSimulationStatus(),
        watchPostDataToLearn(),
    ])
}