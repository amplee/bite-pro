import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Route, HashRouter} from 'react-router-dom';
import {routes} from './config/router.config';
import GlobalLoading from "./components/loading";
import './App.css';
import store from './store';

class App extends Component {
    render() {
        return (
            <div className="App">
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
            </div>
        );
    }
}
export default App;

