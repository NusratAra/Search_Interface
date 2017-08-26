import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './App';
import Search from './Components/Search.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
