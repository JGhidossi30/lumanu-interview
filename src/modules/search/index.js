import * as actions from './actions';
import eddReducer from './reducer';
import getLatestReleaseSaga from './sagas/get-latest-release';
import getResultsSaga from './sagas/get-results';

export default eddReducer;
export {
    actions,
    getLatestReleaseSaga,
    getResultsSaga,
};
