import { GET_TRADE_RECORD, GET_BUY_RECORD, GET_PRESENT_PRICE } from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    recordData: [],
    buyData: [],
    presentPrice: [],
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_TRADE_RECORD:
            return state.set('recordData', action.recordData);
        case GET_BUY_RECORD:
            return state.set('buyData', action.buyData);
        case GET_PRESENT_PRICE:
            return state.set('presentPrice', action.presentPrice);
        default:
            return state;
    }
}
