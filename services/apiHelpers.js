import isempty from 'lodash.isempty';

const SERVER_URL = "http://192.168.0.115:5000/";
const MATEUSZ_SERVER = "178.32.244.200";
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
    const address = `${SERVER_URL}switchesInitialState`;
    return callApi(address, 'GET').then(value => {
        return {response: value}
    });
}

export function getRealSimulationStatus() {
    const address = `${SERVER_URL}realSimulation`;
    return callApi(address, 'GET').then(value => {
        return {response: value}
    });
}

export function getArtificialSimulationStatus() {
    const address = `${SERVER_URL}artificialSimulation`;
    return callApi(address, 'GET').then(value => {
        return {response: value}
    });
}

export function getStatistics(params) {
    const endpoint = `${SERVER_URL}analysis`;
    return callApi(endpoint, 'POST', params).then(value => ({response: value}));
}

// POST

export function postSwitchLights(params) {
    const address = `${SERVER_URL}front`;
    return callApi(address, 'POST', params).then(value => ({response: value}));
}

export function postDataToLearn(params) {
    const address = `${SERVER_URL}learn`;
    return callApi(address, 'POST', params).then(value => ({response: value}));
}

export function postToggleSimulation(params) {
    if(params.isRealSimulation){
        const address = `${SERVER_URL}realSimulation`;
        return callApi(address, 'POST', params).then(value => ({response: value}));
    } else {
        const address = `${SERVER_URL}simulation`;
        return callApi(address, 'POST', {data: params.data, speed: params.speed}).then(value => ({response: value}));
    }
}
