import types from '../types';

export const getLatestReleaseStart = (state) => ({
    ...state,
    loaders: {
        ...state.loaders,
        releaseLoading: true,
    },
});

export const getLatestReleaseSuccess = (state, {releaseNotes, index}) => {
    state.repos[index].notes = releaseNotes;
    localStorage.setItem('repos', JSON.stringify(state.repos));
    return ({
        ...state,
        loaders: {
            ...state.loaders,
            releaseLoading: false,
        },
    });
}

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
