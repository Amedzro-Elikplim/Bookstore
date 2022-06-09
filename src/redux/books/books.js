const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];

    case 'REMOVE_BOOK':
      return [...state.filter((item) => item.id !== action.payload)];

    default:
      return state;
  }
};

export default bookReducer;
