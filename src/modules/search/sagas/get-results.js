import {Octokit} from '@octokit/core';
import {call, put, takeLatest} from "redux-saga/effects";
import {getResultsFail, getResultsStart, getResultsSuccess} from '../actions/get-results';
import types from '../types';

export const httpCall = ({query}) => {
    const octokit = new Octokit({auth: process.env.AUTHORIZATION});
    return octokit.request('GET /search/repositories', {
        q: query,
        per_page: 20,
    }).then((response) => {
        return response.data.items;
    }).catch((err) => console.log(`Error retrieving repos for '${query}'\n\n${err}`));
}

function* getResults({query}) {
    try {
        yield put(getResultsStart());

        let results = yield call(httpCall, {query});

        yield put(getResultsSuccess(results));
    } catch (err) {
        yield put(getResultsFail(err));
    }
}

export default function* getResultsSaga() {
    yield takeLatest(types.SET_QUERY, getResults);
}
