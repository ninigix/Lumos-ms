import {all} from 'redux-saga/effects'

import {watchGetLightSwitches, watchSwitchLights} from './lightSaga';

export default function* rootSaga() {
    yield all([
        watchGetLightSwitches(),
        watchSwitchLights()
    ])
}