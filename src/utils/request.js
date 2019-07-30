import {message} from 'antd';
import {urlPrefix} from '../config/index';
import axios from 'axios';

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
    515: 'token验证不通过或服务器错误',
};
// 设置全局参数，如响应超时时间，请求前缀等。
if (process.env.REACT_APP_SECRET_API === 'development' && process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = urlPrefix['requestUrl'];
}
axios.defaults.timeout = 10000;
axios.defaults.baseURL = urlPrefix['requestUrl'];
// 添加一个返回拦截器
axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default function request(url, option) {
    // 调用 axios api，统一拦截
    return axios(url, option)
        .then((response) => {
            // 请求成功

            // 响应时状态码401处理 或 响应时自定义状态码-401处理
            if (response['data'] && response['data']['status'] && (response['data']['status'] === 401 || response['data']['status'] === -401)) {
                return {data: {msgCode: 401, message: response['data']['message']}};
            }
            return {...response};
        }).catch((error) => {
            // 请求失败

            // 未返回数据时
            if (!error.response) {
                // callForceLogin();
                return {data: {msgCode: 500, message: codeMessage[515]}};
            }

            // 响应时状态码处理
            const status = error['response']['status'];
            const errorText = codeMessage[status] || error['response']['statusText'];
            message.warn(errorText, 1);

            // 请求超时处理
            if (error['name'] === 'TimeoutError') {
                message.warn('抱歉,请求超时！', 1);
                return;
            }
            // 存在请求，但是服务器的返回一个状态码，它们都在2xx之外
            return {data: {msgCode: status, message: errorText}};
        });
}




