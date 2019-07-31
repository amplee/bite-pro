import React, { Component } from 'react';
import { Tabs } from 'antd';
import TradeTable from '../table/tradeTable';

const TabPane = Tabs.TabPane;
class TradeRecord extends Component {

    render() {
        return (
            <div>
                <Tabs style={{ textAlign: 'left' }}>
                    <TabPane tab="xrpusdt" key="1">
                        <TradeTable index={0}/>
                    </TabPane>
                    <TabPane tab="btcusdt" key="2">
                        <TradeTable index={1}/>
                    </TabPane>
                    <TabPane tab="htusdt" key="3">
                        <TradeTable index={2}/>
                    </TabPane>
                    <TabPane tab="eosusdt" key="4">
                        <TradeTable index={3}/>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
    
}

export default TradeRecord;

