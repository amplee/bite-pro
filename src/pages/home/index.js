import React, {Component} from 'react';
import { Tabs} from 'antd';
import BuyRecord from './components/buyRecord/buyRecord';
import TradeRecord from './components/tradeRecord/tradeRecord';

const TabPane = Tabs.TabPane;
class Home extends Component {
    render() {
        return (
            <Tabs type="card">
                <TabPane tab="买入记录" key="1">
                    <BuyRecord/>
                </TabPane>
                <TabPane tab="交易记录" key="2">
                    <TradeRecord/>
                </TabPane>
            </Tabs>
        );
    }
}
export default Home;

