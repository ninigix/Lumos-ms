import isempty from 'lodash.isempty';


const SERVER_URL = "http://192.168.0.186:5000/";
const EXTERNAL_SERVER = "http://178.32.244.200:5000/";
// 192.168.0.186
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
                console.log('address', address)
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
    const endpoint = `${EXTERNAL_SERVER}analysis`;
    return callApi(endpoint, 'POST', params).then(value => ({response: value}));
}

// POST

export function postSwitchLights(params) {
    const address = `${SERVER_URL}front`;
    return callApi(address, 'POST', params).then(value => ({response: value}));
}

export function postDataToLearn(params) {
    console.log('PARAMS FOR DOROTA', params);
    const address = `${EXTERNAL_SERVER}learn`;
    return callApi(address, 'POST', params).then(value => ({response: value}));
}

export function postToggleSimulation(params) {
    if(params.isRealSimulation){
        const address = `${SERVER_URL}realSimulation`;
        return callApi(address, 'POST', params).then(value => ({response: value}));
    } else {
        console.log('PARAMS FOR DOROTA SIMULATION ', params);
        const address = `${SERVER_URL}simulation`;
        return callApi(address, 'POST', {data: params.data, speed: params.speed}).then(value => ({response: value}));
    }
}
