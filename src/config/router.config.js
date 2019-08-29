
import TradeRecord from '../pages/trade/components/tradeRecord/tradeRecord';
import BuyRecord from '../pages/trade/components/buyRecord/buyRecord';
import Charts from '../pages/charts/index';
import KLine from '../pages/charts/components/kline/index';

export const routes = [
    { path: '/', component: TradeRecord },
    { path: '/tradeRecord', component: TradeRecord },
    { path: '/buyRecord', component: BuyRecord },
    { path: '/charts', component: Charts },
    { path: '/kLine', component: KLine },
]
