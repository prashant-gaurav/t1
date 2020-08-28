import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './assets/fonts/Ubuntu-Medium.ttf'
import './assets/fonts/Nunito-Light.ttf'
import './assets/fonts/Nunito-Regular.ttf'
import './assets/fonts/Nunito-Bold.ttf'
import './assets/css/index.css';
import './assets/css/button.css';
import store from './redux/store'
import Roure from './Roures';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Roure/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
