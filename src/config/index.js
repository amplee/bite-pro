let requestUrl = ''; // apiUrl
switch (process.env.NODE_ENV) {
    case 'development':
        requestUrl = ' http://172.25.62.50:7300/mock/5d3ea47b49e43600209ed9e0/bitePro'; // development mock开发数据
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
console.log(requestUrl);
export const urlPrefix = {requestUrl};

