import { put } from 'redux-saga/effects';
import axios from 'axios';

export function* putCategorySaga(action) {
  console.log('In putCategorySaga');

  try {
    const response = yield axios.put(
      `/api/categories/${action.payload.id}`,
      action.payload
    );

    yield put({ type: 'GET_CATEGORIES' });
  } catch (err) {
    console.log('ERROR in putCategorySaga:', err);
  }
}
