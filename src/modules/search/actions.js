import types from './types';

export const addRepo = (repo) => ({
    type: types.ADD_REPO,
    repo,
});

export const removeRepo = (index) => ({
    type: types.REMOVE_REPO,
    index,
});

export const setQuery = (query) => ({
    type: types.SET_QUERY,
    query,
});
