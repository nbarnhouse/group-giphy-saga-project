export const favorites = (state = [], action) => {
    if (action.type === 'SET_FAVORTIES') {
      console.log('Do something with payload:', action.payload);
      const newState = [];
      action.payload.forEach((item) => {
        newState.push(item);
      });
      return newState;
    }
    return state;
  };
  