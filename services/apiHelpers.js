import isempty from 'lodash.isempty';

const SERVER_URL = "http://localhost:5000/";

async function callApi(endpoint, method, params = {}) {
    const apiPath = `${SERVER_URL}` + `${endpoint}`;
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


// statistics JSON
// {
//     1
// :
//     [{
//         'time_on': Timedelta('0 days 07:38:59'),
//         'light_changes': 106,
//         'most_popular_days_changes': [1, 0, 0, 0, 1, 10, 18, 9, 4, 3, 0, 7, 4, 0, 3, 5, 4, 2, 3, 4, 8, 7, 8, 5],
//         'price': 0.2524408333333334,
//         'most_popular_days': [0, 47.333333333333336, 979.7833333333333, 101.1, 87.38333333333334, 0, 0],
//         'most_popular_hours': [60, 60, 60, 60, 60, 31, 67, 11, 14, 1, 0, 32, 65, 60, 62, 58, 64, 60, 61, 73, 81, 73, 26, 51],
//         'kwh': 0.45898333333333335,
//         'most_popular_hours_changes': [1, 0, 0, 0, 1, 10, 18, 9, 4, 3, 0, 7, 4, 0, 3, 5, 4, 2, 3, 4, 8, 7, 8, 5]
//     }], 2
// :
//     [{
//         'time_on': Timedelta('0 days 02:46:38'),
//         'light_changes': 5,
//         'most_popular_days_changes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0],
//         'price': 0.09164833333333333,
//         'most_popular_days': [0, 0, 135.28333333333333, 31.35, 0.0, 0, 0],
//         'most_popular_hours': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 66, 62, 0, 0],
//         'kwh': 0.16663333333333333,
//         'most_popular_hours_changes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0]
//     }], 3
// :
//     [{
//         'time_on': Timedelta('0 days 02:41:04'),
//         'light_changes': 30,
//         'most_popular_days_changes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 9, 4, 3, 2, 2],
//         'price': 0.08858666666666667,
//         'most_popular_days': [0, 0, 27.51666666666667, 67.51666666666667, 58.550000000000004, 0, 0],
//         'most_popular_hours': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 20, 38, 56, 8, 0, 16],
//         'kwh': 0.16106666666666666,
//         'most_popular_hours_changes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 9, 4, 3, 2, 2]
//     }]
// }

// POST

export function postSwitchLights(params) {
    const endpoint = "front";
    return callApi(endpoint, 'POST', params).then(value => ({response: value}));
}

export function postDataToLearn(params) {
    const endpoint = "learn";
    return callApi(endpoint, 'POST', params).then(value => ({response: value}));
}


