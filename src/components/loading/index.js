import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Spin} from 'antd';
import {actionCreators} from './store';
import styles from './index.less';

class GlobalLoading extends Component {

    componentWillMount() {
        this.props.getGlobalUserInfoIntProtocol();
    }

    render() {
        const {loading} = this.props;
        return (
            <div className={styles.spinWrapper}>
            <Spin tip="加载中,请稍后……" size="large" className={styles.spin} delay={500} spinning={loading}>
            </Spin>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.getIn(['global', 'loading']),
        loadingText: state.getIn(['global', 'loadingText'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        getGlobalUserInfoIntProtocol() {
            dispatch(actionCreators.getGlobalUserInfoIntProtocol());
        },
    }
}

export default connect(mapStateToProps, mapDispathToProps)(GlobalLoading);
