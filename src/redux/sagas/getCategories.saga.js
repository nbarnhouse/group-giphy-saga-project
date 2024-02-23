import { put } from 'redux-saga/effects';
import axios from 'axios';

export function* getCategoriesSaga(action) {
  console.log('In getCategoriesSaga');

  try {
    const response = yield axios.get('/api/categories');

    yield put({ type: 'SET_CATEGORIES', payload: response.data });
  } catch (err) {
    console.log('ERROR in getCategoriesSaga:', err);
  }
}
