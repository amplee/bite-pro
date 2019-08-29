
import TradeRecord from '../pages/trade/components/tradeRecord/tradeRecord';
import BuyRecord from '../pages/trade/components/buyRecord/buyRecord';
import Charts from '../pages/charts/index';

export const routes = [
    { path: '/', component: TradeRecord },
    { path: '/tradeRecord', component: TradeRecord },
    { path: '/buyRecord', component: BuyRecord },
    { path: '/charts', component: Charts },
]
