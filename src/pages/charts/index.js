import React, {Component} from 'react';
import { Tabs} from 'antd';
// import BuyRecord from './components/buyRecord/buyRecord';
// import TradeRecord from './components/tradeRecord/tradeRecord';
import ReactEcharts from 'echarts-for-react'

const TabPane = Tabs.TabPane;
class Home extends Component {
    getOption =()=> {
        let option = {
            title:{
              text:'用户骑行订单'
            },
            tooltip:{   //展示数据
              trigger:'axis'
            },
            xAxis:{
              data:['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis:{
              type:'value'
            },
            series:[
              {
                name:'订单量',
                type:'bar',
                data:[1000,2000,1500,3000,2000,1200,800]
              }
            ]
        }
        return option;
    }
    render() {
        return (
            <Tabs type="card">
                <TabPane tab="买入记录" key="1">
                    {/* <BuyRecord/> */}
                </TabPane>
                <TabPane tab="交易记录" key="2">
                    {/* <TradeRecord/> */}
                </TabPane>
                <TabPane>
                    <ReactEcharts
                        option={this.getOption}
                    />
                </TabPane>
            </Tabs>
        );
    }
}
export default Home;

