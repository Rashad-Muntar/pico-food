const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD-TO-CART':
      return [...state, action.food];

    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export default cartReducer;
