import types from '../types';

export const refreshPageStart = (state) => ({
    ...state,
    loaders: {
        ...state.loaders,
        refreshingPage: true,
    },
});

export const refreshPageSuccess = (state, {newReleases}) => ({
    ...state,
    loaders: {
        ...state.loaders,
        refreshingPage: false,
    },
    newReleases,
});

export const refreshPageFail = (state, {error}) => ({
    ...state,
    loaders: {
        ...state.loaders,
        refreshingPage: false,
    },
    error,
});

export default {
    [types.REFRESH_PAGE_START]: refreshPageStart,
    [types.REFRESH_PAGE_SUCCESS]: refreshPageSuccess,
    [types.REFRESH_PAGE_FAIL]: refreshPageFail,
};
