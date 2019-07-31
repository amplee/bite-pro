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
