import types from '../types';

export const getResultsStart = () => ({
    type: types.SET_QUERY_START,
});

export const getResultsSuccess = (results) => ({
    type: types.SET_QUERY_SUCCESS,
    results,
});

export const getResultsFail = (error) => ({
    type: types.SET_QUERY_FAIL,
    error,
});
