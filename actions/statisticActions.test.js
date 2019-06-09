import * as actions from './statisticActions';

describe('GET_STATISTICS actions', () => {
    it('should create an action to request', () => {
        const expectedAction = {
            type: 'GET_STATISTICS_REQUEST',
            params: { id: 123 },
        };
        expect(actions.getStatistics.request({ id: 123 })).toEqual(expectedAction);
    });

    it('should create an action when request success', () => {
        const expectedAction = {
            type: 'GET_STATISTICS_SUCCESS',
        };
        expect(actions.getStatistics.success()).toEqual(expectedAction);
    });

    it('should create an action when request failed', () => {
        const expectedAction = {
            type: 'GET_STATISTICS_FAILURE',
        };
        expect(actions.getStatistics.failure()).toEqual(expectedAction);
    });
});
