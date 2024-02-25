import { put } from 'redux-saga/effects';
import axios from 'axios';

export function* getGiphySaga(action) {
  console.log('In getGiphySaga');

  try {
    const searchResponse = yield axios.post('/api/search', {
      searchTerm: action.payload.name,
      pageLimit: action.payload.limit,
    });
    yield put({ type: 'SET_SEARCH_RESULTS', payload: searchResponse.data });
  } catch (err) {
    console.log('ERROR in getGiphySaga:', err);
  }
}
