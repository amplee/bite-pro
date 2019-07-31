import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter, Link } from 'react-router-dom';
import { routes } from './config/router.config';
import GlobalLoading from "./components/loading";
import './App.css';
import store from './store';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

class App extends Component {
    render() {
        return (
            <Layout className="App">
                 {/* <Header style={{backgroundColor: '#1890ff'}}> */}
                 <Header>
                    <h1 className='mainTitle'>独家交易网站
                    </h1>
                    <span className='mainTitle'>amplee & wizard 强强联手打造</span>
                </Header>
                <Layout style={{ background: '#fff' }}>
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
                                    交易管理
                                </span>
                            }
                            >
                                <Menu.Item key="1">
                                    <HashRouter>
                                        <Link to={{ pathname: "/tradeRecord" }}>交易记录</Link>
                                    </HashRouter>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <HashRouter>
                                        <Link to={{ pathname: "/buyRecord" }}>买入记录</Link>
                                    </HashRouter>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout >
                    {/* <Breadcrumb style={{ margin: '16px 0', 'textAlign': 'left' }}>
                        <Breadcrumb.Item>交易管理</Breadcrumb.Item>
                        <Breadcrumb.Item>交易记录</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Content className='content' style={{ padding: '20px'}}>
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
                    </Content>
                    </Layout>
                </Layout>
                <Footer style={{ 'textAlign': 'center' }}>bite pro ©2019 Created by amplee</Footer>
            </Layout>
        );
    }
}
export default App;

