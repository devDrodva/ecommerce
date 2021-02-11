import React, { useContext } from 'react'
import ProductContext from '../../../store/Cart/context'
import Nav from '../../../components/Navbar'

import {
  StyledProductDescription,
  StyledProductImage,
  StyledProductCost,
  StyledAddProduct,
  StyledCounter,
} from './styles'

const ProductDescription = () => {
  const { cart } = useContext(ProductContext)
  return (
    <>
      <Nav
        cartItemNumber={cart.reduce((count, curItem) => {
          return count + curItem.quantity
        }, 0)}
      />
      {cart.map((product) => (
        <StyledProductDescription>
          <StyledProductImage />
          <StyledProductCost>
            <p>{product.name}</p>
            <StyledAddProduct>
              <button type='button' className='btn-products'>
                -
              </button>
              <StyledCounter>
                <span>10</span>
              </StyledCounter>
              <button type='button' className='btn-products'>
                +
              </button>
            </StyledAddProduct>
            <p>{product.price}</p>
          </StyledProductCost>
        </StyledProductDescription>
      ))}
    </>
  )
}
export default ProductDescription
