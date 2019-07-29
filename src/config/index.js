let requestUrl = ''; // apiUrl
switch (process.env.REACT_APP_SECRET_API) {
    case 'development':
        requestUrl = 'https://www.easy-mock.com/mock/5cc17b8403f4ee3c8d638510/yxt'; // development mock开发数据
        // requestUrl = 'http://biztest.bestwehotel.com/corp-openapi/dev'; // development开发数据
        // /requestUrl = 'http://biztest.bestwehotel.com/corp-openapi'; // test 测试环境
        break;
    case 'test':
        requestUrl = 'http://biztest.bestwehotel.com/corp-openapi'; // test 测试环境
        break;
    case 'preprod':
        requestUrl = 'https://bizgw.bestwehotel.com/corp-openapi';  // preprod预生产环境  和 production一样
        break;
    case 'production':
        requestUrl = 'https://bizgw.bestwehotel.com/corp-openapi';   // production 生产环境
        break;
    default:
        requestUrl = 'http://biztest.bestwehotel.com/corp-openapi/dev'; // development mock开发数据
        break;
}
export const urlPrefix = {requestUrl};

