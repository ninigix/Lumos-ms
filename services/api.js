import * as callApi from "./apiHelpers";

// GET

export function findLightSwitches() {
    const result = callApi.findLightSwitches();
    return result.then(json => json);
}

export function getSimulationStatus() {
    const result = callApi.getSimulationStatus();
    return result.then(json => json);
}

// POST

export function postSwitchLights(params) {
    const result = callApi.postSwitchLights(params);
    return result.then(json => json);
}

export function postDataToLearn(params) {
    const result = callApi.postDataToLearn(params);
    return result.then(json => json);
}