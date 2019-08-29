import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';

class Home extends Component {
    getOption = ()=> {
        let option = {
            title:{
              text:'买入记录'
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
            <ReactEcharts
               option={this.getOption()}
            />
        );
    }
}
export default Home;

