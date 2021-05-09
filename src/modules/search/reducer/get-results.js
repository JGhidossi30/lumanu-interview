import types from '../types';

export const getResultsStart = (state) => ({
    ...state,
    loaders: {
        ...state.loaders,
        queryLoading: true,
    },
});

export const getResultsSuccess = (state, {results}) => ({
    ...state,
    loaders: {
        ...state.loaders,
        queryLoading: false,
    },
    results,
});

export const getResultsFail = (state, {error}) => ({
    ...state,
    loaders: {
        ...state.loaders,
        queryLoading: false,
    },
    error,
});

export default {
    [types.SET_QUERY_START]: getResultsStart,
    [types.SET_QUERY_SUCCESS]: getResultsSuccess,
    [types.SET_QUERY_FAIL]: getResultsFail,
};
