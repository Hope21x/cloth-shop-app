import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import {persistStore} from 'redux-persist';
import rootReducer from './root-reducer';

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
//logger middleware allows us to view actions and state changes in out browser console