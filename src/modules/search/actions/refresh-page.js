import types from '../types';

export const refreshPageStart = () => ({
    type: types.REFRESH_PAGE_START,
});

export const refreshPage = (repos) => ({
    type: types.REFRESH_PAGE,
    repos,
});

export const refreshPageSuccess = (newReleases) => ({
    type: types.REFRESH_PAGE_SUCCESS,
    newReleases,
});

export const refreshPageFail = (error) => ({
    type: types.REFRESH_PAGE_FAIL,
    error,
});
