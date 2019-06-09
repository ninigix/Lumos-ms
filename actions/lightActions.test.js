import * as actions from './lightActions';

describe('GET_SWITCHES_INITIAL_STATE actions', () => {
    it('should create an action to request', () => {
        const expectedAction = {
            type: 'GET_SWITCHES_INITIAL_STATE_REQUEST',
            params: { id: 123 },
        };
        expect(actions.getSwitchesInitialState.request({ id: 123 })).toEqual(expectedAction);
    });

    it('should create an action when request success', () => {
        const expectedAction = {
            type: 'GET_SWITCHES_INITIAL_STATE_SUCCESS',
        };
        expect(actions.getSwitchesInitialState.success()).toEqual(expectedAction);
    });

    it('should create an action when request failed', () => {
        const expectedAction = {
            type: 'GET_SWITCHES_INITIAL_STATE_FAILURE',
        };
        expect(actions.getSwitchesInitialState.failure()).toEqual(expectedAction);
    });
});

describe('SWITCH_LIGHTS actions', () => {
    it('should create an action to request', () => {
        const expectedAction = {
            type: 'SWITCH_LIGHTS_REQUEST',
            params: { id: 123 },
        };
        expect(actions.switchLights.request({ id: 123 })).toEqual(expectedAction);
    });

    it('should create an action when request success', () => {
        const expectedAction = {
            type: 'SWITCH_LIGHTS_SUCCESS',
        };
        expect(actions.switchLights.success()).toEqual(expectedAction);
    });

    it('should create an action when request failed', () => {
        const expectedAction = {
            type: 'SWITCH_LIGHTS_FAILURE',
        };
        expect(actions.switchLights.failure()).toEqual(expectedAction);
    });
});