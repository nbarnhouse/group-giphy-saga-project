import { put } from 'redux-saga/effects';
import axios from 'axios';

export function* postFavoriteSaga(action) {
  console.log('In postFavoriteSaga');

  try {
    const response = yield axios.post('/api/favorites', action.payload);

    yield put({ type: 'GET_FAVORITES' });
  } catch (err) {
    console.log('ERROR in postFavoriteSaga:', err);
  }
}
