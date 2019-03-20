import * as callApi from "./apiHelpers";

// GET

export function findLightSwitches() {
    const result = callApi.findLightSwitches();
    console.log('result', result);
    return result.then(json => json);
}