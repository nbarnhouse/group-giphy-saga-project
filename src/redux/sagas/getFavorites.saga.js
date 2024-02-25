import { put } from 'redux-saga/effects';
import axios from 'axios';

export function* getFavoritesSaga(action) {
  console.log('In getFavoritesSaga');

  try {
    const response = yield axios.get('/api/favorites');

    yield put({ type: 'SET_FAVORITES', payload: response.data });
  } catch (err) {
    console.log('ERROR in getFavoritesSaga:', err);
  }
}
