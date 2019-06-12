import * as callApi from "./apiHelpers";

// GET

export function getSwitchesInitialState() {
    const result = callApi.getSwitchesInitialState();
    return result;
    // return result.then(json => {
    //     console.log('getSwitchesInitialState json', json);
    //     return json;
    // });
}

export function getRealSimulationStatus() {
    const result = callApi.getRealSimulationStatus();
    return result.then(json => {
        return json
    });
}

export function getArtificialSimulationStatus() {
    const result = callApi.getArtificialSimulationStatus();
    return result.then(json => {
        return json
    });
}

export function getStatistics(params) {
    const result = callApi.getStatistics(params);
    return result; //.then(json => json);
}


// POST

export function postSwitchLights(params) {
    const result = callApi.postSwitchLights(params);
    return result.then(json => {
        return json;
    });
}

export function postDataToLearn(params) {
    const result = callApi.postDataToLearn(params);
    return result.then(json => json);
}

export function postToggleSimulation(params) {
    const result = callApi.postToggleSimulation(params);
    return result.then(json => json);
}