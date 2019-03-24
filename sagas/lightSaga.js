import { call, fork, put, take, all } from "redux-saga/effects";
import * as actions from "../actions/lightActions";
import * as api from "../services/api";

function* getLightSwitches(requestData) {
    const { response, error } = yield call(api.findLightSwitches, requestData);
    if (response) {
        yield put(actions.getLightSwitches.success(response, requestData));
    } else {
        yield put(actions.getLightSwitches.failure(error));
    }
}

export function* watchGetLightSwitches() {
    while (true) {
        const action = yield take(actions.GET_LIGHT_SWITCHES.REQUEST);
        if (action) {
            yield fork(getLightSwitches, action.params);
        }
    }
}

function* switchLights(requestData) {
    const { response, error } = yield call(api.postSwitchLights, requestData);
    if (response) {
        yield put(actions.switchLights.success(response, requestData));
    } else {
        yield put(actions.switchLights.failure(error));
    }
}

export function* watchSwitchLights() {
    while (true) {
        const action = yield take(actions.SWITCH_LIGHTS.REQUEST);
        if (action) {
            yield fork(switchLights, action.params);
        }
    }
}