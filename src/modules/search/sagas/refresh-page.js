import {Octokit} from '@octokit/core';
import {call, put, takeLatest} from "redux-saga/effects";
import {refreshPageFail, refreshPageStart, refreshPageSuccess} from '../actions/refresh-page';
import types from '../types';

export const httpCall = ({owner, repo}) => {
    const octokit = new Octokit({auth: process.env.REACT_APP_AUTHORIZATION});
    return octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
        owner,
        repo,
    }).then((response) => {
        return response.data;
    }).catch((err) => console.log(err));
}

function* refreshPage({repos}) {
    try {
        yield put(refreshPageStart());

        let newReleases = [];
        for (let i = 0; i < repos.length; ++i) {
            const owner = repos[i].data.owner.login;
            const repo = repos[i].data.name;
            let result = yield call(httpCall, {owner, repo});
            JSON.stringify(result) !== JSON.stringify(repos[i].notes) && newReleases.push(result);
        }

        yield put(refreshPageSuccess(newReleases));
    } catch (err) {
        yield put(refreshPageFail(err));
    }
}

export default function* refreshPageSaga() {
    yield takeLatest(types.REFRESH_PAGE, refreshPage);
}
