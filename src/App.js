import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter} from 'react-router-dom';
import { routes } from './config/router.config';
import GlobalLoading from "./components/loading";
import './App.css';
import store from './store';
import { Layout, Menu, Icon } from 'antd';
import { TradeRecord } from './pages/home/components/tradeRecord/tradeRecord';

const { Header, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
    render() {
        return (
            <div className="App">
                 {/* <Header style={{backgroundColor: '#1890ff'}}> */}
                 <Header>
                    <h1 className='mainTitle'>独家交易网站
                    </h1>
                    <span className='mainTitle'>amplee & wizard 强强联手打造</span>
                </Header>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="trademark" />
                                <Route key={'tradeRecord'} path={'/tradeRecord'} exact component={TradeRecord}>交易记录</Route>
                            </span>
                        }
                        >
                            <Menu.Item key="1">买入记录</Menu.Item>
                            <Menu.Item key="2">交易记录</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Provider store={store}>
                    <HashRouter>
                        <div>
                            <div>
                                {routes && routes.map((route) =>
                                    <Route key={route.path} path={route.path} exact component={route.component}></Route>
                                )}
                                <GlobalLoading/>
                            </div>
                        </div>
                    </HashRouter>
                </Provider>
                <Footer style={{ textAlign: 'center' }}>bite pro ©2019 Created by amplee</Footer>
            </div>
        );
    }
}
export default App;

