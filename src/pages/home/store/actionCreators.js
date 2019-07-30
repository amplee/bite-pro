import * as constants from './constants';
import {
    recordData
} from '../../../services/api';
import {changeLoading} from '../../../components/loading/store/actionCreators';
import { message } from 'antd';

// 返回交易数据
export const returnRecordData = (recordData) => ({
    type: constants.GET_TRADE_RECORD,
    recordData,
});


// 获取交易数据
export const getRecordData = () => async (dispatch) => {
    try {
        dispatch(changeLoading(true));
        let {data} = await recordData();
        dispatch(changeLoading(false));
        if (data['code'] === 0) {
            console.log('data.resultList', data.resultList)
            dispatch(returnRecordData(data.resultList));
        } else {
            message.warn(data['message'], 1);
        }
    } catch (error) {
        message.warn(error, 1);
    }
}

