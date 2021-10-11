export const addFoodToCartAction = (food) => ({
  type: 'ADD-TO-CART',
  food,
});

export const removeAction = (food) => ({
  type: 'REMOVE_FROM-CART',
  food,
});
