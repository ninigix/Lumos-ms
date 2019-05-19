import { call, fork, put, take } from "redux-saga/effects";
import * as actions from "../actions/simulationActions";
import * as api from "../services/api";

function* getSimulationStatus(requestData) {
  const { response, error } = yield call(api.getSimulationStatus, requestData);
  if (response) {
    yield put(actions.getSimulationState.success(response, requestData));
  } else {
    yield put(actions.getSimulationState.failure(error));
  }
}

export function* watchGetSimulationStatus() {
  while (true) {
    const action = yield take(actions.GET_SIMULATION_STATUS.REQUEST);
    if (action) {
      yield fork(getSimulationStatus, action.params);
    }
  }
}

function* postDataToLearn(requestData) {
  const { response, error } = yield call(api.postDataToLearn, requestData);
  if (response) {
    yield put(actions.postLearnData.success(response, requestData));
  } else {
    yield put(actions.postLearnData.failure(error));
  }
}

export function* watchPostDataToLearn() {
  while (true) {
    const action = yield take(actions.POST_LEARN_DATA.REQUEST);
    if (action) {
      yield fork(postDataToLearn, action.params);
    }
  }
}

function* postStartSimulation(requestData) {
  const { response, error } = yield call(api.postStartSimulation, requestData);
  if (response) {
    yield put(actions.postStartSimulation.success(response, requestData));
  } else {
    yield put(actions.postStartSimulation.failure(error));
  }
}

export function* watchPostStartSimulation() {
  console.log("watchPostStartSimulation");
  while (true) {
    const action = yield take(actions.POST_START_SIMULATION.REQUEST);
    if (action) {
      console.log("action.params", action.params);
      yield fork(postStartSimulation, action.params);
    }
  }
}
