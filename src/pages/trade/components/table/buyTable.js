import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import { Table } from 'antd';
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
                <div>
                    <Table
                        bordered
                        rowKey={record => record.id}
                        columns={BUY_RECORD_COLUMNS}
                        dataSource={btcusdt.length > 0 ? btcusdt : []}
                    />
                    <Table
                        bordered
                        rowKey={record => record.id}
                        columns={BUY_RECORD_COLUMNS}
                        dataSource={eosusdt.length > 0 ? eosusdt : []}
                    />
                    <Table
                        bordered
                        rowKey={record => record.id}
                        columns={BUY_RECORD_COLUMNS}
                        dataSource={htusdt.length > 0 ? htusdt : []}
                    />
                    <Table
                        bordered
                        rowKey={record => record.id}
                        columns={BUY_RECORD_COLUMNS}
                        dataSource={xrpusdt.length > 0 ? xrpusdt : []}
                    />
                </div>
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
