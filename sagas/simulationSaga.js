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