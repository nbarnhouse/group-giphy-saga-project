import { combineReducers } from 'redux';

import { searchResults, currentSearch } from './searchResults.reducer';
import { categories } from './categories.reducer';

// Import Reducers Here

const rootReducer = combineReducers({
  /* Reducers*/
  searchResults,
  categories,
  currentSearch,
});

export default rootReducer;
