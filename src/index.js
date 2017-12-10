import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import reducers from './redux/reducers';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
