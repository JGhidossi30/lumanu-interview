import types from '../types';

export const getResultsStart = () => ({
    type: types.GET_RESULTS_START,
});

export const getResults = (query) => ({
    type: types.GET_RESULTS,
    query
});
export const getResultsSuccess = (results) => ({
    type: types.GET_RESULTS_SUCCESS,
    results,
});

export const getResultsFail = (error) => ({
    type: types.GET_RESULTS_FAIL,
    error,
});
