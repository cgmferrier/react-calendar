import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer } from 'store/reducers';

export default createStore(appReducer, composeWithDevTools(applyMiddleware()));