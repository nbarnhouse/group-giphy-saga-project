import { put } from 'redux-saga/effects';
import axios from 'axios';

export function* deleteCategorySaga(action) {
  console.log('In deleteCategorySaga');

  try {
    const response = yield axios.delete(`/api/categories/${action.payload.id}`);

    yield put({ type: 'GET_CATEGORIES' });
  } catch (err) {
    console.log('ERROR in deleteCategorySaga:', err);
  }
}
