import types from '../types';

export const getLatestReleaseStart = () => ({
    type: types.GET_LATEST_RELEASE_START,
});

export const getLatestRelease = ({owner, repo}) => ({
    type: types.GET_LATEST_RELEASE,
    owner,
    repo,
});

export const getLatestReleaseSuccess = (releaseNotes) => ({
    type: types.GET_LATEST_RELEASE_SUCCESS,
    releaseNotes,
});

export const getLatestReleaseFail = (error) => ({
    type: types.GET_LATEST_RELEASE_FAIL,
    error,
});
