import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    recordData: [],
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_TRADE_RECORD:
            return state.set('recordData', action.recordData);
        default:
            return state;
    }
}
