import * as constants from './constants';
import {
    recordData,
    buyData
} from '../../../services/api';
import { changeLoading } from '../../../components/loading/store/actionCreators';
import { message } from 'antd';

// 返回交易数据
export const returnRecordData = (recordData) => ({
    type: constants.GET_TRADE_RECORD,
    recordData,
});

// 返回买入记录数据
export const returnBuyData = (buyData) => ({
    type: constants.GET_BUY_RECORD,
    buyData,
});


// 获取交易数据
export const getRecordData = () => async (dispatch) => {
    try {
        dispatch(changeLoading(true));
        let {data} = await recordData();
        dispatch(changeLoading(false));
        if (data['code'] === 0) {
            dispatch(returnRecordData(data.resultList));
        } else {
            message.warn(data['message'], 1);
        }
    } catch (error) {
        message.warn(error, 1);
    }
}

// 获取交易数据
export const getBuyData = () => async (dispatch) => {
    try {
        dispatch(changeLoading(true));
        let {data} = await buyData();
        dispatch(changeLoading(false));
        if (data['code'] === 0) {
            dispatch(returnBuyData(data.resultMap));
        } else {
            message.warn(data['message'], 1);
        }
    } catch (error) {
        message.warn(error, 1);
    }
}

