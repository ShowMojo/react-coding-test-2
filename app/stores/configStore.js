import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';

export default (rootReducer, rootSaga) => {
  let middleware = [];
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  middleware = [sagaMiddleware];
  middleware.push(createLogger());
  enhancers.push(applyMiddleware(...middleware));
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleware),
      global.reduxNativeDevTools
        ? global.reduxNativeDevTools({name: 'FirstDerm'})
        : nope => nope,
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
