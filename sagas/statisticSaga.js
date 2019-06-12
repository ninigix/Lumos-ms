import { call, fork, put, take, all } from "redux-saga/effects";

import * as actions from "../actions/statisticActions";
import * as api from "../services/api";

function* getStatistics(requestData) {
  const { response, error } = yield call(api.getStatistics, requestData);
  if (response) {
    yield put(actions.getStatistics.success(response, requestData));
  } else {
    yield put(actions.getStatistics.failure(error));
  }
}

export function* watchGetStatistics() {
  while (true) {
    const action = yield take(actions.GET_STATISTICS.REQUEST);
    if (action) {
      yield fork(getStatistics, action.params);
    }
  }
}
