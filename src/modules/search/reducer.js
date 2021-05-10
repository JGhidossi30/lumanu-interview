import getLatestReleaseReducer from './reducer/get-latest-release';
import getResultsReducer from './reducer/get-results';
import refreshPage from './reducer/refresh-page';
import types from './types';

const initialState = {
    loaders: {
        refreshingPage: false,
        releaseLoading: false,
        queryLoading: false,
    },
    newReleases: [],
    releaseNotes: null,
    repos: JSON.parse(localStorage.getItem('repos')) ?? [],
    results: [],
    query: '',
};

export const addRepo = (state, {repo}) => {
    const repos = [...state.repos, {data: repo}];
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

export const setReleaseNotes = (state, {index}) => ({
    ...state,
    releaseNotes: (state.repos[index].notes?.body ?? 'Release Notes Unavailable')
});

export const setQuery = (state, {query}) => ({...state, query});

export const updateReleaseNotes = (state, {index}) => {
    let newReleases = state.newReleases;
    let repos = state.repos;
    repos[index].notes = newReleases[index];
    delete newReleases[index];
    localStorage.setItem('repos', JSON.stringify(repos));
    return ({
        ...state,
        repos,
        newReleases,
    });
}

const reducer = {
    [types.ADD_REPO]: addRepo,
    [types.REMOVE_REPO]: removeRepo,
    [types.SET_RELEASE_NOTES]: setReleaseNotes,
    [types.SET_QUERY]: setQuery,
    [types.UPDATE_RELEASE_NOTES]: updateReleaseNotes,
    ...getLatestReleaseReducer,
    ...getResultsReducer,
    ...refreshPage,
};

export default (state = initialState, action = {}) => reducer[action.type] ? reducer[action.type](state, action) : state;
