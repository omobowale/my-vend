// require("./bootstrap");

import React from 'react';
import ReactDOM from 'react-dom';
import './assets/fonts/AirBnB/AirbnbCerealBlack.ttf';
import './assets/fonts/AirBnB/AirbnbCerealBold.ttf';
import './assets/fonts/AirBnB/AirbnbCerealBook.ttf';
import './assets/fonts/AirBnB/AirbnbCerealExtraBold.ttf';
import './assets/fonts/AirBnB/AirbnbCerealLight.ttf';
import './assets/fonts/AirBnB/AirbnbCerealMedium.ttf';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-datepicker/dist/react-datepicker.css';

import reportWebVitals from './reportWebVitals';
require("./bootstrap");

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
