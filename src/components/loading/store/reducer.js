import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    loading: false,
    
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOADING:
            return state.set('loading', action.loading);
        default:
            return state;
    }
}
