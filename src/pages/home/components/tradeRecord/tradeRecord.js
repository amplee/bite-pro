import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../../store';

class TradeRecord extends Component {

    componentDidMount () {
        this.props.getRecordData();
    }

    render() {
        console.log('this.props.recordData',this.props.recordData)
        return (
            <div>
                交易记录
            </div>
        );
    }
    
}


const mapStateToProps = (state) => {
    console.log('getIn',state, state.getIn(['trade', 'recordData']));
    return {
        recordData: state.getIn(['trade', 'recordData']),
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

