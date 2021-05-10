import { call } from 'redux-saga/effects';
import configureStoreBoilerplate from './configure-store-boilerplate';

import searchReducer, {
    getLatestReleaseSaga,
    getResultsSaga,
    refreshPageSaga,
} from '../modules/search';

export const configureStore = (history, initialState = {}) => configureStoreBoilerplate(
    {
        search: searchReducer,
    }, [
        call(getLatestReleaseSaga),
        call(getResultsSaga),
        call(refreshPageSaga),
    ],
    history,
    initialState,
);
