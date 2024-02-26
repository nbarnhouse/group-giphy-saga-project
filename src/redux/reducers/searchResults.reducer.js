export const searchResults = (state = [], action) => {
  if (action.type === 'SET_SEARCH_RESULTS') {
    console.log('Do something with payload:', action.payload);
    const newState = [];
    action.payload.forEach((item) => {
      newState.push(item);
    });
    return newState;
  }
  return state;
};

export const currentSearch = (state = '', action) => {
  if (action.type === 'SET_CURRENT_SEARCH') {
    return action.payload;
  }
  return state;
};
