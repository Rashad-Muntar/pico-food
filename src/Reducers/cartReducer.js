const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD-TO-CART':
      return [...state, action.food];

    case 'REMOVE_FROM-CART':
      return state.filter((food) => food.id !== action.food.id);
    default:
      return state;
  }
};

export default cartReducer;
