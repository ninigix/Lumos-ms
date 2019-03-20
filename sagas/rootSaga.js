import {all} from 'redux-saga/effects'

import {watchGetLightSwitches} from './lightSaga';

export default function* rootSaga() {
    yield all([
        watchGetLightSwitches()
    ])
}