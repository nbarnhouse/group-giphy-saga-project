import { takeEvery } from 'redux-saga/effects';

import { getGiphySaga } from './getGiphy.saga';

// Import Saga files here

// SAGA Function
function* rootSaga() {
  // enter yield functions here
  // e.g. yield takerEvery('SOME_SAGA', getSomeSaga);
  yield takeEvery('GET_GIPHY', getGiphySaga);
}

export default rootSaga;
