
import request from './../utils/request';


//  获取交易记录数据
export function recordData() {
    return request('/tradeData/recordData', {
        method: 'POST',
    });
}

//  获取买入记录数据
export function buyData() {
    return request('/tradeData/buyData', {
        method: 'POST',
    });
}

//  获取当前价格数据
export function presentPrice(params) {
    return request('/tradeData/getPresentPrice', {
        method: 'POST',
        params
    });
}
