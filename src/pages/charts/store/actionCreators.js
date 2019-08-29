import {
    recordData,
    buyData,
    presentPrice
} from '../../../services/api';
import { changeLoading } from '../../../components/loading/store/actionCreators';
import { message } from 'antd';
import { GET_TRADE_RECORD, GET_BUY_RECORD, GET_PRESENT_PRICE } from './constants';

// 返回交易数据
export const returnRecordData = (recordData) => ({
    type: GET_TRADE_RECORD,
    recordData,
});

// 返回买入记录数据
export const returnBuyData = (buyData) => ({
    type: GET_BUY_RECORD,
    buyData,
});

// 返回当前价格数据
export const returnPresentPrice = (presentPrice) => ({
    type: GET_PRESENT_PRICE,
    presentPrice,
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
            message.warn(data['description'], 1);
        }
    } catch (error) {
        message.warn(error, 1);
    }
}

// 获取买入记录数据
export const getBuyData = () => async (dispatch) => {
    try {
        dispatch(changeLoading(true));
        let {data} = await buyData();
        dispatch(changeLoading(false));
        if (data['code'] === 0) {
            dispatch(returnBuyData(data.resultMap));
        } else {
            message.warn(data['description'], 1);
        }
    } catch (error) {
        message.warn(error, 1);
    }
}


// 获取买入记录数据
export const getPresentPrice = (params) => async (dispatch) => {
    try {
        dispatch(changeLoading(true));
        let {data} = await presentPrice(params);
        dispatch(changeLoading(false));
        if (data['code'] === 0) {
            dispatch(returnPresentPrice(data.result));
        } else {
            message.warn(data['description'], 1);
        }
    } catch (error) {
        message.warn(error, 1);
    }
}

