import { put } from 'redux-saga/effects';
import axios from 'axios';

export function* deleteFavoriteSaga(action) {
  console.log('In deleteFavoriteSaga');

  try {
    const response = yield axios.delete(`/api/favorites/${action.payload.id}`);

    yield put({ type: 'GET_FAVORITES' });
  } catch (err) {
    console.log('ERROR in deleteFavoriteSaga:', err);
  }
}
