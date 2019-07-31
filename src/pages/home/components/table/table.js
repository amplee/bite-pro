import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import { Table, Row, Col } from 'antd';
import { TRADE_RECORD_COLUMNS } from '../../store/constants';

class TradeRecord extends Component {

    componentDidMount () {
        this.props.getRecordData();
    }

    render() {
        const { recordData, index } = this.props;
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
                            <div className="gutter-box">卖出次数：{statisticsModel.buyCount}</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">卖出次数：{statisticsModel.buyCount}</div>
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
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        getRecordData() {
            dispatch(actionCreators.getRecordData());
        },
    }
}
export default connect(mapStateToProps, mapDispathToProps)(TradeRecord);
