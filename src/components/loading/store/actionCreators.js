import * as constants from './constants';

// 全局loading
export const changeLoading = (loading, loadingText) => ({
    type: constants.CHANGE_LOADING,
    loading,
    loadingText: loadingText ? loadingText : '数据加载中...'
});

