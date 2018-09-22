import React from "react";
import ReactDom from "react-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './serviceWorker/init_sw';
import './serviceWorker/random_asset';
import App from "./app";
import { BrowserRouter }    from 'react-router-dom';

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));