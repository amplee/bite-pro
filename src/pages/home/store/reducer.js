import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    recordData: [1,3,4],
});

export default (state = defaultState, action) => {
    console.log('action', action);
    switch (action.type) {
        case constants.GET_TRADE_RECORD:
            return state.set('recordData', action.recordData);
        default:
            return state;
    }
}
