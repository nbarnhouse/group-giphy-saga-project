import { combineReducers } from 'redux';

import { searchResults } from './searchResults.reducer';

// Import Reducers Here

const rootReducer = combineReducers({
  /* Reducers*/
  searchResults,
});

export default rootReducer;
