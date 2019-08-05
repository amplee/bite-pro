import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import { Table, Row, Col } from 'antd';
import { TRADE_RECORD_COLUMNS } from '../../store/constants';

class TradeRecord extends Component {

    componentDidMount () {
        const {index} = this.props;
        let symbol = 'xrpusdt';
        switch (index) {
            case 1:
                symbol = 'btcusdt';
            break;
            case 2:
                symbol = 'htusdt';
            break;
            case 3:
                symbol = 'eosusdt';
            break;
            default:
                symbol = 'xrpusdt';
            break;
        }
        this.props.getRecordData();
        this.props.getPresentPrice({symbol});
    }

    render() {
        const { recordData, index, presentPrice } = this.props;
        const { recordDataModelList, statisticsModel, symbol } = recordData.length > 0 && recordData[index];
        return (
            <div>
                {recordData.length > 0 && 
                <div>
                    <Row gutter={16} style={{marginBottom: '20px'}}>
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
                            <div className="gutter-box">当前价格：{presentPrice}</div>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{marginBottom: '20px'}}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">总收益：{statisticsModel.expend + statisticsModel.surplus * presentPrice * 0.998 }</div>
                        </Col>
                        <Col className="gutter-row" span={12}>
                            <div className="gutter-box">下次预测交易价格：{presentPrice * 0.985}</div>
                        </Col>
                    </Row>
                    <Table 
                        bordered
                        rowKey={record => record.id}
                        columns={TRADE_RECORD_COLUMNS}
                        dataSource={recordDataModelList.length > 0 ? recordDataModelList : []}
                    />
                </div>}
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        recordData: state.getIn(['tradeRecord', 'recordData']),
        presentPrice: state.getIn(['tradeRecord', 'presentPrice']),
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        getRecordData() {
            dispatch(actionCreators.getRecordData());
        },
        getPresentPrice(params) {
            dispatch(actionCreators.getPresentPrice(params));
        },
    }
}
export default connect(mapStateToProps, mapDispathToProps)(TradeRecord);
