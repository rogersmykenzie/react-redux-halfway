import {createStore, applyMiddleware, combineReducers} from 'redux';
import showReducer from './reducers/showReducer';
import starWarsReducer from './reducers/starWarsReducer';
import promise from 'redux-promise-middleware';

const rootReducer = combineReducers({ showReducer, starWarsReducer })

const store = createStore(rootReducer, applyMiddleware(promise));

export default store;