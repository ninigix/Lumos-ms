// import axios from "axios";

const SERVER_URL = "http://localhost:5000/";

// POST

export function findLightSwitches() {
    const endpoint = "microcontrollers";
    // const requestParams = { query: params };
    return callApi(endpoint).then(value => ({response: value}));
}

async function callApi(endpoint, params = {}) {
    const apiPath = `${SERVER_URL}` + `${endpoint}`;
    try {
        let response = await fetch(apiPath);
        let responseJson = await response.json();
        console.log('responseJson', responseJson);
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}
