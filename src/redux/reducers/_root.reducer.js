import { combineReducers } from 'redux';

import { searchResults } from './searchResults.reducer';
import { categories } from './categories.reducer';

// Import Reducers Here

const rootReducer = combineReducers({
  /* Reducers*/
  searchResults,
  categories,
});

export default rootReducer;
