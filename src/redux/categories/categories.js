const initialState = '';

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return action.payload;
    default:
      return state;
  }
};

export default categoryReducer;
