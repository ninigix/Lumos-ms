export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export function action(type, payload = {}) {
  return { type, ...payload };
}

export function createObject(base) {
  return {
    REQUEST: base + REQUEST,
    SUCCESS: base + SUCCESS,
    FAILURE: base + FAILURE
  };
}

export function createAction(actionType) {
  return {
    request: params => action(actionType.REQUEST, { params }),
    success: response => action(actionType.SUCCESS, { response }),
    failure: error => action(actionType.FAILURE, { error })
  };
}
