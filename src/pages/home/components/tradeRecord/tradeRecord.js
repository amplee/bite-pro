import React, { Component } from 'react';
import { Tabs } from 'antd';
import TradeTable from '../table/table';

const TabPane = Tabs.TabPane;
class TradeRecord extends Component {

    // componentDidMount () {
    //     this.props.getRecordData();
    // }

    render() {
        return (
            <div>
                <Tabs>
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


// const mapStateToProps = (state) => {
//     return {
//         recordData: state.getIn(['tradeRecord', 'recordData']),
//     }
// }

// const mapDispathToProps = (dispatch) => {
//     return {
//         getRecordData() {
//             dispatch(actionCreators.getRecordData());
//         },
//     }
// }

export default TradeRecord;

