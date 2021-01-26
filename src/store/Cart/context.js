import React, { useState, createContext } from 'react'

export const CartContext = createContext(null)

export const CartProvider = (props) => {
  const [products, setProducts] = useState([])
  // eslint-disable-next-line react/destructuring-assignment
  return <CartContext.Provider value={[products, setProducts]}>{props.children}</CartContext.Provider>
}
