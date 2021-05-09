import {routerMiddleware, routerReducer} from 'react-router-redux';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';

export default (
    reducers,
    sagas,
    history,
    initialState = {},
    additionalMiddleware = [],
    clearStateActionName,
) => {
    const appReducer = combineReducers({
        routing: routerReducer,
        ...reducers,
    });

    const rootSaga = function* rootSaga() {
        yield all([...sagas]);
    };

    const sagaMiddleware = createSagaMiddleware();

    let middleware = [
        routerMiddleware(history),
        sagaMiddleware,
        ...additionalMiddleware,
    ];

    if (process.env.NODE_ENV !== 'production') {
        middleware = [...middleware, createLogger({collapsed: true})];
    }

    const composeEnhancers = (process.env.NODE_ENV !== 'production'
        && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
        || compose;

    const store = createStore(
        (state, action) => {
            if (action.type === clearStateActionName) {
                const newState = appReducer({}, {});
                return {
                    ...newState,
                    content: state.content,
                    browser: {...state.browser, loading: false},
                };
            }
            return appReducer(state, action);
        },
        initialState,
        composeEnhancers(applyMiddleware(...middleware)),
    );

    sagaMiddleware.run(rootSaga);

    return store;
};
