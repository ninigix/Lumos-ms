import { call, fork, put, take, all } from "redux-saga/effects";
import * as actions from "../actions/lightActions";
import * as api from "../services/api";

function* getSwitchesInitialState(requestData) {
  const { response, error } = yield call(
    api.getSwitchesInitialState,
    requestData
  );
  if (response) {
    yield put(actions.getSwitchesInitialState.success(response, requestData));
  } else {
    yield put(actions.getSwitchesInitialState.failure(error));
  }
}

export function* watchGetSwitchesInitialState() {
  while (true) {
    const action = yield take(actions.GET_SWITCHES_INITIAL_STATE.REQUEST);
    if (action) {
      yield fork(getSwitchesInitialState, action.params);
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
