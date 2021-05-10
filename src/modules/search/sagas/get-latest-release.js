import {Octokit} from '@octokit/core';
import {call, put, takeLatest} from "redux-saga/effects";
import {getLatestReleaseFail, getLatestReleaseStart, getLatestReleaseSuccess} from '../actions/get-latest-release';
import types from '../types';

export const httpCall = ({owner, repo}) => {
    const octokit = new Octokit({auth: process.env.REACT_APP_AUTHORIZATION});
    return octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
        owner,
        repo,
    }).then((response) => {
        return response.data;
    });
}

function* getLatestRelease({owner, repo, index}) {
    try {
        yield put(getLatestReleaseStart());

        let results = yield call(httpCall, {owner, repo});

        yield put(getLatestReleaseSuccess(results, index));
    } catch (err) {
        yield put(getLatestReleaseFail(err));
    }
}

export default function* getLatestReleaseSaga() {
    yield takeLatest(types.GET_LATEST_RELEASE, getLatestRelease);
}
