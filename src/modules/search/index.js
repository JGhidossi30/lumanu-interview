import * as actions from './actions';
import eddReducer from './reducer';
import getLatestReleaseSaga from './sagas/get-latest-release';
import getResultsSaga from './sagas/get-results';
import refreshPageSaga from './sagas/refresh-page';

export default eddReducer;
export {
    actions,
    getLatestReleaseSaga,
    getResultsSaga,
    refreshPageSaga,
};
