import React, {Component} from 'react';
import {Button} from 'antd';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <Button type="primary">查看买记录</Button>
                <Button type="primary">查看交易记录</Button>
            </div>
        );
    }
}
export default Home;

