import {combineReducers} from 'redux-immutable';
import {reducer as loadingReducer} from '../components/loading/store';
import {reducer as tradeRecordReducer} from '../pages/home/store';

const reducer = combineReducers({
    global: loadingReducer,
    tradeRecord: tradeRecordReducer,
});

export default reducer;
