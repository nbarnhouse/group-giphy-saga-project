import { put } from 'redux-saga/effects';
import axios from 'axios';

export function* postCategorySaga(action) {
  console.log('In postCategorySaga');

  try {
    const response = yield axios.post('/api/categories', action.payload);

    yield put({ type: 'GET_CATEGORIES' });
  } catch (err) {
    console.log('ERROR in postCategorySaga:', err);
  }
}
