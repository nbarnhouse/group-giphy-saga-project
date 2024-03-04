import { put } from 'redux-saga/effects';
import axios from 'axios';

export function* putFavoriteSaga(action) {
  console.log('In putFavoriteSaga');

  try {
    const response = yield axios.put(
      `/api/favorites/${action.payload.id}`,
      action.payload
    );

    yield put({ type: 'GET_FAVORITES' });
  } catch (err) {
    console.log('ERROR in putFavoriteSaga:', err);
  }
}
