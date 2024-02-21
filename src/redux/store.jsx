import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/_root.reducer';
import rootSaga from './sagas/_root.sagas';

// SAGA Middleware
const sagaMiddleware = createSagaMiddleware();

// Store
const giphyStore = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default giphyStore;
