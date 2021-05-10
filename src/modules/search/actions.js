import types from './types';

export const addRepo = (repo) => ({
    type: types.ADD_REPO,
    repo,
});

export const removeRepo = (index) => ({
    type: types.REMOVE_REPO,
    index,
});

export const setReleaseNotes = (index) => ({
    type: types.SET_RELEASE_NOTES,
    index,
});

export const setQuery = (query) => ({
    type: types.SET_QUERY,
    query,
});

export const updateReleaseNotes = (index) => ({
    type: types.UPDATE_RELEASE_NOTES,
    index,
});
