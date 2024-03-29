import { combineReducers } from 'redux';

import { searchResults, currentSearch } from './searchResults.reducer';
import { categories } from './categories.reducer';
import { favorites } from './favorites.reducer';

// Import Reducers Here

const rootReducer = combineReducers({
  /* Reducers*/
  searchResults,
  categories,
  currentSearch,
  favorites,
});

export default rootReducer;
