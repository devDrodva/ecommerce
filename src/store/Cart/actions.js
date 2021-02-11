export const ADD_PRODUCT = (product) => ({
  type: 'ADD_PRODUCT',
  payload: product,
})

export const REMOVE_PRODUCT = (productId) => ({
  type: 'REMOVE_PRODUCT',
  payload: productId,
})
