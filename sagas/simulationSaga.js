import { call, fork, put, take, select } from "redux-saga/effects";

import * as fromSimulation from "../selectors/simulationSelector";
import * as actions from "../actions/simulationActions";
import * as api from "../services/api";

function* getRealSimulationStatus(requestData) {
  const { response, error } = yield call(
    api.getRealSimulationStatus,
    requestData
  );
  if (response) {
    yield put(actions.getRealSimulationState.success(response, requestData));
  } else {
    yield put(actions.getRealSimulationState.failure(error));
  }
}

export function* watchGetRealSimulationStatus() {
  while (true) {
    const action = yield take(actions.GET_REAL_SIMULATION_STATUS.REQUEST);
    if (action) {
      yield fork(getRealSimulationStatus, action.params);
    }
  }
}

function* getArtificialSimulationStatus(requestData) {
  const { response, error } = yield call(
    api.getArtificialSimulationStatus,
    requestData
  );
  if (response) {
    yield put(
      actions.getArtificialSimulationState.success(response, requestData)
    );
  } else {
    yield put(actions.getArtificialSimulationState.failure(error));
  }
}

export function* watchGetArtificialSimulationStatus() {
  while (true) {
    const action = yield take(actions.GET_ARTIFICIAL_SIMULATION_STATUS.REQUEST);
    if (action) {
      yield fork(getArtificialSimulationStatus, action.params);
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

function* postToggleSimulation(requestData) {
  const artificialSimulationStatus = yield select(
    fromSimulation.getArtificialSimulationStatus
  );
  const realSimulationStatus = yield select(
    fromSimulation.getRealSimulationStatus
  );
  const { response, error } = yield call(api.postToggleSimulation, {
    ...requestData,
    artificialSimulationStatus,
    realSimulationStatus
  });
  if (response) {
    yield put(actions.postToggleSimulation.success(response, requestData));
  } else {
    yield put(actions.postToggleSimulation.failure(error));
  }
}

export function* watchPostStartSimulation() {
  while (true) {
    const action = yield take(actions.POST_TOGGLE_SIMULATION.REQUEST);
    if (action) {
      yield fork(postToggleSimulation, action.params);
    }
  }
}
