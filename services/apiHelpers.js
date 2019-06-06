import isempty from 'lodash.isempty';

const SERVER_URL = "http://localhost:5000/";
const MATEUSZ_SERVER = "178.32.244.200";
const DOROTA_LOCAL_SERVER = "http://192.168.0.192:5000/";

async function callApi(address, method, params = {}) {
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
        const response = await fetch(address, additionalParams);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

// GET

export function getSwitchesInitialState() {
    const address = `${SERVER_URL}switchesInitialState`;
    return callApi(address, 'GET').then(value => ({response: value}));
}

export function getRealSimulationStatus() {
    const address = `${SERVER_URL}realSimulation`;
    return callApi(address, 'GET').then(value => ({response: value}));
}

export function getArtificialSimulationStatus() {
    const address = `${SERVER_URL}artificialSimulation`;
    return callApi(address, 'GET').then(value => ({response: value}));
}

export function getStatistics(params) {
    // const endpoint = `${DOROTA_LOCAL_SERVER}analysis`;
    // return callApi(endpoint, 'POST').then(value => ({response: value}));
    return {response: {
            88: {
                "light_changes": 1642,
                "time_on": "2 days 03:45:14",
                "most_popular_hours_changes": [16, 11, 7, 4, 9, 53, 158, 90, 49, 42, 37, 25, 31, 58, 49, 63, 344, 83, 99, 94, 93, 104, 97, 26],
                "kwh": {"price": 0.12387833333333335, "kwh": 0.22523333333333334},
                "most_popular_days_changes": [197, 195, 173, 205, 155, 171, 546],
                "most_popular_days": [3426.733333333334, 3761.183333333334, 5527.849999999999, 4673.133333333336, 4193.966666666668, 3621.9833333333336, 3523.633333333334],
                "most_popular_hours": [10, 7, 0, 2, 23, 211, 629, 322, 106, 86, 69, 29, 194, 126, 55, 87, 87, 51, 117, 263, 195, 245, 145, 19],
                "price": {"price": 0.12387833333333335, "kwh": 0.22523333333333334},
                "bulb_consumption": 13.979305555555557
            },
            104: {
                "light_changes": 82,
                "time_on": "2 days 04:02:55",
                "most_popular_hours_changes": [3, 1, 0, 0, 1, 0, 0, 0, 2, 0, 0, 3, 4, 1, 0, 3, 3, 10, 6, 9, 5, 8, 16, 7],
                "kwh": {"price": 0.13360416666666666, "kwh": 0.24291666666666664},
                "most_popular_days_changes": [7, 16, 6, 7, 16, 18, 12],
                "most_popular_days": [2969.8, 1361.2833333333333, 3714.116666666667, 3417.2833333333338, 2541.566666666667, 3567.083333333333, 2518.75],
                "most_popular_hours": [19, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 188, 495, 632, 738, 672, 307, 2],
                "price": {"price": 0.13360416666666666, "kwh": 0.24291666666666664},
                "bulb_consumption": 28.11828703703704
            },
            // 105: {
            //     "light_changes": 783,
            //     "time_on": "1 days 05:06:11",
            //     "most_popular_hours_changes": [4, 0, 1, 0, 0, 1, 7, 4, 7, 0, 1, 1, 0, 6, 1, 3, 47, 73, 139, 119, 126, 130, 77, 36],
            //     "kwh": {"price": 0.16840083333333336, "kwh": 0.30618333333333336},
            //     "most_popular_days_changes": [126, 100, 94, 74, 128, 101, 160],
            //     "most_popular_days": [5732.716666666666, 5538.800000000001, 3457.216666666666, 3484.9333333333334, 5341.183333333334, 3415.6166666666677, 4179.450000000001],
            //     "most_popular_hours": [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 60, 60, 44, 0, 0, 49, 166, 242, 221, 360, 269, 124, 24],
            //     "price": {"price": 0.16840083333333336, "kwh": 0.30618333333333336},
            //     "bulb_consumption": 10.680532407407407
            // }
        }}
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
        return callApi(address, 'POST', params).then(value => ({response: value}));
    }
}
