import * as actions from './actions';
import eddReducer from './reducer';
import getResultsSaga from './sagas/get-results';

export default eddReducer;
export {
    actions,
    getResultsSaga,
};
