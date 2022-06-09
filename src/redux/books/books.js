const initialState = [
  { id: '1', title: 'Hamlet', author: 'William Shakespear' },
  { id: '2', title: 'Romeo and Julliet', author: 'William Shakespear' },
  { id: '3', title: 'Silver spoon', author: 'Peggy Oppong' },
];

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
