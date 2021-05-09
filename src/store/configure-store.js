import { call } from 'redux-saga/effects';
import configureStoreBoilerplate from './configure-store-boilerplate';

import searchReducer, {
    getResultsSaga,
} from '../modules/search';

export const configureStore = (history, initialState = {}) => configureStoreBoilerplate(
    {
        search: searchReducer,
    }, [
        call(getResultsSaga),
    ],
    history,
    initialState,
);
