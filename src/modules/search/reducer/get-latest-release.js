import types from '../types';

export const getLatestReleaseStart = (state) => ({
    ...state,
    loaders: {
        ...state.loaders,
        releaseLoading: true,
    },
});

export const getLatestReleaseSuccess = (state, {releaseNotes}) => ({
    ...state,
    loaders: {
        ...state.loaders,
        releaseLoading: false,
    },
    releaseNotes,
});

export const getLatestReleaseFail = (state, {error}) => ({
    ...state,
    loaders: {
        ...state.loaders,
        releaseLoading: false,
    },
    error,
});

export default {
    [types.GET_LATEST_RELEASE_START]: getLatestReleaseStart,
    [types.GET_LATEST_RELEASE_SUCCESS]: getLatestReleaseSuccess,
    [types.GET_LATEST_RELEASE_FAIL]: getLatestReleaseFail,
};
