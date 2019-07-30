// 获取数据
export const GET_TRADE_RECORD = 'tradeRecord/GET_TRADE_RECORD';

export const TRADE_RECORD_COLUMNS = [{
    title: '订单号(id)',
    width: 100,
    dataIndex: 'id',
}, {
    title: '交易时间(time)',
    width: 150,
    dataIndex: 'timeStampStr',
}, {
    title: '类型(type)',
    width: 100,
    dataIndex: 'type',
}, {
    title: '买入价格(buyPrice)',
    width: 100,
    dataIndex: 'buyPrice',
}, {
    title: '数量(amount)',
    width: 100,
    dataIndex: 'amount',
}, {
    title: '卖出价格(sellPrice)',
    width: 100,
    dataIndex: 'sellPrice',
}, {
    title: '手续费(fee)',
    width: 100,
    dataIndex: 'fee',
}, {
    title: '花费(expend)',
    width: 100,
    dataIndex: 'expend',
}, {
    title: '收益(profit)',
    dataIndex: 'profit',
    width: '100px',
}];
