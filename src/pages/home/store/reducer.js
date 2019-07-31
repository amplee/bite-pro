import { GET_TRADE_RECORD, GET_BUY_RECORD } from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    recordData: [],
    buyData: [],
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_TRADE_RECORD:
            return state.set('recordData', action.recordData);
        case GET_BUY_RECORD:
            return state.set('buyData', action.buyData);
        default:
            return state;
    }
}
