import React, { useReducer, createContext } from 'react'
import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions'
import ProductReducer from './reducers'

const ProductContext = createContext()
const cart = []

const ProductState = (props) => {
  const [state, dispatch] = useReducer(ProductReducer, cart)

  const addProductToCart = () => {
    setTimeout(() => {
      dispatch(ADD_PRODUCT)
    }, 700)
  }

  const removeProductFromCart = () => {
    setTimeout(() => {
      dispatch(REMOVE_PRODUCT)
    }, 700)
  }

  return (
    <ProductContext.Provider
      value={{
        state,
        cart: state.cart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {
        //  eslint-disable-next-line react/destructuring-assignment
        props.children
      }
    </ProductContext.Provider>
  )
}
export default ProductState
