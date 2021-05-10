import types from '../types';

export const getResultsStart = (state) => ({
    ...state,
    loaders: {
        ...state.loaders,
        queryLoading: true,
    },
});

export const getResultsSuccess = (state, {results}) => {
    const newResults = results.filter((result) => {
        return !state.repos.some((repo) => repo.id === result.id);
    });
    return ({
        ...state,
        loaders: {
            ...state.loaders,
            queryLoading: false,
        },
        results: newResults,
    });
}

export const getResultsFail = (state, {error}) => ({
    ...state,
    loaders: {
        ...state.loaders,
        queryLoading: false,
    },
    results: [],
    error,
});

export default {
    [types.GET_RESULTS_START]: getResultsStart,
    [types.GET_RESULTS_SUCCESS]: getResultsSuccess,
    [types.GET_RESULTS_FAIL]: getResultsFail,
};
