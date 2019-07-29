import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    loading: false,
    loadingText: '数据加载中...',
    needAlert: false,
    title: '温馨提示',
    content: '温馨提示内容',
    okText: '我知道了',
    currentUserType: '',
    brandId: '',
    storeId: '',
    regionId: '',
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOADING:
            return state.merge({
                loading: action.loading,
                loadingText: action.loadingText,
            });
        default:
            return state;
    }
}
