import {createStore, applyMiddleware} from 'redux';
import reducers from './redux/reducers';

import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(reducers)

export default store
