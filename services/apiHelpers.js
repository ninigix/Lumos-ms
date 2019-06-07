import isempty from 'lodash.isempty';

const SERVER_URL = "http://192.168.0.115:5000/";
const EXTERNAL_SERVER = "178.32.244.200";
const RASPBERRY_PI = "http://192.168.0.186:5000"/
// const SERVER_URL = "http://192.168.0.192:5000/";

async function callApi(address, method, params = {}) {
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
        return fetch(address, additionalParams).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong');
            }
        })
            .then((responseJson) => {
                return responseJson
            })
            .catch((error) => {
                console.log(error)
            });
}

// GET

export function getSwitchesInitialState() {
    const address = `${RASPBERRY_PI}switchesInitialState`;
    return callApi(address, 'GET').then(value => {
        return {response: value}
    });
}

export function getRealSimulationStatus() {
    const address = `${RASPBERRY_PI}realSimulation`;
    return callApi(address, 'GET').then(value => {
        return {response: value}
    });
}

export function getArtificialSimulationStatus() {
    const address = `${RASPBERRY_PI}artificialSimulation`;
    return callApi(address, 'GET').then(value => {
        return {response: value}
    });
}

export function getStatistics(params) {
    const endpoint = `${EXTERNAL_SERVER}analysis`;
    return callApi(endpoint, 'POST', params).then(value => ({response: value}));
}

// POST

export function postSwitchLights(params) {
    const address = `${RASPBERRY_PI}front`;
    return callApi(address, 'POST', params).then(value => ({response: value}));
}

export function postDataToLearn(params) {
    const address = `${EXTERNAL_SERVER}learn`;
    return callApi(address, 'POST', params).then(value => ({response: value}));
}

export function postToggleSimulation(params) {
    if(params.isRealSimulation){
        const address = `${RASPBERRY_PI}realSimulation`;
        return callApi(address, 'POST', params).then(value => ({response: value}));
    } else {
        const address = `${RASPBERRY_PI}simulation`;
        return callApi(address, 'POST', {data: params.data, speed: params.speed}).then(value => ({response: value}));
    }
}
