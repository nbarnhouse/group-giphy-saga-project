import { takeEvery } from 'redux-saga/effects';

import { getGiphySaga } from './getGiphy.saga';
import { getCategoriesSaga } from './getCategories.saga';
import { postCategorySaga } from './postCategory.saga';
import { deleteCategorySaga } from './deleteCategory.saga';
import { putCategorySaga } from './putCategory.saga';

// Import Saga files here

// SAGA Function
function* rootSaga() {
  // enter yield functions here
  // e.g. yield takerEvery('SOME_SAGA', getSomeSaga);
  yield takeEvery('GET_GIPHY', getGiphySaga);
  yield takeEvery('GET_CATEGORIES', getCategoriesSaga);
  yield takeEvery('POST_CATEGORY', postCategorySaga);
  yield takeEvery('DELETE_CATEGORY', deleteCategorySaga);
  yield takeEvery('PUT_CATEGORY', putCategorySaga);
}

export default rootSaga;
