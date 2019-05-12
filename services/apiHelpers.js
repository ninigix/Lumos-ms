import isempty from 'lodash.isempty';

// const SERVER_URL = "http://localhost:5000/";
const SERVER_URL = "http://localhost:5000/";
const MATEUSZ_SERVER = "178.32.244.200";
const DOROTA_LOCAL_SERVER = "http://192.168.0.192:5000/";

async function callApi(endpoint, method, params = {}) {
    // const apiPath = `${SERVER_URL}` + `${endpoint}`;
    const apiPath = `${endpoint}`;
    try {
        let additionalParams = {method};
        if (!isempty(params)) {
            additionalParams = {
                ...additionalParams,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...params
                })
            }
        }
        const response = await fetch(apiPath, additionalParams);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}


// GET

export function findLightSwitches() {
    const endpoint = "microcontrollers";
    return callApi(endpoint, 'GET').then(value => ({response: value}));
}

export function getSimulationStatus() {
    const endpoint = "simulation";
    return callApi(endpoint, 'GET').then(value => ({response: value}));
}

export function getStatistics() {
    const endpoint = `${DOROTA_LOCAL_SERVER}analysis`;
    return callApi(endpoint, 'POST').then(value => ({response: value}));
}

// POST

export function postSwitchLights(params) {
    const endpoint = "front";
    return callApi(endpoint, 'POST', params).then(value => ({response: value}));
}

export function postDataToLearn(params) {
    const endpoint = `${DOROTA_LOCAL_SERVER}learn`;
    return callApi(endpoint, 'POST', params).then(value => ({response: value}));
}

export function postStartSimulation(params) {
    const endpoint = `${DOROTA_LOCAL_SERVER}simulation`;
    return callApi(endpoint, 'POST', {data: params, speed: "400"}).then(value => ({response: value}));
}
