import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import { Table } from 'antd';
import { TRADE_RECORD_COLUMNS } from '../../store/constants';

class TradeRecord extends Component {

    componentDidMount () {
        this.props.getRecordData();
    }

    render() {
        const { recordData } = this.props;
        return (
            <div>
                <Table 
                bordered
                rowKey={record => record.id}
                columns={TRADE_RECORD_COLUMNS}
                dataSource={recordData.length > 0 ? recordData[0].recordDataModelList : []}
                />
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

export default connect(mapStateToProps, mapDispathToProps)(tradeRecord);

