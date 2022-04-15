import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import testReducer from './test.reducer';

const createRootReducer = (history) =>
  combineReducers({
    test: testReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
