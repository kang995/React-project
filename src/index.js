import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//引入main.scss样式文件
import './stylesheets/main.scss'
//引入post.js文件
import "./modules/axios-util"
import "./modules/rem"
import {HashRouter as Router} from 'react-router-dom'
import {Provider} from "react-redux"
import store from "./store"
//引入swiper.css样式
import "swiper/dist/css/swiper.min.css"
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,document.getElementById('root'));



