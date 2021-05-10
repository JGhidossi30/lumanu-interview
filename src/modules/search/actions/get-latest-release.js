import types from '../types';

export const getLatestReleaseStart = () => ({
    type: types.GET_LATEST_RELEASE_START,
});

export const getLatestRelease = (owner, repo, index) => ({
    type: types.GET_LATEST_RELEASE,
    owner,
    repo,
    index,
});

export const getLatestReleaseSuccess = (releaseNotes, index) => ({
    type: types.GET_LATEST_RELEASE_SUCCESS,
    releaseNotes,
    index,
});

export const getLatestReleaseFail = (error) => ({
    type: types.GET_LATEST_RELEASE_FAIL,
    error,
});
