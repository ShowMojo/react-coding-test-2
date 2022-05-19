import {combineReducers} from 'redux';
import configureStore from './configStore';
import rootSaga from './configSaga';
import reducers from './reducers';

export default () => {
  const rootReducer = combineReducers({reducers});
  return configureStore(rootReducer, rootSaga);
};
