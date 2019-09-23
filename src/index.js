import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {HashRouter} from 'react-router-dom';
import './scss/main.scss';


ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
