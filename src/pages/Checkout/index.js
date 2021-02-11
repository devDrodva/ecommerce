import React from 'react'
import Wrapper from '../../components/Wrapper'
import ProductDescription from './productDescription'
import {
  StyledProfile,
  StyledCheckout,
  StyledTotal,
  StyledTextContainer,
  StyledAmountContainer,
  StyledBtnCheckout,
} from './styles'

const CheckOut = () => {
  return (
    <Wrapper>
      <StyledProfile>
        <StyledCheckout>
          <p className='checkout'>Checkout</p>
          <hr className='hr-checkout' />
          <ProductDescription />
          <hr />
          <StyledTotal>
            <StyledTextContainer>
              <p>Subtotal</p>
              <p>Shipping</p>
              <p>Taxes</p>
              <p className='total'>Total</p>
            </StyledTextContainer>
            <StyledAmountContainer>
              <p>$169,96</p>
              <p>Free</p>
              <p>$22,09</p>
              <p className='total-amount'>$192,05</p>
            </StyledAmountContainer>
          </StyledTotal>
          <hr />
          <StyledBtnCheckout>
            <p>confirm checkout</p>
          </StyledBtnCheckout>
        </StyledCheckout>
      </StyledProfile>
    </Wrapper>
  )
}

export default CheckOut
