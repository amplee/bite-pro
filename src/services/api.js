
import request from './../utils/request';


//  获取记录数据
export function recordData() {
    return request('/tradeData/recordData', {
        method: 'POST',
    });
}
