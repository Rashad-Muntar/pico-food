export const addFoodToCartAction = (food) => ({
  type: 'ADD-TO-CART',
  food,
});

export const removeAction = (book) => ({
  type: 'REMOVE_BOOK',
  book,
});
