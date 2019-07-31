import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import { Table, Row, Col } from 'antd';
import { BUY_RECORD_COLUMNS } from '../../store/constants';

class BuyRecord extends Component {

    componentDidMount () {
        this.props.getBuyData();
    }

    render() {
        const { buyData, index } = this.props;
        console.log('buyData', buyData);
        const { btcusdt, eosusdt, htusdt, xrpusdt } = buyData;
        return (
            <div>
                {btcusdt && 
                <div>
                    {/* <Row gutter={16} style={{marginBottom: '20px'}}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">交易类型：{symbol}</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">买入次数：{statisticsModel.buyCount}</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">卖出次数：{statisticsModel.sellCount}</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">expend：{statisticsModel.buyCount}</div>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{marginBottom: '20px'}}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">剩余：{statisticsModel.surplus }</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">剩余平均价：{statisticsModel.surplusAvgPrice}</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">交易收益：{statisticsModel.tradeProfit }</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">当前价格：{statisticsModel.presentPrice }</div>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{marginBottom: '20px'}}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">最后收益：{statisticsModel.finalProfit }</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">下次预测交易价格：{statisticsModel.predictNextBuy}</div>
                        </Col>
                    </Row> */}
                    <Table 
                        bordered
                        rowKey={record => record.id}
                        columns={BUY_RECORD_COLUMNS}
                        dataSource={btcusdt.length > 0 ? btcusdt : []}
                    />
                </div>}
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        buyData: state.getIn(['tradeRecord', 'buyData']),
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        getBuyData() {
            dispatch(actionCreators.getBuyData());
        },
    }
}
export default connect(mapStateToProps, mapDispathToProps)(BuyRecord);
