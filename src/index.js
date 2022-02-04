import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import ReactGA from 'react-ga'
//import './components/Layout/Menu'
ReactGA.initialize('UA-216933655-1');
ReactGA.pageview(window.location.pathname + window.location.search);
//axios.defaults.baseURL="http://localhost:8080"
axios.defaults.baseURL="https://singlet.herokuapp.com"

ReactDOM.render(<App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
