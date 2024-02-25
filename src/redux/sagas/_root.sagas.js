import { takeEvery } from 'redux-saga/effects';

import { getGiphySaga } from './getGiphy.saga';

import { getCategoriesSaga } from './getCategories.saga';
import { postCategorySaga } from './postCategory.saga';
import { deleteCategorySaga } from './deleteCategory.saga';
import { putCategorySaga } from './putCategory.saga';

import { getFavoritesSaga } from './getFavorites.saga';
import { postFavoriteSaga } from './postFavorite.saga';
import { deleteFavoriteSaga } from './deleteFavorite.saga';

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

  yield takeEvery('GET_FAVORITES', getFavoritesSaga);
  yield takeEvery('POST_FAVORITE', postFavoriteSaga);
  yield takeEvery('DELETE_FAVORITE', deleteFavoriteSaga);
}

export default rootSaga;
