// 获取数据
export const GET_TRADE_RECORD = 'tradeRecord/GET_TRADE_RECORD';

export const TRADE_RECORD_COLUMNS = [{
    title: '订单号',
    width: 100,
    dataIndex: 'id',
}, {
    title: '交易时间',
    width: 150,
    dataIndex: 'timeStampStr',
}, {
    title: '类型',
    width: 100,
    dataIndex: 'type',
}, {
    title: '买入价格',
    width: 100,
    dataIndex: 'buyPrice',
}, {
    title: '数量',
    width: 100,
    dataIndex: 'amount',
}, {
    title: '卖出价格',
    width: 100,
    dataIndex: 'sellPrice',
}, {
    title: '手续费',
    width: 100,
    dataIndex: 'fee',
}, {
    title: '花费',
    width: 100,
    dataIndex: 'expend',
}, {
    title: '收益',
    dataIndex: 'profit',
    width: '100px',
}];
