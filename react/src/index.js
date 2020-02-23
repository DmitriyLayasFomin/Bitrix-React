import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './assets/css/bootstrap.css';
import './assets/slick/slick.css';
import './assets/slick/slick-theme.css';
import './assets/css/style.css';
import Main from './Pages/Main';
import Catalog from './Pages/Catalog';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {store} from "./redux/configureStore"




// const store = createStoreHook(rootReducer);
ReactDOM.render(<Provider store={store}>
    <Router>
        <Switch>
            <Route render={routeProps => (<Catalog {...routeProps}  />)} path="/catalog/:code?">

            </Route>
            <Route path="/">
                <Main />
            </Route>
        </Switch>
    </Router>

</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
