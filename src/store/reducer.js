import {combineReducers} from 'redux-immutable';
import {reducer as loadingReducer} from '../components/loading/store';

const reducer = combineReducers({
    global: loadingReducer,
});

export default reducer;
