import getResultsReducer from './reducer/get-results';
import types from './types';

const initialState = {
    loaders: {
        queryLoading: false,
    },
    releaseNotes: '',
    repos: JSON.parse(localStorage.getItem('repos')) ?? [],
    results: [],
    query: '',
};

export const addRepo = (state, {repo}) => {
    const repos = [...state.repos, repo];
    localStorage.setItem('repos', JSON.stringify(repos));
    return ({
        ...state,
        repos,
    });
};

export const removeRepo = (state, {index}) => {
    const repos = [...state.repos.slice(0, index), ...state.repos.slice(index + 1)];
    localStorage.setItem('repos', JSON.stringify(repos));
    return ({
        ...state,
        repos,
    });
};

export const setQuery = (state, {query}) => ({...state, query});

const reducer = {
    [types.ADD_REPO]: addRepo,
    [types.REMOVE_REPO]: removeRepo,
    [types.SET_QUERY]: setQuery,
    ...getResultsReducer,
};

export default (state = initialState, action = {}) => reducer[action.type] ? reducer[action.type](state, action) : state;
